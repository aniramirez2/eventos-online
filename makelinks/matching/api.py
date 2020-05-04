from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.decorators import action

from matching.models import MatchRecommentation
from matching.services import MatchingService
from matching.serializers import MatchRecommentationSerializer, MatchSerializer
from matching.mixins import MatchCreateListMixin


class MatchTriggerViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['post'])
    def match(self, request):
        MatchingService().match_common_interests()

        return Response({})


class MatchRecommendationAPI(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = MatchRecommentationSerializer

    def get_queryset(self):
        user = self.request.user

        queryset = user.user_match_recommendations.all()
        queryset = queryset | user.match_match_recommendations.all()

        return queryset


class MatchAPI(MatchCreateListMixin, generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = MatchSerializer

    def get_queryset(self):
        user = self.request.user

        queryset = user.user_matchings.all()
        queryset = queryset | user.match_matchings.all()

        return queryset

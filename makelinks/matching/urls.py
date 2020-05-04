from matching.api import MatchTriggerViewSet, MatchRecommendationAPI, MatchAPI
from django.urls import path, include


urlpatterns = [
    path('api/network/start', MatchTriggerViewSet.as_view({'post': 'match'})),
    path('api/network/match', MatchAPI.as_view()),
    path('api/network/recommendation', MatchRecommendationAPI.as_view()),
]

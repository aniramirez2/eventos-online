from django.contrib.auth import authenticate
from django.db.models import Q

from rest_framework import serializers

from matching.models import MatchRecommentation, Match
from accounts.models import User

from accounts.serializers import UserSerializer
from events.serializers import EventSerializer


class MatchListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        user = self.context.get('request').user
        instances = []

        for match in self.initial_data:
            if match['match']['id'] == user.id:
                continue

            match = match['match']['id']
            if self.new_match(user, match):
                fields = {'user': user, 'match_id': match, 'event_id': 1}
                instances.append(Match(**fields))

        return Match.objects.bulk_create(instances)

    def new_match(self, user, match_id):
        query = Q(user=user, match_id=match_id, event_id=1)
        query = query | Q(match=user, user_id=match_id, event_id=1)

        return not Match.objects.filter(query).exists()


class MatchSerializer(serializers.ModelSerializer):
    match = serializers.SerializerMethodField()

    class Meta:
        model = Match
        fields = ('match', )
        list_serializer_class = MatchListSerializer

    def get_match(self, model):
        request = self.context.get('request')

        if request.user == model.match:
            return UserSerializer(model.user).data

        return UserSerializer(model.match).data


class MatchRecommentationSerializer(MatchSerializer):
    score = serializers.IntegerField(required=False)

    class Meta:
        model = MatchRecommentation
        fields = ('match', 'score')

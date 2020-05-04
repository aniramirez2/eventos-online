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

        for match_id in self.initial_data:
            match_id = match_id['match']['id']
            if match_id == user.id:
                continue

            fields = {'user_id': match_id, 'match': user, 'event_id': 1}
            if not Match.objects.filter(**fields).exists():
                fields = {'user': user, 'match_id': match_id, 'event_id': 1}
                instances.append(Match(**fields))

        return Match.objects.bulk_create(instances)


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

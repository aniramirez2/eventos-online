from django.contrib.auth import authenticate

from rest_framework import serializers

from matching.models import MatchRecommentation
from accounts.serializers import UserSerializer


class MatchRecommentationSerializer(serializers.ModelSerializer):
    match = serializers.SerializerMethodField()

    class Meta:
        model = MatchRecommentation
        fields = ('match', 'score')

    def get_match(self, model):
        request = self.context.get('request')

        if request.user == model.match:
            return UserSerializer(model.user).data

        return UserSerializer(model.match).data

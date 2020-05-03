from django.contrib.auth import authenticate

from rest_framework import serializers

from accounts.models import (
    OccupationArea, UserInterests,
    User, Interest
)


class OccupationAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = OccupationArea
        fields = '__all__'


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = '__all__'


class UserInterestsSerializer(serializers.ModelSerializer):
    interest = InterestSerializer()

    class Meta:
        model = UserInterests
        fields = ('id', 'interest')


class UserSerializer(serializers.ModelSerializer):
    occupation_area = OccupationAreaSerializer()
    interests = UserInterestsSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'description',
                  'linkedin_url', 'occupation_area', 'interests')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password', 'description',
                  'linkedin_url', 'occupation_area')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        fields = ('name', 'password', 'description',
                  'linkedin_url', 'occupation_area')
        user_data = {field: validated_data[field] for field in fields}
        user = User.objects.create_user(validated_data['email'], **user_data)

        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user

        raise serializers.ValidationError("Incorrect Credentials")

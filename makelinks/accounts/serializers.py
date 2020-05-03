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
        fields = ('interest', 'level')


class UserSerializer(serializers.ModelSerializer):
    occupation_area = OccupationAreaSerializer()
    interests = UserInterestsSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'description',
                  'linkedin_url', 'occupation_area', 'interests')

    def update(self, instance, validated_data):
        self._format_occupation_area(instance, validated_data)
        self._format_user_interests(instance, validated_data)

        super().update(instance, validated_data)

        return instance

    def _format_occupation_area(self, instance, validated_data):
        area = self.initial_data.get('occupation_area')

        if area:
            instance.occupation_area = OccupationArea.objects.get(
                pk=area['id']
            )
            instance.save()

    def _format_user_interests(self, instance, validated_data):
        interests = self.initial_data.get('interests')

        if interests:  # NOTE: pro futuro, nao pode simplesmente apagar td
            instance.interests.all().delete()
            for interest in interests:
                UserInterests.objects.create(user=instance,
                                             interest_id=interest['id'],
                                             level=interest['level'])


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

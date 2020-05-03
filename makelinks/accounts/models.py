from django.db import models
from django.contrib.auth.models import AbstractUser

from accounts.managers import UserManager

from events.models import Event


class OccupationArea(models.Model):
    name = models.CharField(max_length=200)


class User(AbstractUser):
    objects = UserManager()

    username = None
    first_name = None
    last_name = None

    REQUIRED_FIELDS = []

    USERNAME_FIELD = 'email'
    email = models.EmailField(unique=True)
    professional_email = models.EmailField(blank=True)

    name = models.CharField(max_length=200)
    description = models.TextField()
    linkedin_url = models.CharField(max_length=150, blank=True)
    occupation_area = models.ForeignKey(OccupationArea,
                                        related_name='users',
                                        on_delete=models.PROTECT)


class Interest(models.Model):
    name = models.CharField(max_length=150)


class UserInterests(models.Model):
    class InterestLevel(models.IntegerChoices):
        HIGH = 1
        MEDIUM = 2
        LOW = 3

    user = models.ForeignKey(User,
                             related_name="interests",
                             on_delete=models.PROTECT)
    interest = models.ForeignKey(Interest,
                                 related_name="users",
                                 on_delete=models.PROTECT)
    level = models.IntegerField(choices=InterestLevel.choices,
                                default=InterestLevel.HIGH)


class UserEvents(models.Model):
    user = models.ForeignKey(User,
                             related_name='events',
                             on_delete=models.CASCADE)
    event = models.ForeignKey(Event,
                              related_name='users',
                              on_delete=models.PROTECT)
    will_connect = models.BooleanField(default=True)

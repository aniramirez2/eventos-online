from django.db import models

from accounts.models import User
from events.models import Event


class Match(models.Model):
    user = models.ForeignKey(User,
                             related_name='user_matchings',
                             on_delete=models.PROTECT)
    match = models.ForeignKey(User,
                              related_name='match_matchings',
                              on_delete=models.PROTECT)
    event = models.ForeignKey(Event,
                              related_name='matchings',
                              on_delete=models.PROTECT)
    slot = models.IntegerField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()


class MatchRecommentation(models.Model):
    score = models.FloatField()
    user = models.ForeignKey(User,
                             related_name='user_match_recommendations',
                             on_delete=models.PROTECT)
    match = models.ForeignKey(User,
                              related_name='match_match_recommendations',
                              on_delete=models.PROTECT)
    event = models.ForeignKey(Event,
                              related_name='match_recommentations',
                              on_delete=models.PROTECT)

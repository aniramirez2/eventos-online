from django.db import models

from accounts.models import User
from events.models import Event


class Match(models.Model):
    right_user = models.ForeignKey(User,
                                   related_name='right_user_matches',
                                   on_delete=models.PROTECT)
    left_user = models.ForeignKey(User,
                                  related_name='left_user_matches',
                                  on_delete=models.PROTECT)
    event = models.ForeignKey(Event,
                              related_name='matches',
                              on_delete=models.PROTECT)

    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

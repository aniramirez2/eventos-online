from django.db import models

from accounts.models import User
from events.models import Event


class Connection(models.Model):
    right_user = models.ForeignKey(User,
                                   related_name='right_user_connections',
                                   on_delete=models.PROTECT)
    left_user = models.ForeignKey(User,
                                  related_name='left_user_connections',
                                  on_delete=models.PROTECT)
    event = models.ForeignKey(Event,
                              related_name='connections',
                              on_delete=models.PROTECT)
    date = models.DateField()

from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'(id={self.pk}, name={self.name})'


class State(models.Model):
    class StateChoices(models.IntegerChoices):
        MATCHES_CONFIRMED = 1

    state = models.IntegerField(choices=StateChoices.choices)

    value = models.CharField(max_length=254)
    event = models.ForeignKey(Event,
                              related_name='states',
                              on_delete=models.PROTECT)

    def __str__(self):
        return f'(name={self.state}, value={self.value}, event={self.event})'

from django.db import models

class Event(models.Model):
  name = models.CharField(max_length=200)
  description = models.TextField()
  date = models.DateTimeField()

  created_at = models.DateTimeField(auto_now_add=True)

from datetime import datetime

from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from model_mommy import mommy

from events.models import Event


class EventAPITestCase(APITestCase):
    def setUp(self):
        self.user = mommy.make(get_user_model())
        self.client.force_authenticate(self.user)

    def test_returns_all_events(self):

        request = self.client.get("/api/events")
        self.assertEqual(len(request.data), 0)

    def test_creates_new_event(self):
        event = {
            "name": "Test",
            "description": "Test",
            "date": datetime.now()
        }

        self.client.post("/api/events", event, format="json")
        self.assertEqual(Event.objects.count(), 1)

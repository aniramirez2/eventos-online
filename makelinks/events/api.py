from rest_framework import viewsets, permissions

from events.models import Event

from events.serializers import EventSerializer


class EventViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    queryset = Event.objects.all()
    serializer_class = EventSerializer

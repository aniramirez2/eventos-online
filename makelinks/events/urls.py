from rest_framework import routers
from events.api import EventViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register('api/events', EventViewSet, 'events')

urlpatterns = router.urls

from matching.api import MatchingViewSet, MatchRecommendationAPI
from django.urls import path, include


urlpatterns = [
    path('api/match', MatchingViewSet.as_view({'post': 'match'})),
    path('api/match_recommendations', MatchRecommendationAPI.as_view()),
]

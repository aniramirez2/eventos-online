from django.urls import path, include

from knox import views as knox_views

from accounts.api import (
    UserAPI, RegisterAPI, LoginAPI,
    OccupationAreaAPI, InterestAPI
)

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/occupation_areas', OccupationAreaAPI.as_view()),
    path('api/interests', InterestAPI.as_view()),
]

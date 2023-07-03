from django.urls import path
from accounts.api.views import LoginAPIView

urlpatterns = [
    path("login/", LoginAPIView.as_view()),
]

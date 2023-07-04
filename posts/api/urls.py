from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from posts.api.views import PostListAPIView

app_name = "posts"

urlpatterns = [
    path("list/", PostListAPIView.as_view(), name="list-api-view"),
]

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from posts.api.views import (
    PostListAPIView,
    PostAPICreateView,
    PostDetailView,
    PostUpdateView,
    PostDeleteView,
)

app_name = "posts"

urlpatterns = [
    path("list/", PostListAPIView.as_view(), name="list-api-view"),
    path("create/", PostAPICreateView.as_view(), name="create-api-view"),
    path("<int:id>/details/", PostDetailView.as_view(), name="detail-api-view"),
    path("<int:id>/update/", PostUpdateView.as_view(), name="update-api-view"),
    path("<int:id>/delete/", PostDeleteView.as_view(), name="delete-api-view"),
]

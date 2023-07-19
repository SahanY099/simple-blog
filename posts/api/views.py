from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated

from posts.api.serializers import (
    PostSerializer,
    PostCreateSerializer,
    PostUpdateSerializer,
)
from posts.models import Post


class PostListAPIView(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()


class PostAPICreateView(CreateAPIView):
    serializer_class = PostCreateSerializer
    permission_classes = [IsAuthenticated]


class PostDetailView(RetrieveAPIView):
    serializer_class = PostSerializer
    lookup_url_kwarg = "id"

    def get_queryset(self):
        return Post.objects.all()


class PostUpdateView(UpdateAPIView):
    serializer_class = PostUpdateSerializer
    lookup_url_kwarg = "id"

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)


class PostDeleteView(DestroyAPIView):
    lookup_url_kwarg = "id"

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)

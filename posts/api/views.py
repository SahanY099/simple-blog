from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated

from posts.api.serializers import PostSerializer
from posts.models import Post


class PostListAPIView(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()


class PostAPICreateView(CreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

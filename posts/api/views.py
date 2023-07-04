from rest_framework.generics import ListAPIView

from posts.api.serializers import PostSerializer
from posts.models import Post


class PostListAPIView(ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()

from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

from posts.models import Post

User = get_user_model()


class AuthorSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("username",)


class PostSerializer(ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ("id", "title", "content", "publish_date", "author")

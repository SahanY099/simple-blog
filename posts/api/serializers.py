from django.contrib.auth import get_user_model
from django.utils import timezone
from rest_framework.serializers import ModelSerializer, ValidationError

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


class PostCreateSerializer(PostSerializer):
    def create(self, validated_data):
        validated_data["author"] = self.context["request"].user
        return super().create(validated_data)

    def validate(self, data):
        now = timezone.now().date()
        publish_date = data["publish_date"]

        if now > publish_date:
            # valiates whether publish date is set to past date
            raise ValidationError(
                {"publish_date": "Publish date cannot be a past date"}
            )

        return data

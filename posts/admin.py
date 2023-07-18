from django.contrib import admin

from posts.models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "created_on", "publish_date", "author")
    readonly_fields = ("created_on",)


# Register your models here.
admin.site.register(Post, PostAdmin)

from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class Post(models.Model):
    title = models.CharField(_("Title"), max_length=120)
    content = models.TextField(_("Content"))
    created_on = models.DateField(_("Date created"), auto_now=False, auto_now_add=True)
    publish_date = models.DateField(
        _("Publish date"), auto_now=False, auto_now_add=False
    )
    author = models.ForeignKey(User, verbose_name=_("Author"), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("post")
        verbose_name_plural = _("posts")

    def __str__(self):
        return f"{self.title}"

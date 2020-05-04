from django.db import models

from accounts.models import User


class Email(models.Model):
    sender = models.EmailField(default="makelinksapp@gmail.com")
    subject = models.CharField(max_length=254)
    content = models.TextField(blank=True, null=True)

    receiver = models.ForeignKey(User,
                                 related_name="emails",
                                 on_delete=models.PROTECT)


class Attachment(models.Model):
    content_type = models.CharField(max_length=100)

    email = models.ForeignKey(Email,
                              related_name="attachments",
                              on_delete=models.PROTECT)


class ICS(Attachment):
    subject = models.CharField(max_length=254)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    description = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=300, blank=True, null=True)


class UserAttachment(models.Model):
    attachement = models.ForeignKey(Attachment,
                                    related_name="user_attachments",
                                    on_delete=models.PROTECT)
    user = models.ForeignKey(User,
                             related_name="email_attachments",
                             on_delete=models.PROTECT)

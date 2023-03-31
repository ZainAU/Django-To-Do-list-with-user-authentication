from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils import timezone
# Create your models here.

def one_week_hence():
    return timezone.now() + timezone.timedelta(days=7)def one_week_hence():
    return timezone.now() + timezone.timedelta(days=7)

class Task(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    category = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True, blank=True)
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(default=one_week_hence)
    status = models.BooleanField(default=False)
    

    def __str__(self):

        return self.title

    class Meta:
        order_with_respect_to = 'deadline'

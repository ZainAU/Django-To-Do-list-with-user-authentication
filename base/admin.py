from django.contrib import admin
from .models import Task

admin.site.register(Task)  # Model registered to admin panel

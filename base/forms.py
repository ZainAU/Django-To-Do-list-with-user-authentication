from django import forms
from .models import Task, Category
# Reordering Form and View


class PositionForm(forms.Form):
    position = forms.CharField()

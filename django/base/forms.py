from django import forms
from .models import Task, Category
from django.contrib.auth.forms import UserCreationForm

# Reordering Form and View


class PositionForm(forms.Form):
    position = forms.CharField()


class UserCreateForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserCreateForm, self).__init__(*args, **kwargs)

        for fieldname in ['username', 'password1', 'password2']:
            self.fields[fieldname].help_text = None
        # print("oye we using this forms.py file")

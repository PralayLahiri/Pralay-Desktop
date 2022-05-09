from django.db import models
from django import forms

from django import forms

# Create your models here.


class User(models.Model):
    # id  = models.IntegerField(primary_key=True)
    name  = models.CharField(max_length=70, null=True)
    email = models.CharField(max_length=100, null=True)
    password  = models.CharField(max_length=100, null=True)

    
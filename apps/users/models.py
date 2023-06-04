from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    profile_image = models.ImageField(
        upload_to="profile_image/"
    )
    decription = models.CharField(
        max_length=550
    )
    country = models.CharField(
        max_length=55
    )
    phone_number = models.CharField(
        max_length=50
    )
    whatsapp = models.CharField(
        max_length=50
    )
    instagram = models.CharField(
        max_length=50
    )
    telegram = models.CharField(
        max_length=50
    )
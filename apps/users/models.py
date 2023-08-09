from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    profile_image = models.ImageField(
        blank=True, 
        null=True,
        upload_to="profile_image/"
    )
    decription = models.CharField(
        blank=True, 
        null=True,
        max_length=550
    )
    country = models.CharField(
        blank=True, 
        null=True,
        max_length=55
    )
    phone_number = models.CharField(
        blank=True, 
        null=True,
        max_length=50
    )
    whatsapp = models.CharField(
        blank=True, 
        null=True,
        max_length=50
    )
    instagram = models.CharField(
        blank=True, 
        null=True,
        max_length=50
    )
    telegram = models.CharField(
        blank=True, 
        null=True,
        max_length=50
    )
    is_seller = models.BooleanField(
        default=False
    )
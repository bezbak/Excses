import random
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password
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

    def save(self, *args, **kwargs):
        if len(self.password) < 15:
            self.password = make_password(self.password)
            print("set_password")
        super().save(*args, **kwargs)   
class ResetPassCode(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    email = models.CharField(
        max_length=255
    )
    code = models.CharField(
        max_length=4,
        unique=True,
        blank=True, 
        null=True
    )

    def generate_field_value(self):
        # Генерация случайной строки из цифр
        return ''.join(random.choices('0123456789', k=6))

    def save(self, *args, **kwargs):
        if not self.code:
            self.code = self.generate_field_value()
        super().save(*args, **kwargs)



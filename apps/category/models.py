from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(
        max_length=100
    )
    slug = models.CharField(
        max_length=255
    )
    icon = models.FileField(
        upload_to='icons/'
    )
class SubCategory(models.Model):
    name = models.CharField(
        max_length=255
    )
    slug = models.CharField(
        max_length=50
    )
    parent = models.ForeignKey(
        Category,
        related_name='sub_category'
    )
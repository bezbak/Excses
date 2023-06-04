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
    
    def __str__(self):
        return f"{self.name}"
    
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
class SubCategory(models.Model):
    name = models.CharField(
        max_length=255
    )
    slug = models.CharField(
        max_length=50
    )
    parent = models.ForeignKey(
        Category,
        related_name='sub_category',
        on_delete=models.CASCADE
    )
    
    def __str__(self):
        return f"{self.name} - {self.parent.name}"
    
    class Meta:
        verbose_name = 'Суб Категория'
        verbose_name_plural = 'Суб Категории'
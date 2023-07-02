import random
from django.db import models
from apps.category.models import Category, SubCategory, Currency
from apps.users.models import User
# Create your models here.
class Product(models.Model):
    name = models.CharField(
        max_length=255
    )
    description = models.CharField(
        max_length=255
    )
    main_image = models.ImageField(
        upload_to='products_image/'
    )
    artikul = models.CharField(
        max_length=8,
        blank=True, 
        null=True
    )
    currency = models.ForeignKey(
        Currency,
        related_name='curr_product',
        on_delete=models.CASCADE
    )
    sale_price = models.CharField(
        max_length=10,
        blank=True,
        null=True
    )
    price = models.CharField(
        max_length=10,
    )
    sale = models.BooleanField(
        default=False
    )
    owner = models.ForeignKey(
        User,
        related_name='products',
        on_delete=models.CASCADE
    )
    category = models.ForeignKey(
        Category,
        related_name='cat_product',
        on_delete=models.DO_NOTHING
    )
    sub_category = models.ForeignKey(
        SubCategory,
        related_name='cat_product',
        on_delete=models.DO_NOTHING
    )
    def generate_field_value(self):
        # Генерация случайной строки из цифр
        return ''.join(random.choices('0123456789', k=8))

    def save(self, *args, **kwargs):
        if not self.artikul:
            self.artikul = self.generate_field_value()
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.name} - {self.owner.username}"
    
    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"
    
class Media(models.Model):
    image = models.ImageField(
        upload_to='product_media'
    )
    product = models.ForeignKey(
        Product,
        related_name='media',
        on_delete=models.CASCADE
    )
    
    def __str__(self):
        return f"iamge - {self.id}, product - {self.product.name}"
    
    class Meta:
        verbose_name = 'Медиа'
        verbose_name_plural = 'Медии'
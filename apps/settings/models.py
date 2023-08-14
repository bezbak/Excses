from django.db import models

# Create your models here.

class SliderADS(models.Model):
    slider_image = models.ImageField(
        upload_to='ads_images/'
    )
    url = models.URLField()
    class Meta:
        verbose_name = 'Слайдер реклама'
        verbose_name_plural = 'Слайдер реклама'
class CardADS(models.Model):
    card_image = models.ImageField(
        upload_to='ads_images/'
    )
    url = models.URLField()
    class Meta:
        verbose_name = 'Карточка реклама'
        verbose_name_plural = 'Карточка реклама'
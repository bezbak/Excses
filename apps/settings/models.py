from django.db import models

# Create your models here.

class SliderADS(models.Model):
    slider_image = models.ImageField(
        upload_to='ads_images/'
    )
class CardADS(models.Model):
    card_image = models.ImageField(
        upload_to='ads_images/'
    )
    
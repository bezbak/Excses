# Generated by Django 4.2.1 on 2023-07-01 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CardADS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_image', models.ImageField(upload_to='ads_images/')),
            ],
        ),
        migrations.CreateModel(
            name='SliderADS',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slider_image', models.ImageField(upload_to='ads_images/')),
            ],
        ),
    ]

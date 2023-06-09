# Generated by Django 4.2.1 on 2023-06-04 23:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('main_image', models.ImageField(upload_to='products_image/')),
                ('artikul', models.CharField(max_length=8)),
                ('sale_price', models.CharField(blank=True, max_length=10, null=True)),
                ('price', models.CharField(max_length=10)),
                ('sale', models.BooleanField(default=False)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='cat_product', to='category.category')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to=settings.AUTH_USER_MODEL)),
                ('sub_category', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='car_product', to='category.subcategory')),
            ],
            options={
                'verbose_name': 'Продукт',
                'verbose_name_plural': 'Продукты',
            },
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='product_media')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='media', to='products.product')),
            ],
            options={
                'verbose_name': 'Медиа',
                'verbose_name_plural': 'Медии',
            },
        ),
    ]

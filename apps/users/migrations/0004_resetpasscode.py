# Generated by Django 4.2.1 on 2023-08-11 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_country_alter_user_decription_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResetPassCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=4, unique=True)),
            ],
        ),
    ]

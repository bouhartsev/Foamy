# Generated by Django 3.2 on 2021-05-30 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0007_auto_20210530_2136'),
    ]

    operations = [
        migrations.AddField(
            model_name='release',
            name='isSingle',
            field=models.BooleanField(default=False),
        ),
    ]
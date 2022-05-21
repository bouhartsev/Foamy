# Generated by Django 3.2 on 2022-05-21 20:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import simple_history.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('music', '0003_artist_imageurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='biography',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='artist',
            name='type',
            field=models.CharField(choices=[('Person', 'Person'), ('Group', 'Group'), ('Choir', 'Choir'), ('Other', 'Other')], max_length=255, null=True),
        ),
        migrations.CreateModel(
            name='HistoricalPlaylist',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'historical playlist',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
    ]

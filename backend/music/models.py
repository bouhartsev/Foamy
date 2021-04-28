from django.db import models

# Create your models here.

class Artist(models.Model):
    name = models.CharField(max_length=255)
    pseudonym = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Track(models.Model):
    name = models.CharField(max_length=255)
    artists = models.ManyToManyField(Artist,)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name
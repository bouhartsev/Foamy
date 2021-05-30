from django.db import models

# Create your models here.

class Playlist(models.Model):
    name = models.CharField(max_length=255)
    tracks = models.ManyToManyField('Track', related_name='playlists')

    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Release(models.Model):
    name = models.CharField(max_length=255)
    tracks = models.ManyToManyField('Track', related_name='release')

    poster = models.ImageField(upload_to='img/release', blank=True,)

    def __str__(self):
        return self.name

class Artist(models.Model):
    name = models.CharField(max_length=255)
    pseudonym = models.CharField(max_length=255, blank=True,)

    photo = models.ImageField(upload_to='img/artist', blank=True,)

    def __str__(self):
        if self.pseudonym!='':
            return self.pseudonym
        else:
            return self.name

class Track(models.Model):
    name = models.CharField(max_length=255)

    artists = models.ManyToManyField(Artist, related_name='tracks',)
    genre = models.ManyToManyField(Genre, related_name='tracks',)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name
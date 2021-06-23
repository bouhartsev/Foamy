from django.db import models

# Create your models here.
# TODO: replace data in database: crashed names and thumb images

class Playlist(models.Model):
    name = models.CharField(max_length=255)
    tracks = models.ManyToManyField('Track', related_name='playlists')

    def __str__(self):
        return str(self.name)

class Genre(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.name)


class Release(models.Model):
    name = models.CharField(max_length=255)
    tracks = models.ManyToManyField('Track', related_name='release')

    image = models.ImageField(upload_to='img/release', blank=True, null=True)
    imageURL = models.URLField(blank=True, null=True)
    # TODO: make getting imageURL from image if empty

    def __str__(self):
        return str(self.name)

class Artist(models.Model):
    name = models.CharField(max_length=255)
    pseudonym = models.CharField(max_length=255, blank=True,)

    type = models.CharField(max_length=255, null=True, blank=True)
    biography = models.TextField(null=True, blank=True)

    image = models.ImageField(upload_to='img/artist', blank=True, null=True)
    imageURL = models.URLField(blank=True,null=True)
    # TODO: make getting imageURL from image if empty

    def __str__(self):
        if self.pseudonym!='':
            return str(self.pseudonym)
        else:
            return str(self.name)

class Track(models.Model):
    name = models.CharField(max_length=255)

    artists = models.ManyToManyField(Artist, related_name='tracks',)
    genre = models.ManyToManyField(Genre, related_name='tracks',)

    duration = models.IntegerField(null=True, blank=True,)

    def __str__(self):
        return str(self.name)
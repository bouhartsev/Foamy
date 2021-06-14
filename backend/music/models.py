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

    strMusicBrainzAlbumID = models.TextField(null=True)

    def __str__(self):
        return self.name

class Artist(models.Model):
    name = models.CharField(max_length=255)
    pseudonym = models.CharField(max_length=255, blank=True,)

    type = models.CharField(max_length=255, null=True)
    biography = models.TextField(null=True)

    photo = models.ImageField(upload_to='img/artist', blank=True,)

    strMusicBrainzArtistID = models.TextField(null=True)

    def __str__(self):
        if self.pseudonym!='':
            return self.pseudonym
        else:
            return self.name

class Track(models.Model):
    name = models.CharField(max_length=255)

    artists = models.ManyToManyField(Artist, related_name='tracks',)
    genre = models.ManyToManyField(Genre, related_name='tracks',)

    duration = models.IntegerField(null=True)

    strMusicBrainzTrackID = models.TextField(null=True)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name
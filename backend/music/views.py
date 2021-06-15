from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .serializers import *
from .models import *

class PlaylistViewSet(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()

class GenreViewSet(viewsets.ModelViewSet):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()

class ReleaseViewSet(viewsets.ModelViewSet):
    serializer_class = ReleaseSerializer
    queryset = Release.objects.all()

class ArtistViewSet(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()

class TrackViewSet(viewsets.ModelViewSet):
    serializer_class = TrackSerializer
    queryset = Track.objects.all()
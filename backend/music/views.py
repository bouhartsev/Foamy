# from django.shortcuts import render
from django.db.models import Q, Count

# Create your views here.

from rest_framework import viewsets
from .serializers import *
from .models import *

class PlaylistViewSet(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    # queryset = Playlist.objects.all()
    def get_queryset(self):
        queryset = (Playlist.objects.annotate(tracks_count=Count('tracks')).filter(Q(name__contains='Easter') | ~Q(tracks_count__lt=3)))
        return queryset

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
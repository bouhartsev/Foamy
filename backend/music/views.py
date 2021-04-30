from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .serializers import TrackSerializer
from .models import Track

class TrackViewSet(viewsets.ModelViewSet):
    serializer_class = TrackSerializer
    queryset = Track.objects.all()
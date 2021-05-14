from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'tracks', TrackViewSet)
router.register(r'artists', ArtistViewSet)
router.register(r'releases', ReleaseViewSet)
router.register(r'genres', GenreViewSet)
router.register(r'playlists', PlaylistViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

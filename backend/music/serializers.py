from rest_framework import serializers
from .models import *

class TrackSerializerForOther(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ['id', 'name', 'duration']

class PlaylistSerializer(serializers.ModelSerializer):
    tracksData = TrackSerializerForOther(source='tracks', many=True)

    class Meta:
        model = Playlist
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class ReleaseSerializer(serializers.ModelSerializer):
    tracksData = TrackSerializerForOther(source='tracks', many=True)

    class Meta:
        model = Release
        fields = '__all__'

class ReleaseSerializerForOther(serializers.ModelSerializer):
    class Meta:
        model = Release
        fields = ['id', 'name', 'image', 'imageURL']

class ArtistSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    tracksData = TrackSerializerForOther(source='tracks', many=True)

    class Meta:
        model = Artist
        fields = '__all__'

class ArtistSerializerForOther(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['id', 'name', 'pseudonym']

class TrackSerializer(serializers.ModelSerializer):
    release = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    releaseData = ReleaseSerializerForOther(source='release', many=True)
    artistsData = ArtistSerializerForOther(source='artists', many=True)
    genreData = GenreSerializer(source='genre', many=True)

    class Meta:
        model = Track
        fields = '__all__'

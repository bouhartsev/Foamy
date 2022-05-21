from rest_framework import serializers
from .models import *

class TrackSerializerForOther(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ['id', 'name', 'duration']

class PlaylistSerializer(serializers.ModelSerializer):
    tracksData = TrackSerializerForOther(source='tracks', many=True, read_only=True)

    class Meta:
        model = Playlist
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    tracksData = TrackSerializerForOther(source='tracks', many=True, read_only=True)

    class Meta:
        model = Genre
        fields = '__all__'

class ArtistSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    tracksData = TrackSerializerForOther(source='tracks', many=True, read_only=True)

    class Meta:
        model = Artist
        fields = '__all__'

class ArtistSerializerForOther(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['id', 'name', 'pseudonym']

class TrackSerializerForRelease(serializers.ModelSerializer):
    artistsData = ArtistSerializerForOther(source='artists', many=True, read_only=True)

    class Meta:
        model = Track
        fields = ['id', 'name', 'duration', 'artistsData']

class ReleaseSerializer(serializers.ModelSerializer):
    tracksData = TrackSerializerForRelease(source='tracks', many=True, read_only=True)

    class Meta:
        model = Release
        fields = '__all__'

class ReleaseSerializerForOther(serializers.ModelSerializer):
    class Meta:
        model = Release
        fields = ['id', 'name', 'image', 'imageURL']

class TrackSerializer(serializers.ModelSerializer):
    release = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    releaseData = ReleaseSerializerForOther(source='release', many=True, read_only=True)
    artistsData = ArtistSerializerForOther(source='artists', many=True, read_only=True)
    genreData = GenreSerializer(source='genre', many=True, read_only=True)

    class Meta:
        model = Track
        fields = '__all__'

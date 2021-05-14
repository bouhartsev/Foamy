from rest_framework import serializers
from .models import *

class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class ReleaseSerializer(serializers.ModelSerializer):
    isSingle = serializers.BooleanField(default=False,)

    def update(self, instance, validated_data):
        instance.isSingle = True if validated_data.get('tracks', instance.tracks).lenght==1 else False
        return instance

    class Meta:
        model = Release
        fields = '__all__'

class ArtistSerializer(serializers.ModelSerializer):
    tracks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Artist
        fields = '__all__'

class TrackSerializer(serializers.ModelSerializer):
    release = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Track
        fields = '__all__'

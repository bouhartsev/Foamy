from django.contrib import admin
from django.contrib.auth.models import Group, User
from django.contrib.auth.admin import GroupAdmin, UserAdmin
from import_export import resources
from import_export.admin import ExportMixin
from simple_history.admin import SimpleHistoryAdmin
from .models import *

# Register your models here.

class PlaylistAdmin(SimpleHistoryAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class GenreAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class ReleaseAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class ArtistAdmin(admin.ModelAdmin):
    list_display = ('name','type')
    search_fields = ('name',)
    list_filter = ('type',)

class TrackResource(resources.ModelResource):
    class Meta:
        model = Track

    def dehydrate_genre(self, obj):
        return ", ".join([g.name for g in obj.genre.all()])
    def dehydrate_artists(self, obj):
        return ", ".join([g.name for g in obj.artists.all()])

class TrackAdmin(ExportMixin, admin.ModelAdmin):
    resource_class = TrackResource
    list_display = ('name', 'get_genres', 'duration')
    search_fields = ('name','duration')

    def get_genres(self, obj):
        return ", ".join([g.name for g in obj.genre.all()])
    get_genres.short_description = "Genres"

class MyAdminSite(admin.AdminSite):
    def get_app_list(self, request):

        app_dict = self._build_app_dict(request)

        # app_list = sorted(app_dict.values(), key=lambda x: x['name'].lower())
        app_list = [app_item for app_item in app_dict.values()]
        return app_list

admin.site = MyAdminSite()

admin.site.register(Track, TrackAdmin)
admin.site.register(Artist, ArtistAdmin)
admin.site.register(Release, ReleaseAdmin)
admin.site.register(Genre, GenreAdmin)
admin.site.register(Playlist, PlaylistAdmin)

admin.site.register(Group, GroupAdmin)
admin.site.register(User, UserAdmin)

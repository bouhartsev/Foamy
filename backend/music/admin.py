from django.contrib import admin
from django.contrib.auth.models import Group, User
from django.contrib.auth.admin import GroupAdmin, UserAdmin
from .models import *

# Register your models here.

class PlaylistAdmin(admin.ModelAdmin):
    pass
class GenreAdmin(admin.ModelAdmin):
    pass
class ReleaseAdmin(admin.ModelAdmin):
    pass
class ArtistAdmin(admin.ModelAdmin):
    pass
class TrackAdmin(admin.ModelAdmin):
    pass

class MyAdminSite(admin.AdminSite):
    # index_title = 'Administrator Panel'

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

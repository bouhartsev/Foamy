from django.conf import settings
from django_cron import CronJobBase, Schedule
from .models import Track, Playlist
import os

class CreatePlaylist(CronJobBase):
    RUN_EVERY_MINS = 0 if settings.DEBUG else 360  # 6 hours when not DEBUG

    schedule = Schedule(run_every_mins=2)
    code = 'music.CreatePlaylist'

    def do(self):
        try:
            # with open("../temp/test.txt", "a") as myfile:
            #     myfile.write("test\n")
            newPlaylist = Playlist.objects.create(name="testCronPlaylist")
            tracksToPlay = Track.objects.filter(name__contains="Happy")
            newPlaylist.tracks.set(tracksToPlay)
            # message = 'Playlists count: %d' % Playlist.objects.count()
            # print(message)
        except BaseException as err:
            print(err)
        # send_mail(
        #     '[django-cron demo] Active user count',
        #     message,
        #     'no-reply@django-cron-demo.com',
        #     ['test@django-cron-demo.com'],
        # )
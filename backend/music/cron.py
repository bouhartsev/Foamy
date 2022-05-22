from django.conf import settings
from django_cron import CronJobBase, Schedule
from .models import Track, Playlist
import os
import time
import random

class CreatePlaylist(CronJobBase):
    # RUN_WEEKLY_ON_DAYS = [0]
    # RUN_AT_TIMES = ["00:00"]
    # schedule = Schedule(run_on_days=RUN_WEEKLY_ON_DAYS, run_at_times=RUN_AT_TIMES)

    RUN_EVERY_MINS = 0 if settings.DEBUG else 360  # 6 hours when not DEBUG
    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)

    code = 'music.CreatePlaylist'

    def do(self):
        try:
            # with open("../temp/test.txt", "a") as myfile:
            #     myfile.write("test\n")
            playlistName = "Music for you from "+time.strftime("%d.%m.%Y")
            newPlaylist = Playlist.objects.create(name=playlistName)
            tracksToPlay = random.sample(list(Track.objects.all()), 5)
            newPlaylist.tracks.set(tracksToPlay)
            message = 'Playlists count: %d' % Playlist.objects.count()
            print(message)
        except BaseException as err:
            print(err)
        # send_mail(
        #     '[django-cron demo] Active user count',
        #     message,
        #     'no-reply@django-cron-demo.com',
        #     ['test@django-cron-demo.com'],
        # )
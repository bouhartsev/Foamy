"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path, include
from .views import index
from django.views.generic.base import TemplateView
from django.views.static import serve

urlpatterns = [
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),

    path('', index),
    path('admin/', admin.site.urls),
    path('api/', include('music.urls')),

    path("manifest.json", TemplateView.as_view(template_name="manifest.json", content_type="application/json"),),
    path("robots.txt", TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),),
    re_path(r'$', index),
    # path("service-worker.js", TemplateView.as_view(template_name="service-worker.js", content_type="application/javascript"),),
    # path("precache-manifest.4fd6f7882f5bc0f5a74218b617ad38b7.js", TemplateView.as_view(template_name="precache-manifest.4fd6f7882f5bc0f5a74218b617ad38b7.js", content_type="application/javascript"),),
]

# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

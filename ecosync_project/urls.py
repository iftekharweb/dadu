# ecosync_project/urls.py

from django.contrib import admin
from django.urls import path, include

admin.site.site_header = 'EcoSync Administration'
admin.site.index_title = 'Admin'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('ecosync.urls')),
    #path('', include('authentication.urls')),
    path('', include('user_management.urls')),
    path('', include('profile_management.urls')),
    path('', include('rbac.urls')),
]

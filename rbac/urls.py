# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('rbac/roles/', views.RoleViewSet.as_view({'get': 'list', 'post': 'create'}), name='roles'),
    path('rbac/roles/<int:pk>/', views.RoleViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='role_detail'),
    path('rbac/permissions/', views.PermissionViewSet.as_view({'get': 'list', 'post': 'create'}), name='permissions'),
    path('rbac/permissions/<int:pk>/', views.PermissionViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='permission_detail'),
    path('rbac/roles/<int:pk>/assign_permissions/', views.PermissionViewSet.as_view({'post': 'assign_permissions'}), name='assign_permissions'),
]

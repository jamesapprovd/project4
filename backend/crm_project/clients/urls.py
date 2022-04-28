from django.urls import path
from crm_project.clients.migrations import views


urlpatterns = [
    path('', views.index, name='index'),
    path('view_all_clients/', views.client_list.as_view(), name='view_all_clients'),  # get
    path('view_client/<str:pk>', views.client_detail.as_view(), name='view_client'),  # get
    path('add_client/', views.add_client.as_view(), name='add_client'), #post
    path('update_client/<str:pk>', views.update_client.as_view(), name='update_client'), #post
    path('del_client/<str:pk>', views.del_client.as_view(), name='del_client'), #del
]
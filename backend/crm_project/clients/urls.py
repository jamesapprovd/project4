from django.urls import path
from . import views



urlpatterns = [
    # path('', views.index, name='index'),
    path('view_all_clients/', views.ClientList.as_view(), name='view_all_clients'),  # get
    path('view_client/<str:pk>', views.ClientDetails.as_view(), name='view_client'),  # get
    path('add_client/', views.ClientCreate.as_view(), name='add_client'),
    path('update_client/<str:pk>', views.ClientUpdate.as_view(), name='update_client'), #post
    path('del_client/<str:pk>', views.ClientDelete.as_view(), name='del_client'), #del
]
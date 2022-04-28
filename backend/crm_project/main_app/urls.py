from django.urls import path
from . import views


urlpatterns = [
    path('view_all_projects/', views.project_list.as_view()), name='view_all_project',  # get
    path('view_project/<str:pk>', views.project_detail.as_view(), name='view_project'),  # get
    path('add_project/', views.add_project.as_view(), name='add_project'),
    path('update_project/<str:pk>', views.update_project.as_view(), name='update_project'),
    path('del_project/<str:pk>', views.del_project.as_view(), name='del_project'),
]
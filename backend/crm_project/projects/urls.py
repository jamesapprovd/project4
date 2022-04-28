from django.urls import path
from crm_project.projects.migrations import views


urlpatterns = [
    path('', views.index, name='index'),
    path('view_all_projects/', views.projects_list.as_view(), name='view_all_projects'),  # get
    path('view_project/<str:pk>', views.project_detail.as_view(), name='view_project'),  # get
    path('add_project/', views.add_project.as_view(), name='add_project'), #post
    path('update_project/<str:pk>', views.update_project.as_view(), name='update_project'), #post
    path('del_project/<str:pk>', views.del_project.as_view(), name='del_project'), #del
]
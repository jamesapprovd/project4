from django.urls import path
from . import views


urlpatterns = [
    path('view_all_projects/', views.ProjectList.as_view(), name='view_all_projects'),  # get
    path('view_project/<str:pk>', views.ProjectDetails.as_view(), name='view_project'),  # get
    path('add_project/', views.ProjectCreate.as_view(), name='add_project'), #put
    path('update_project/<str:pk>', views.ProjectUpdate.as_view(), name='update_project'), #patch
    path('del_project/<str:pk>', views.ProjectDelete.as_view(), name='del_project'), #del
]
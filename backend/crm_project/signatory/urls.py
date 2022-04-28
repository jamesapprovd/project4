from django.urls import path
from . import views


urlpatterns = [
    path('view_all_signatories/', views.SignatoryList.as_view(), name='view_all_signatories'),  # get
    path('view_signatory/<str:pk>', views.SignatoryDetails.as_view(), name='view_signatory'),  # get
    path('add_signatory/', views.SignatoryCreate.as_view(), name='add_signatory'), #put
    path('update_signatory/<str:pk>', views.SignatoryUpdate.as_view(), name='update_signatory'), #patch
    path('del_signatory/<str:pk>', views.SignatoryDelete.as_view(), name='del_signatory'), #del
]
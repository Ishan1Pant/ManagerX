from django.urls import path 
from . import views
urlpatterns = [
    path('students',views.StudentsView.as_view(),name='getStudents'),
    path('students/<str:pk>',views.DetailsView.as_view(),name='details'),
]

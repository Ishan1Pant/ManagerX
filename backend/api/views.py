from rest_framework import generics
from .serializers import studentSerializer
from django.http.response import JsonResponse
from .models import students

class StudentsView(generics.ListCreateAPIView):
    queryset=students.objects.all()
    serializer_class=studentSerializer

class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset=students.objects.all()
    serializer_class=studentSerializer 
    

        
        
        
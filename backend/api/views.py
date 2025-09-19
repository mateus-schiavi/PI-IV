from django.shortcuts import render
from rest_framework import generics
from .models import Corredor
from .serializers import CorredorSerializer

class CorredorListCreate(generics.ListCreateAPIView):
    queryset = Corredor.objects.all()
    serializer_class = CorredorSerializer

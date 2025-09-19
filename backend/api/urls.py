from django.urls import path
from .views import CorredorListCreate

urlpatterns = [
    path('corredores/', CorredorListCreate.as_view(), name='corredores-list-create'),
]

from django.shortcuts import render
from django.http import HttpResponse

## import model
from .models import NewsModel

## rest_framework
from rest_framework import viewsets
from .serializers import NewsSerializer

# Create your views here.

def index(request):
    context = {'posts' : NewsModel.objects.all()}
    return render(request, 'main/index.html', context = context)

class NewsAPIView(viewsets.ModelViewSet):
    queryset = NewsModel.objects.all()
    serializer_class = NewsSerializer

from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime

def index(request):
    context = {
        'var': 5
    }
    return render(request, 'site_content/index.html', context)

def about_me(request):
    context = {
        'var': 5
    }
    return render(request, 'site_content/index.html', context)

def projects(request):
    return HttpResponse("Projects")

def blog(request,
         year=datetime.today().year,
         month=datetime.today().month,
         day=datetime.today().day
         ):
    return HttpResponse("Blog entry from {y}/{m}/{d}".format(y=year, m=month, d=day))

def resume(request):
    return HttpResponse("Resume")

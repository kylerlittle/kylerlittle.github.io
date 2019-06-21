from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime

from site_content.util.util import loadJSON

def index(request):
    context = {}
    return render(request, 'site_content/index.html', context)

def about_me(request):
    context = {}
    return render(request, 'site_content/aboutme.html', context)

def projects(request):
    # load projects from JSON
    context = {
        "projects": loadJSON("site_content/static/projects/projects.JSON")
    }
    return render(request, 'site_content/projects.html', context)

def blog(request,
         year=datetime.today().year,
         month=datetime.today().month,
         day=datetime.today().day
         ):
    context = {
        "text": "Blog entry from {y}/{m}/{d}".format(y=year, m=month, d=day)
    }
    return render(request, 'site_content/blog.html', context)

def resume(request):
    context = {}
    return render(request, 'site_content/resume.html', context)

from django.urls import path

from . import views

urlpatterns = [
    # home page
    path('', views.index, name='index'),

    # about me page
    path('aboutme', views.about_me, name='about me'),

    # project page
    path('projects', views.projects, name='projects'),

    # most recent entries
    path('blog', views.blog, name='blog'),

    # all blogs from a given year
    path('blog/<int:year>', views.blog, name='blog'),

    # all blogs from a given year/month
    path('blog/<int:year>/<int:month>', views.blog, name='blog'),

    # all blogs from a given year/month/day
    path('blog/<int:year>/<int:month>/<int:day>', views.blog, name='blog'),

    # resume
    path('resume', views.resume, name='index'),
]
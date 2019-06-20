from django.db import models

class BlogEntry(models.Model):
    datetime_created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('User', on_delete=models.CASCADE)
    entry_title = models.CharField(max_length=255)
    entry_text = models.TextField()

class EntryComment(models.Model):
    blog = models.ForeignKey('BlogEntry', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    comment_text = models.TextField()
    datetime_written = models.DateTimeField(auto_now_add=True)

class User(models.Model):
    user_name = models.CharField(max_length=255)
    user_email = models.EmailField()
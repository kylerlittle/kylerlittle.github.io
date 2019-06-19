from django.db import models

class BlogEntry(models.Model):
    entry_id = models.AutoField()
    datetime_created = models.DateTimeField('')
    # author_id = 
    # entry_title = 
    # entry_text = 

class EntryComment(models.Model):
    # blog_id foreign key
    # user_id foreign key

    # django does this automatically, but I like better naming
    comment_id = models.BigIntegerField(primary_key=True)
    # comment_text
    # datetime_written

class User(models.Model):
    # user_id
    # user_name
    # user_email
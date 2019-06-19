# Generated by Django 2.2.2 on 2019-06-19 04:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('entry_title', models.CharField(max_length=255)),
                ('entry_text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=255)),
                ('user_email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='EntryComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_text', models.TextField()),
                ('datetime_written', models.DateTimeField(auto_now_add=True)),
                ('blog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='site_content.BlogEntry')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='site_content.User')),
            ],
        ),
        migrations.AddField(
            model_name='blogentry',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='site_content.User'),
        ),
    ]

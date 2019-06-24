
For server initialization
- install pip, python3, then virtualenv
- set up virtualenv & activate
- install requirements.txt

## dev

Run dev server
```
python manage.py runserver
```

Whenever model changes
```
python manage.py makemigrations site_content
```

## TODOs
- favicon updates
- migration of remainder of ```client``` code/docs/files to django site.
- mini-fication of static assets, potentially including some image compression
- deployment scripts
- deploy!

v2
- smoother mobile navbar
- make mobile look like less shit
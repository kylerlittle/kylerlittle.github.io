# www.kylerlittle.*

## Deployment
For server initialization
- install pip, python3, then virtualenv
- set up virtualenv & activate
- install requirements.txt

## Developer Usage
Run dev server
```
python manage.py runserver
```

Whenever model changes
```
python manage.py makemigrations site_content
```

If removing static assests, then clear STATIC_ROOT directory entirely. Otherwise, collectstatic merely checks the time stamps to only copy what has changed.
```
python manage.py collectstatic --clear
```

## TODOs
- v1
  - favicon updates
  - migration of remainder of ```client``` code/docs/files to django site.
  - mini-fication of static assets, potentially including some image compression -- potentially using gulp?
  - deployment scripts
  - deploy!
- v2
  - smoother mobile navbar
  - make mobile look like less shit
  - blog layout
  - resume
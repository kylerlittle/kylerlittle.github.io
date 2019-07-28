# www.kylerlittle.*

## Deployment
For server initialization
- install pip, python3, then virtualenv
- set up virtualenv & activate
- install requirements.txt

For deployment of new code
- to sign in, ```ssh -i key.pem ubuntu@52.39.95.131```
- Activate virtualenv
- install requirements.txt
- collectstatic --clear
- either before or after ^, need to compress and minify js

Reload gunicorn, system daemon, and restart nginx
- sudo systemctl restart gunicorn && sudo systemctl daemon-reload && sudo systemctl restart nginx

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
 --clear
```
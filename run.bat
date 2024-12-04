@echo off
REM Démarrer le serveur Angular
start cmd /k "cd /d ./dualboute-frontend && npm start"

REM Démarrer le serveur Django
start cmd /k "cd /d ./dualbouteBackend && python manage.py runserver"

REM Attendre que les serveurs soient arrêtés
pause
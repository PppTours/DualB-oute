@echo off
REM Installer les dépendances pour le projet Angular
cd /d ./dualboute-frontend
npm install

REM Installer les dépendances pour le projet Django
cd /d ../dualbouteBackend
pip install -r requirements.txt

REM Revenir au répertoire racine et exécuter le fichier run.bat
cd /d ..
call run.bat
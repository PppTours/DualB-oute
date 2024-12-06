#!/bin/bash

# Démarrer le serveur Angular
cd ./dualboute-frontend && npm start; exec bash

# Démarrer le serveur Django
cd ./dualbouteBackend && .venv/bin/python manage.py runserver; exec bash

# Attendre que les serveurs soient arrêtés
read -p "Appuyez sur une touche pour continuer..."
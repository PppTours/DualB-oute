#!/bin/bash

# Démarrer le serveur Angular
gnome-terminal -- bash -c "cd ./dualboute-frontend && npm start; exec bash"

# Démarrer le serveur Django
gnome-terminal -- bash -c "cd ./dualbouteBackend && .venv/bin/python manage.py runserver; exec bash"

# Attendre que les serveurs soient arrêtés
read -p "Appuyez sur une touche pour continuer..."
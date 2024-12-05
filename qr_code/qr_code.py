import requests
from PIL import Image
import urllib.parse

# Contenu du QR code
data = "https://example.com"
encoded_data = urllib.parse.quote(data)  # Encodage des caractères spéciaux

#URL de l'API
api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={encoded_data}"

#Télécharger l'image
response = requests.get(api_url)

# Vérification de la réponse
if response.status_code == 200:
    with open("qrcode.png", "wb") as file:
        file.write(response.content)
    print("QR code généré avec succès.")
else:
    print(f"Erreur lors de la génération : {response.status_code}")
import requests
from PIL import Image
from random import randint
import urllib.parse

data = "ugqiuhqgohqiobhmoqhgiqrhbomiqbrhomiqhmgoijqrmoihbiqrnbhoimrqhroimjrqboimqrhboimqrhbilkqrnbqroimghqrlnbliqbhoimqrhglkqrnlkbnqroimbhiqrnlkqrenbqroim"
IMG_DIM = 500

def get_code(data : str):
    # Contenu du QR code
    encoded_data = urllib.parse.quote(data)  # Encodage des caractères spéciaux

    #URL de l'API
    api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={encoded_data}"

    #Télécharger l'image
    response = requests.get(api_url)

    # Vérification de la réponse
    if response.status_code == 200:
        with open("qr_code/qrcode.png", "wb") as file:
            file.write(response.content)
        print("QR code généré avec succès.")
    else:
        print(f"Erreur lors de la génération : {response.status_code}")

def get_pixels(img : Image):
     pixdata = []
     for pix in img.getdata():
             pixdata.append(pix)
     return pixdata

def main(data : str):
     
     get_code(data)

     code_img = Image.open("qr_code/qrcode.png", "r", None).convert("RGBA").convert("RGBA").resize((IMG_DIM,IMG_DIM), 1)
     poke_img = Image.open("qr_code/shadows/"+str(randint(1,5))+".png", "r", None).resize((IMG_DIM,IMG_DIM), 1)

     code_pix = get_pixels(code_img)
     poke_pix = get_pixels(poke_img)
     new_pix = []

     for i in range(IMG_DIM*IMG_DIM):
          if code_pix[i][0]<50:
               if poke_pix[i][0]<50:
                    new_pix.append((255,0,0,255))
               else:
                    new_pix.append((0,0,0,255))
          else:
               if poke_pix[i][0]<50:
                    new_pix.append((255,200,200,255))
               else:
                    new_pix.append((255,255,255,255))
     
     new_img=Image.new(mode='RGBA', size=(IMG_DIM,IMG_DIM))
     new_img.putdata(new_pix)

     new_img.show()
     print(len(poke_pix))

main(data)
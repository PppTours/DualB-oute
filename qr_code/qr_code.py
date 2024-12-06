import requests
from PIL import Image
from random import randint
import urllib.parse

IMG_DIM = 100
poke_colors = ((220,220,20,255),(150,150,255,255),(0,255,0,255),(220,200,255,255),(255,80,60,255),(255,150,30,255),(20,240,240,255),
               (255,100,255,255), (200,0,255,255), (0,180,255,255))

def get_code(data : str):
    encoded_data = urllib.parse.quote(data)

    api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={encoded_data}"

    response = requests.get(api_url)

    if response.status_code == 200:
        with open("qr_code/qrcode.png", "wb") as file:
            file.write(response.content)

def get_pixels(img : Image):
     pixdata = []
     for pix in img.getdata():
             pixdata.append(pix)
     return pixdata

'''
@brief génére un code-qr prenant la forme de la template du célébre meme "who's that pokemon"
l'image générée est enregistrée sous le nom "res.png" dans le dossier qr_code
@param data la chaine de caractère à encoder dans la code-qr
@return un tuple contenant un objet Image Pillow et le code integer du pokémon représenté
'''
def generate_QR(data : str):
     
     while len(data)<174:
          data += ' '

     get_code(data)

     poke = randint(1,10)
     bg = Image.open("qr_code/bg.jpg")
     code_img = Image.open("qr_code/qrcode.png", "r", None).convert("RGBA").convert("RGBA").resize((IMG_DIM,IMG_DIM), 1)
     poke_img = Image.open("qr_code/shadows/"+str(poke)+".png", "r", None).resize((IMG_DIM,IMG_DIM), 1)

     code_pix = get_pixels(code_img)
     poke_pix = get_pixels(poke_img)

     new_pix = []

     for i in range(IMG_DIM*IMG_DIM):
          if code_pix[i][0]<50:
               if poke_pix[i][0]<50:
                    new_pix.append((int(poke_colors[poke-1][0]*0.7),int(poke_colors[poke-1][1]*0.7),int(poke_colors[poke-1][2]*0.7),255))
               else:
                    new_pix.append((70,70,70,255))
          else:
               if poke_pix[i][0]<50:
                    new_pix.append(poke_colors[poke-1])
               else:
                    new_pix.append((255,255,255,255))
     
     new_img=Image.new(mode='RGBA', size=(IMG_DIM,IMG_DIM))
     new_img.putdata(new_pix)

     bg.paste(new_img, (35,35))

     bg.save("qr_code/res.png")
     return (bg, poke)
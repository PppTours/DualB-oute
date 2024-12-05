import requests
from PIL import Image
from random import randint
import urllib.parse

IMG_DIM = 500
poke_colors = ((255,255,20,255),(150,150,255,255),(0,255,0,255),(220,200,255,255))

def get_code(data : str):
    encoded_data = urllib.parse.quote(data)  # Encodage des caractères spéciaux

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

def main(data : str):
     
     while len(data)<174:
          data += ' '

     get_code(data)

     poke=randint(1,4)
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

     new_img.show()
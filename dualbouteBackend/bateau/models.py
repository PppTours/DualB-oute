from django.db import models

# Create your models here.
class PartieDuCorps(models.Model):
    nom = models.CharField(max_length=100)
    svg_id = models.CharField(max_length=100)

    def __str__(self):
        return self.nom

class EcoData(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='media/')

    def __str__(self):
        return self.title




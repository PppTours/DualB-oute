from django.db import models

# Create your models here.
class PartieDuCorps(models.Model):
    nom = models.CharField(max_length=100, null=True, blank=True)
    svg_id = models.CharField(max_length=100, null=True, blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(default="")
    image = models.ImageField(upload_to='media/', null=True, blank=True)

    def __str__(self):
        return self.nom
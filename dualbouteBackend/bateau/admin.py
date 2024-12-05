from django.contrib import admin
from .models import PartieDuCorps, EcoData

class PartieDuCorpsAdmin(admin.ModelAdmin):
    list_display = ('nom', 'svg_id')
    search_fields = ('nom', 'svg_id')

class EcoDataAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image')
    search_fields = ('title', 'description', 'image')

# Register your models here.
admin.site.register(PartieDuCorps, PartieDuCorpsAdmin)
admin.site.register(EcoData, EcoDataAdmin)
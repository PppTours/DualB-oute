from django.contrib import admin
from .models import PartieDuCorps

class PartieDuCorpsAdmin(admin.ModelAdmin):
    list_display = ('nom', 'svg_id')
    search_fields = ('nom', 'svg_id')
# Register your models here.
admin.site.register(PartieDuCorps, PartieDuCorpsAdmin)
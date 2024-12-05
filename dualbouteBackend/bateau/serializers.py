from rest_framework import serializers

from  .models import PartieDuCorps


class PartieDuCorpsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartieDuCorps
        fields = ('id', 'nom', 'svg_id')
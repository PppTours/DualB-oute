from rest_framework import viewsets

from .models import PartieDuCorps
from .serializers import PartieDuCorpsSerializer

# Create your views here.
class PartieDuCorpsViewSet(viewsets.ModelViewSet):
    queryset = PartieDuCorps.objects.all()
    serializer_class = PartieDuCorpsSerializer
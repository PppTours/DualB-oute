from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'partie-du-corps', views.PartieDuCorpsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
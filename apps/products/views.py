from rest_framework import generics, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from apps.products.models import Product, Media
from apps.products.serializers import ProductSerializer, MediaSerializer
# Create your views here.

class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = (
        'category_id',
        'sub_category_id'
    )
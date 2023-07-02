from rest_framework import generics, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, RangeFilter
from apps.products.models import Product, Media
from .filters import PriceFilterBackend
from apps.products.serializers import ProductSerializer, MediaSerializer
# Create your views here.

class ProductFilter(FilterSet):
    price = RangeFilter(field_name='price', lookup_expr='price')

    class Meta:
        model = Product
        fields = ['price']

class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter,PriceFilterBackend]
    filter_class = ProductFilter
    filterset_fields = (
        'category_id',
        'sub_category_id',
        'currency'
    )
    search_fields = ['name']
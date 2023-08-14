from rest_framework import generics
from apps.category.models import Category, Currency
from apps.category.serializers import CategorySerializer, ProductCurrencySerializer
# Create your views here.

class CategoryAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CurrencyAPIView(generics.ListAPIView):
    queryset = Currency.objects.all()
    serializer_class = ProductCurrencySerializer
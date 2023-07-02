from rest_framework import serializers
from apps.products.models import Product, Media
from apps.category.models import Currency
from apps.category.serializers import ProductCategorySerializer, ProductSubCategorySerializer,ProductCurrencySerializer

class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = "__all__"
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
    media = MediaSerializer(read_only=True, many=True)
    category = ProductCategorySerializer(read_only=True)
    sub_category = ProductSubCategorySerializer(read_only=True)
    currency = ProductCurrencySerializer()
    
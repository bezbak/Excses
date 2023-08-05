from rest_framework import serializers
from apps.products.models import Product, Media
from apps.category.serializers import ProductCategorySerializer, ProductSubCategorySerializer,ProductCurrencySerializer
from apps.users.serializers import PostUserSerializer
class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = "__all__"
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id","name","description","main_image","artikul","sale_price",'price', 'sale','owner', "currency", 'user_info', 'media', 'category','sub_category')
    media = MediaSerializer(read_only=True, many=True)
    category = ProductCategorySerializer(read_only=True)
    sub_category = ProductSubCategorySerializer(read_only=True)
    currency = ProductCurrencySerializer()
    user_info = serializers.SerializerMethodField()
    def get_user_info(self, obj):
        qs = obj.owner
        data = {}
        data.setdefault('id',qs.id)
        data.setdefault('username',qs.username)
        if qs.profile_image:
            data.setdefault('profile_image',qs.profile_image)
        else:
            data.setdefault('profile_image','')
        return data
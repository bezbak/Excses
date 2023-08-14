from rest_framework import serializers
from apps.products.models import Product, Media, Favorites, ProductReviews
from apps.category.serializers import ProductCategorySerializer, ProductSubCategorySerializer,ProductCurrencySerializer

class ProductReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductReviews
        fields = "__all__"
    def validate(self, attrs):
        if attrs['stars'] >5 or attrs['stars'] <0:
            raise serializers.ValidationError({'stars':'Можно ставить отзыв только от 0 до 5'})
        return super().validate(attrs)
    
class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = "__all__"
        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id","name","description","main_image","artikul","sale_price",'price', 'sale','owner', "currency", 'user_info', 'media', 'category','sub_category','mid_rate','reviews_count')
    media = MediaSerializer(read_only=True, many=True)
    category = ProductCategorySerializer(read_only=True)
    sub_category = ProductSubCategorySerializer(read_only=True)
    currency = ProductCurrencySerializer()
    user_info = serializers.SerializerMethodField()
    mid_rate = serializers.SerializerMethodField()
    reviews_count = serializers.SerializerMethodField()
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
    
    def get_reviews_count(self, obj):
        qs = obj.reviews.count()
        return f"{qs}"
    
    def get_mid_rate(self, obj):
        qs = obj.reviews.all()
        stars = 0
        for i in qs:
            stars += i.stars
        if qs.count() != 0:
            return f"{str(stars / qs.count())[:4]}"
        else:
            return "0"
class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = ('id', 'user', 'product')
class FavoritesInfoSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    class Meta:
        model = Favorites
        fields = ['product']
    def get_product(self, obj):
        qs = obj.product
        data = {}
        data.setdefault('id',qs.id)
        data.setdefault('name',qs.name)
        data.setdefault('main_image',qs.main_image.url)
        data.setdefault('price',qs.price)   
        data.setdefault('sale',qs.sale)   
        data.setdefault('sale_price',qs.sale_price)   
        data.setdefault('currency',qs.currency.name)
        return data    

from rest_framework import serializers
from apps.category.models import Category, SubCategory

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['id','name', 'slug']
        
class CategorySerializer(serializers.ModelSerializer):
    sub_category = SubCategorySerializer(read_only=True, many=True)
    class Meta:
        model = Category
        fields = ['id','name', 'slug', 'sub_category']
    
class ProductSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['id','name', 'slug']
        
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name', 'slug']
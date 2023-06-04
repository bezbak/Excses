from rest_framework import generics
from apps.category.models import Category
from apps.category.serializers import CategorySerializer
# Create your views here.

class CategoryAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
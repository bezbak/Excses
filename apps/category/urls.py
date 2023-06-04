from django.urls import path
from apps.category.views import CategoryAPIView
urlpatterns = [
    path('', CategoryAPIView.as_view())
]

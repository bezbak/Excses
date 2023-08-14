from django.urls import path
from .views import ProductReviewsCreateAPIView
urlpatterns = [
    path('review_add/',ProductReviewsCreateAPIView.as_view())
]

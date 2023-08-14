from django.urls import path
from apps.category.views import CategoryAPIView,CurrencyAPIView
urlpatterns = [
    path('', CategoryAPIView.as_view()),
    path('currency/', CurrencyAPIView.as_view()),
]

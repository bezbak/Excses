from django.urls import path
from apps.settings.views import SliderADSAPIView, CardADSAPIView
urlpatterns = [
    path('slider/', SliderADSAPIView.as_view()),
    path('card/', CardADSAPIView.as_view()),
]

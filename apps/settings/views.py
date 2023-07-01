from rest_framework import generics
from apps.settings.models import SliderADS, CardADS
from apps.settings.serializers import SliderADSSerializer, CardADSSerializer
# Create your views here.

class SliderADSAPIView(generics.ListAPIView):
    queryset = SliderADS.objects.all()
    serializer_class = SliderADSSerializer
    
class CardADSAPIView(generics.ListAPIView):
    queryset = CardADS.objects.all()
    serializer_class = CardADSSerializer
    
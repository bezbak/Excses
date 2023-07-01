from rest_framework import serializers
from apps.settings.models import SliderADS, CardADS

class SliderADSSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderADS
        fields = '__all__'
    
class CardADSSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardADS
        fields = '__all__'
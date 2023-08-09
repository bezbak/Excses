from rest_framework import generics, viewsets, mixins
from django.shortcuts import redirect
from apps.users.models import User
from rest_framework.response import Response
from apps.users.serializers import RegisterSerializer, UserSerializer
# Create your views here.

class UserViewSet(mixins.RetrieveModelMixin,mixins.ListModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class RegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer    
from rest_framework import generics, viewsets
from apps.users.models import User
from apps.users.serializers import RegisterSerializer, UserSerializer
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    
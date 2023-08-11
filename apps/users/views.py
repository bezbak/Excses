from rest_framework import generics, viewsets, mixins
from apps.users.models import User, ResetPassCode
from apps.users.serializers import RegisterSerializer, UserSerializer,ChangePasswordSerializer, EmailCheck, ResetPasswordSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import update_session_auth_hash
from django.core.mail import send_mail
# Create your views here.

@api_view(['POST', "GET"])  
@permission_classes([IsAuthenticatedOrReadOnly])
def change_password(request, id):
    if request.method == 'POST':
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.get(id=id)
            if user.check_password(serializer.data.get('old_password')):
                user.set_password(serializer.data.get('new_password'))
                user.save()
                update_session_auth_hash(request, user)  # To update session after password change
                return Response({'message': 'Пароль успешно изменён.'}, status=status.HTTP_200_OK)
            return Response({'error': 'Неправильный старый пароль'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        serializer = ChangePasswordSerializer()
        return Response({'message': 'Отправьие сюда старый пароль и новый пароль.'}, status=status.HTTP_200_OK)
    
class EmailCheckAPIView(generics.CreateAPIView):
    queryset = ResetPassCode.objects.all()
    serializer_class = EmailCheck

class ResetPasswordAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = ResetPasswordSerializer

class UserViewSet(mixins.RetrieveModelMixin,mixins.ListModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class RegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer    
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.contrib.auth.views import LogoutView
from apps.users.views import change_password, EmailCheckAPIView, ResetPasswordAPIView
urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('change_password/<int:id>/', change_password, name='change_password'),
    path('email_cheack/', EmailCheckAPIView.as_view(), name='email_cheack'),
    path('reset_password/', ResetPasswordAPIView.as_view(), name='reset_password'),
]

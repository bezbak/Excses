from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from apps.users.models import User, ResetPassCode
from django.core.mail import send_mail

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Пароли отличаются"})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','first_name','last_name','email','profile_image','decription','country','phone_number','whatsapp','instagram','telegram','is_seller')
        
        
class PostUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'profile_image')

class ResetPasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email')

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

class EmailCheck(serializers.ModelSerializer):
    email = serializers.CharField(write_only=True)
    code = serializers.CharField(read_only=True)
    class Meta:
        model = ResetPassCode
        fields = ['email', 'code']
    
    def create(self, validated_data):
        if User.objects.filter(email=validated_data['email']).exists():
            user = User.objects.get(email = validated_data['email'])
            code = ResetPassCode.objects.create(user=user, email=validated_data['email'])
            code.save()
            email_body = f"""
                Здравствуйте,
                вот ваш ферифиционный код {code.code}
            """
            send_mail(
                #subject 
                    f"Код подтверждения", 
                    #message 
                    email_body, 
                    #from email 
                    'noreply@somehost.local', 
                    #to email 
                    [user.email] 
            )
            return code

class ResetPasswordSerializer(serializers.ModelSerializer):
    code = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only = True, required = True, validators = [validate_password])
    confirm_password = serializers.CharField(write_only = True, required = True, validators = [validate_password])
    
    class Meta:
        model = User
        fields = ['code', 'password', 'confirm_password']
       
    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({'password':"Пароли отличаются"})
        if ResetPassCode.objects.all().filter(code = attrs['code']).exists() == False:
            raise serializers.ValidationError({'code':"Такого кода нет"})
        return attrs
     
    def create(self, validated_data):
        email_check = ResetPassCode.objects.all().filter(code = validated_data['code'])
        user = User.objects.get(email = email_check[0].email)
        user.set_password(validated_data['password'])
        user.save()
        for i in email_check:
            i.delete()
        return user
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers 
from apps.products.views import ProductViewSet, MediaViewSet
router = routers.DefaultRouter()
api_urlpatterns = [
    path('users/', include('apps.users.urls')),
    path('settings/', include('apps.settings.urls')),
    path('category/', include('apps.category.urls')),
]
router.register(r'product', ProductViewSet)
router.register(r'media', MediaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_urlpatterns)),
    path('api/', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
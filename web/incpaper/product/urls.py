from django.urls import path,include
from .views import *

urlpatterns = [
    path('product/',ProductView.as_view(),name="product-list"),
    path('product/<int:product_id>/', ProductView.as_view(), name='product-detail'),
    path('productdetail/<int:product_id>/',ProductDetailView.as_view(),name="productdetail-view"),

    path('images/',ProductImageView.as_view(),name="product-image-list"),
    path('images/<int:product_image_id>/', ProductImageView.as_view(), name='product-image-detail'),

    path('feature/',ProductFeatureView.as_view(),name="product-feature-list"),
    path('feature/<int:product_feature_id>/', ProductFeatureView.as_view(), name='product-feature-detail'),
]

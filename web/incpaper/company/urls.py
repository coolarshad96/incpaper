from django.urls import path,include
from .views import *

urlpatterns = [
    path('company/',CompanyView.as_view(),name="company-list"),
    path('company/<int:company_id>/', CompanyView.as_view(), name='company-detail'),
    path('companylist/',CompanySearchListView.as_view(),name="companysearchlist-list"),
    path('companylist/<int:company_id>/',CompanySearchListView.as_view(),name="companysearchlist-detail"),
    path('companyproduct/<int:company_id>/',CompanyProductView.as_view(),name="companyproduct-detail"),

    path('images/', CompanyImageView.as_view(), name='company-image-list'),
    path('images/<int:company_image_id>/', CompanyImageView.as_view(), name='company-image-detail'),

    path('category/', CompanyCategoryView.as_view(), name='company-category-list'),
    path('category/<int:company_category_id>/', CompanyCategoryView.as_view(), name='company-category-detail'),

    path('time/', CompanyTimeView.as_view(), name='company-time-list'),
    path('time/<int:company_time_id>/', CompanyTimeView.as_view(), name='company-time-detail'),
]

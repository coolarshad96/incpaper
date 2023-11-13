from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return obj.tags.names()
    
    class Meta:
        model = Product
        fields = ['id','product_name', 'product_description', 'price', 'unit', 'video_url', 'tags','company']

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('id', 'product', 'image')

class ProductFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFeature
        fields = '__all__'

class ProductCompanySerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return obj.tags.names()
    
    class Meta:
        model = Company
        fields = ['id','name', 'address', 'phone', 'email', 'website', 'fax', 'description', 'logo', 'location', 'tags']

class ProductSelectSerializer(serializers.ModelSerializer):
    company = ProductCompanySerializer()
    product_images=ProductImageSerializer(many=True, read_only=True, source='productimage_set')
    product_features=ProductFeatureSerializer(many=True, read_only=True, source='productfeature_set')
    tags = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return obj.tags.names()
    
    class Meta:
        model = Product
        fields = ['id','product_name', 'product_description', 'price', 'unit', 'video_url', 'tags','product_images','product_features','company']
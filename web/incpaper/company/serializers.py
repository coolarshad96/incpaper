from rest_framework import serializers
from .models import *
from product.serializers import *

class CompanySerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return obj.tags.names()
    
    class Meta:
        model = Company
        fields = ['id','name', 'address', 'phone', 'email', 'website', 'fax', 'description', 'logo', 'location', 'tags']

class CompanyImageSerializer(serializers.ModelSerializer):
    # company = CompanySerializer()
    class Meta:
        model = CompanyImage
        fields = '__all__'

class CompanyCategorySerializer(serializers.ModelSerializer):
    # company = CompanySerializer()
    class Meta:
        model = CompanyCategory
        fields = '__all__'

class CompanyTimeSerializer(serializers.ModelSerializer):
    # company = CompanySerializer()
    class Meta:
        model = CompanyTime
        fields = '__all__'

class CompanySearchListSerializer(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    # tags = serializers.StringRelatedField(many=True)
    images = CompanyImageSerializer(many=True, read_only=True, source='companyimage_set')  # Nested serialization
    categories = CompanyCategorySerializer(many=True, read_only=True,source='companycategory_set')
    time=CompanyTimeSerializer(many=True, read_only=True,source='companytime_set')
    def get_tags(self, obj):
        return obj.tags.names()
    
    class Meta:
        model = Company
        fields = ['id', 'name', 'address', 'phone', 'email', 'website', 'fax', 'description', 'logo', 'location', 'tags', 'images', 'categories','time']

class CompanyProductSerializers(serializers.ModelSerializer):
    tags = serializers.SerializerMethodField()
    products = ProductSelectSerializer(many=True, read_only=True, source='product_set')
    images = CompanyImageSerializer(many=True, read_only=True, source='companyimage_set')  # Nested serialization
    categories = CompanyCategorySerializer(many=True, read_only=True,source='companycategory_set')
    time=CompanyTimeSerializer(many=True, read_only=True,source='companytime_set')
    def get_tags(self, obj):
        return obj.tags.names()
    
    class Meta:
        model = Company
        fields = ['id', 'name', 'address', 'phone', 'email', 'website', 'fax', 'description', 'logo', 'location', 'tags', 'images', 'categories','time','products']
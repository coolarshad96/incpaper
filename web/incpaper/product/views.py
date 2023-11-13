from django.views import View
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt 
from .serializers import *
from rest_framework.response import Response
import pdb

from .models import *

@method_decorator(csrf_exempt, name='dispatch')
class ProductView(APIView):
    def get(self, request, product_id=None):
        if product_id is None:
            # Handle the case when the company ID is not provided
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)
        else:
            # Handle the case when the company ID is provided
            try:
                product = Product.objects.get(id=product_id)
                serializer = ProductSerializer(product)
                return Response(serializer.data)
            except Product.DoesNotExist:
                return Response({'message': 'Product not found'}, status=404)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        tags = request.POST.getlist('tags') 
        if serializer.is_valid():
            product=serializer.save()
            product.tags.set(tags) 
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
        
    def put(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
            serializer = ProductSerializer(product, data=request.data)
            tags = request.POST.getlist('tags') 
            if serializer.is_valid():
                product=serializer.save()
                product.tags.set(tags)
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=400)
        except Product.DoesNotExist:
            return Response({'message': 'Product not found'}, status=404)

    def delete(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
            product.delete()
            return Response({'message': 'Product deleted successfully'})
        except Product.DoesNotExist:
            return Response({'message': 'Product not found'}, status=404)

# Create your views here.
@method_decorator(csrf_exempt, name='dispatch')
class ProductImageView(APIView):
    def get(self, request, product_image_id=None):
        if product_image_id is None:
            images = ProductImage.objects.all()
            serializer = ProductImageSerializer(images, many=True)
            return Response(serializer.data)
        else:
            try:
                image = ProductImage.objects.get(id=product_image_id)
                serializer = ProductImageSerializer(image)
                return Response(serializer.data)
            except ProductImage.DoesNotExist:
                return Response({'message': 'Product images not found'}, status=404)

    def post(self, request):
        serializer = ProductImageSerializer(data=request.data) 
        if serializer.is_valid():
            product_id = serializer.validated_data['product'].id
            product = Product.objects.get(id=product_id)
            serializer.save(product=product)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, product_image_id):
        try:
            product_image = ProductImage.objects.get(id=product_image_id)
            serializer = ProductImageSerializer(product_image, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except ProductImage.DoesNotExist:
            return Response({'message': 'Product image not found'}, status=404)

    def delete(self, request, product_image_id):
        try:
            product_image = ProductImage.objects.get(id=product_image_id)
            product_image.delete()
            return Response({'message': 'Product image deleted successfully'})
        except ProductImage.DoesNotExist:
            return Response({'message': 'Product image not found'}, status=404)
        

@method_decorator(csrf_exempt, name='dispatch')
class ProductFeatureView(APIView):
    def get(self, request, product_feature_id=None):
        if product_feature_id is None:
            features = ProductFeature.objects.all()
            serializer = ProductFeatureSerializer(features, many=True)
            return Response(serializer.data)
        else:
            try:
                feature = ProductFeature.objects.get(id=product_feature_id)
                serializer = ProductFeatureSerializer(feature)
                return Response(serializer.data)
            except ProductFeature.DoesNotExist:
                return Response({'message': 'Product feature not found'}, status=404)

    def post(self, request):
        serializer = ProductFeatureSerializer(data=request.data) 
        if serializer.is_valid():
            product_id = serializer.validated_data['product'].id
            product = Product.objects.get(id=product_id)
            serializer.save(product=product)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, product_feature_id):
        try:
            product_feature = ProductFeature.objects.get(id=product_feature_id)
            serializer = ProductFeatureSerializer(product_feature, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except ProductFeature.DoesNotExist:
            return Response({'message': 'Product feature not found'}, status=404)

    def delete(self, request, product_feature_id):
        try:
            product_feature = ProductFeature.objects.get(id=product_feature_id)
            product_feature.delete()
            return Response({'message': 'Product feature deleted successfully'})
        except ProductImage.DoesNotExist:
            return Response({'message': 'Product feature not found'}, status=404)

class ProductDetailView(APIView):
    def get(self, request, product_id=None):
        if product_id is None:
            products = Product.objects.all()
            serializer = ProductSelectSerializer(products, many=True)
            return Response(serializer.data)
        else:
            try:
                product = Product.objects.get(id=product_id)
                serializer = ProductSelectSerializer(product)
                return Response(serializer.data)
            except Product.DoesNotExist:
                return Response({'message': 'Product not found'}, status=404)
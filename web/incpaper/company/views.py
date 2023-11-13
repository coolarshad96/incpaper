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
class CompanyView(APIView):
    def get(self, request, company_id=None):
        if company_id is None:
            companies = Company.objects.all()
            serializer = CompanySerializer(companies, many=True)
            return Response(serializer.data)
        else:
            try:
                company = Company.objects.get(id=company_id)
                serializer = CompanySerializer(company)
                return Response(serializer.data)
            except Company.DoesNotExist:
                return Response({'message': 'Company not found'}, status=404)
    
    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        tags = request.POST.getlist('tags') 
        if serializer.is_valid():
            company=serializer.save()
            company.tags.set(tags) 
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
        
    def put(self, request, company_id):
        try:
            company = Company.objects.get(id=company_id)
            serializer = CompanySerializer(company, data=request.data)
            tags = request.POST.getlist('tags') 
            if serializer.is_valid():
                company=serializer.save()
                company.tags.set(tags)
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=400)
        except Company.DoesNotExist:
            return Response({'message': 'Company not found'}, status=404)

    def delete(self, request, company_id):
        try:
            company = Company.objects.get(id=company_id)
            company.delete()
            return Response({'message': 'Company deleted successfully'})
        except Company.DoesNotExist:
            return Response({'message': 'Company not found'}, status=404)

class CompanySearchListView(APIView):
    def get(self, request, company_id=None):
        if company_id is None:
            companies = Company.objects.all()
            serializer = CompanySearchListSerializer(companies, many=True)
            return Response(serializer.data)
        else:
            try:
                company = Company.objects.get(id=company_id)
                serializer = CompanySearchListSerializer(company)
                return Response(serializer.data)
            except Company.DoesNotExist:
                return Response({'message': 'Company not found'}, status=404)
            

class CompanyProductView(APIView):
    def get(self, request, company_id=None):
        if company_id is None:
            companies = Company.objects.all()
            serializer = CompanyProductSerializers(companies, many=True)
            return Response(serializer.data)
        else:
            try:
                company = Company.objects.get(id=company_id)
                serializer = CompanyProductSerializers(company)
                return Response(serializer.data)
            except Company.DoesNotExist:
                return Response({'message': 'Company not found'}, status=404)
   
            
@method_decorator(csrf_exempt, name='dispatch')
class CompanyImageView(APIView):
    def get(self, request, company_image_id=None):
        if company_image_id is None:
            images = CompanyImage.objects.all()
            serializer = CompanyImageSerializer(images, many=True)
            return Response(serializer.data)
        else:
            try:
                image = CompanyImage.objects.get(id=company_image_id)
                serializer = CompanyImageSerializer(image)
                return Response(serializer.data)
            except CompanyImage.DoesNotExist:
                return Response({'message': 'Company images not found'}, status=404)

    def post(self, request):
        serializer = CompanyImageSerializer(data=request.data) 
        if serializer.is_valid():
            company_id = serializer.validated_data['company'].id
            company = Company.objects.get(id=company_id)
            serializer.save(company=company)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, company_image_id):
        try:
            company_image = CompanyImage.objects.get(id=company_image_id)
            serializer = CompanyImageSerializer(company_image, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except CompanyImage.DoesNotExist:
            return Response({'message': 'Company image not found'}, status=404)

    def delete(self, request, company_image_id):
        try:
            company_image = CompanyImage.objects.get(id=company_image_id)
            company_image.delete()
            return Response({'message': 'Company image deleted successfully'})
        except CompanyImage.DoesNotExist:
            return Response({'message': 'Company image not found'}, status=404)
        
@method_decorator(csrf_exempt, name='dispatch')
class CompanyCategoryView(APIView):
    def get(self, request, company_category_id=None):
        if company_category_id is None:
            catgeories = CompanyCategory.objects.all()
            serializer = CompanyCategorySerializer(catgeories, many=True)
            return Response(serializer.data)
        else:
            try:
                category = CompanyCategory.objects.get(id=company_category_id)
                serializer = CompanyCategorySerializer(category)
                return Response(serializer.data)
            except CompanyCategory.DoesNotExist:
                return Response({'message': 'Company category not found'}, status=404)

    def post(self, request):
        serializer = CompanyCategorySerializer(data=request.data) 
        if serializer.is_valid():
            company_id = serializer.validated_data['company'].id
            company = Company.objects.get(id=company_id)
            serializer.save(company=company)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, company_category_id):
        try:
            category = CompanyCategory.objects.get(id=company_category_id)
            serializer = CompanyCategorySerializer(category, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except CompanyCategory.DoesNotExist:
            return Response({'message': 'Company category not found'}, status=404)

    def delete(self, request, company_category_id):
        try:
            category = CompanyCategory.objects.get(id=company_category_id)
            category.delete()
            return Response({'message': 'Company category deleted successfully'})
        except CompanyCategory.DoesNotExist:
            return Response({'message': 'Company category not found'}, status=404)
        

@method_decorator(csrf_exempt, name='dispatch')
class CompanyTimeView(APIView):
    def get(self, request, company_time_id=None):
        if company_time_id is None:
            times = CompanyTime.objects.all()
            serializer = CompanyTimeSerializer(times, many=True)
            return Response(serializer.data)
        else:
            try:
                category = CompanyTime.objects.get(id=company_time_id)
                serializer = CompanyTimeSerializer(category)
                return Response(serializer.data)
            except CompanyTime.DoesNotExist:
                return Response({'message': 'Company time not found'}, status=404)

    def post(self, request):
        serializer = CompanyTimeSerializer(data=request.data) 
        if serializer.is_valid():
            company_id = serializer.validated_data['company'].id
            company = Company.objects.get(id=company_id)
            serializer.save(company=company)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def put(self, request, company_time_id):
        try:
            company_time = CompanyTime.objects.get(id=company_time_id)
            serializer = CompanyTimeSerializer(company_time, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except CompanyTime.DoesNotExist:
            return Response({'message': 'Company time not found'}, status=404)

    def delete(self, request, company_time_id):
        try:
            company_time = CompanyTime.objects.get(id=company_time_id)
            company_time.delete()
            return Response({'message': 'Company time deleted successfully'})
        except CompanyTime.DoesNotExist:
            return Response({'message': 'Company time not found'}, status=404)
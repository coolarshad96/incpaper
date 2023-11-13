from django.db import models
from taggit.managers import TaggableManager
from company.models import Company
# Create your models here.
class Product(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE,null=True)
    product_name=models.CharField(max_length=255)
    product_description=models.TextField(null=True)
    price=models.FloatField()
    unit=models.CharField(max_length=10)
    video_url=models.CharField(max_length=255,null=True)

    tags = TaggableManager()

    def __str__(self):
        return self.product_name

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')

    def __str__(self):
        return self.product.product_name

class ProductFeature(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    feature_key=models.CharField(max_length=50)
    feature_value=models.CharField(max_length=100)

    def __str__(self):
        return self.product.product_name
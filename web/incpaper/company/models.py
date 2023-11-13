from django.db import models
from taggit.managers import TaggableManager
from django.contrib.gis.db import models


# Now, in your view or template, you can access the tags of an instance of MyModel using the tags attribute:
# my_model_instance = MyModel.objects.get(id=1)
# my_model_tags = my_model_instance.tags.all()
# my_model_instance.tags.add('tag1', 'tag2', 'tag3')
# my_model_instance.tags.remove('tag3')


# my_model_instance = MyModel.objects.get(id=1)
# latitude = my_model_instance.location.y
# longitude = my_model_instance.location.x

# Create your models here.
class Company(models.Model):
    name=models.CharField(max_length=255)
    address=models.CharField(max_length=255)
    phone=models.CharField(max_length=255)
    email=models.EmailField(max_length=255,null=True)
    website=models.CharField(max_length=255,null=True)
    fax=models.CharField(max_length=255,null=True)
    description=models.TextField(null=True)
    logo = models.ImageField(upload_to='company_logo/',null=True)
    location = models.PointField()


    tags = TaggableManager()

    def __str__(self):
        return self.name



class CompanyImage(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='company_images/')

    def __str__(self):
        return self.company.name

class CompanyCategory(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    category=models.CharField(max_length=255)

    def __str__(self):
        return self.company.name

class CompanyTime(models.Model):
    DAY_CHOICES = [
        ('monday', 'Monday'),
        ('tuesday', 'Tuesday'),
        ('wednesday', 'Wednesday'),
        ('thursday', 'Thursday'),
        ('friday', 'Friday'),
        ('saturday', 'Saturday'),
        ('sunday', 'Sunday'),
    ]
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    day=models.CharField(max_length=9,choices=DAY_CHOICES)
    opening=models.TimeField(null=True)
    closing=models.TimeField(null=True)

    def __str__(self):
        return self.company.name
# Generated by Django 4.1.5 on 2023-05-27 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_rename_contacts_company_phone_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='companytime',
            name='day',
            field=models.CharField(choices=[('monday', 'Monday'), ('tueday', 'Tuesday'), ('wednesday', 'Wednesday'), ('thursday', 'Thursday'), ('friday', 'Friday'), ('saturday', 'Saturday'), ('sunday', 'Sunday')], max_length=9),
        ),
    ]

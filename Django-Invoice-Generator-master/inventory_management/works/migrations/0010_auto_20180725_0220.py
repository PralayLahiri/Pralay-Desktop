# Generated by Django 2.0.7 on 2018-07-25 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('works', '0009_auto_20180725_0213'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quantityrate',
            name='report',
        ),
        migrations.AddField(
            model_name='quantityrate',
            name='report',
            field=models.ManyToManyField(to='works.Report'),
        ),
    ]

# Generated by Django 2.0.7 on 2018-07-19 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('works', '0004_auto_20180716_0646'),
    ]

    operations = [
        migrations.AlterField(
            model_name='challan',
            name='amount',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='challan',
            name='cgst',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='challan',
            name='sgst',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='work',
            name='amount',
            field=models.FloatField(),
        ),
    ]
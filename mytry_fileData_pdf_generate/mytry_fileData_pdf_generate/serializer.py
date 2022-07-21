from rest_framework import serializers
from .models import showpdf   #import model
 
# Create a class
class serializer(serializers.ModelSerializer):
 
    class Meta:
        model = showpdf
        fields = '__all__'
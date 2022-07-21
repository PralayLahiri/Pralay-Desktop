from socket import fromshare
from tkinter import Widget
from django import forms
from .models import User

class StudentRegistration(forms.ModelForm):
    
    class Meta:
        model = User
        fields = ['name', 'email', 'password']
        
     
        Widgets = {
            'name':forms.TextInput(attrs={'class':'form-control','id':'nameid'}),
            'email':forms.EmailInput(attrs={'class':'form-control','id':'emailid'}),
            'password':forms.PasswordInput(attrs={'class':'form-control','id':'passwordid'})
        }


        


# class StudentRegistration(forms.ModelForm):
#     class Meta:
#         model = User
#         fields = ['name', 'email', 'password']
#         def __init__(self, *args, **kwargs):
#             super().__init__(*args, **kwargs)
#             self.fields['name'].widget.attrs.update({'class': 'special'})
#             self.fields['email'].widget.attrs.update(size='40')

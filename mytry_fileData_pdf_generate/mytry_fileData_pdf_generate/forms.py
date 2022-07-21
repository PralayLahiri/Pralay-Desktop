from socket import fromshare
from tkinter import Widget
from django import forms
from .models import showpdf

class StudentRegistration(forms.ModelForm):
    
    class Meta:
        model = showpdf
        # fields = ['name', 'email', 'password']

        fields = ['pdf_key', 'pdf_Name', 'pdf_year', 'M_No', 'Agenda_Tpc', 'Page_Start', 'Page_End']

        
     
        Widgets = {
            'pdf_key':forms.TextInput(attrs={'class':'form-control','id':'nameid'}),
            'pdf_Name':forms.EmailInput(attrs={'class':'form-control','id':'emailid'}),
            'pdf_year':forms.PasswordInput(attrs={'class':'form-control','id':'passwordid'}),
            'M_No':forms.TextInput(attrs={'class':'form-control','id':'nameid'}),
            'Agenda_Tpc':forms.EmailInput(attrs={'class':'form-control','id':'emailid'}),
            'Page_Start':forms.PasswordInput(attrs={'class':'form-control','id':'passwordid'}),
            'Page_End':forms.PasswordInput(attrs={'class':'form-control','id':'passwordid'})
        }


        


# class StudentRegistration(forms.ModelForm):
#     class Meta:
#         model = User
#         fields = ['name', 'email', 'password']
#         def __init__(self, *args, **kwargs):
#             super().__init__(*args, **kwargs)
#             self.fields['name'].widget.attrs.update({'class': 'special'})
#             self.fields['email'].widget.attrs.update(size='40')

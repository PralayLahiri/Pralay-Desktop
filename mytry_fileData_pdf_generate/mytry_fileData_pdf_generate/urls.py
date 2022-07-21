"""mytry_fileData_pdf_generate URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views
# from mytry_fileData_pdf_generate import views

urlpatterns = [
    #------- default ----------------
    path('admin/', admin.site.urls),
    # path('', views.index, name='first_home_page'),
    # path('contact', views.contact_us, name='contactssasdasd'),
    # path('services', views.services_click, name='services_click_action'),
    #------- default ----------------
    # path('my_app', include('my_app.urls'))
    # path('showempnames',views.showempnames, name='showempnames'),
    # path('',views.showempnames), 
    path('report_pdf_details/', views.reportpdfdata, name="reportpdfdata"),
    path('showpdfdata',views.showpdfdata, name="showpdfdata"), 
    path('showpdfkey',views.showpdfkey, name="showpdfkey"),
    path('InsertRecord',views.InsertRecord, name="InsertRecord"),
    path('create_split_pdf/', views.create_split_pdf, name='create_split_pdf'),
    path('Change_Password/', views.Change_Password, name='Change_Password'),
    path('',views.Login, name="Login"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


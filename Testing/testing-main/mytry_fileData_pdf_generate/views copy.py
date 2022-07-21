from distutils.command.upload import upload
from urllib import response
from django.shortcuts import redirect, render
# from mytry_fileData_pdf_generate.models import showemp
from mytry_fileData_pdf_generate.models import showpdf
from django.http import HttpResponse, JsonResponse
from collections import defaultdict
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings as conf_settings



import pymysql

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import serializer

from django.views.decorators.http import require_POST
from django.http import JsonResponse

from django.conf import settings as conf_settings

from django.views.decorators.csrf import csrf_exempt

from django.core.files.storage import FileSystemStorage
from reportlab.pdfgen.canvas import Canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from django.http import HttpResponse

import  shutil
import sys, os
import numpy as np
from time import sleep
import glob

try:
        from cStringIO import StringIO
except ImportError:
        from io import StringIO


import pytesseract as pt
import pdf2image
from PIL import Image
import PyPDF2
from PyPDF2 import PdfFileWriter, PdfFileReader
import fitz
#from fpdf import FPDF
from fpdf import FPDF, HTMLMixin
from pdf2image import convert_from_path
from datetime import datetime
import pytesseract
import os
import time
import pdfkit
from django.template.loader import get_template
from django.template import Context

import pymysql
from collections import defaultdict
import json


pytesseract.pytesseract.tesseract_cmd = r'Tesseract-OCR/tesseract.exe'
#path_wkhtmltopdf = r'C:\Users\LinuxProgrammer\PycharmProjects\IICA_CET\ReadPdf_Module_2\wkhtmltopdf.exe'
path_wkhtmltopdf = r'./wkhtmltopdf.exe'
wkhtmltopdf_config = pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf)
#xlsx_details_file_name="File_details.xlsx"
#xlsx_details_file_name="Devops_Server_File_details.xlsx"
xlsx_details_file_name="Devops_Server_File_details_Updated.xlsx"

#db_name="EDP_GBM"
db_name="Testing_Visualization"
#file_details_table_name="GBM_file_deatils"
file_details_table_name="GBM_file_deatils_pkl_20220413"



# def edit_lists(request):
#     tasks = request.POST.getlist('entry[]')
#     return HttpResponse('Success')

# mydb = pymysql.connect(
#   host="127.0.0.1",
#   user="pralay",
#   password="Bomb.Pra@6530",
#   db="Testing_Visualization"
# )

# cursor = mydb.cursor()

######### PDF File ############
class HTML2PDF(FPDF, HTMLMixin):
    pass




def Login(request):
    userid=request.POST.get('userid')
    print("username: ",userid)
    password=request.POST.get('password')
    print("username: ",password)
    # sql = "select password from  Users where user_name = '%s'"
    # val = (userid)
    # cursor.execute(sql,val)
    # pwd=cursor.fetchone()
    # print("Password: ",pwd)

    if(userid=='ibps' and password=='ibps'):
        return redirect(reportpdfdata) 

    if(userid=='admin' and password=='admin'):
        return redirect(showpdfdata)

    return render(request,"Dev_Home.html")


# def check_Login(request):
#     userid=request.POST.get('userid')
#     password=request.POST.get('password')
#     sql = "select password from  Users where user_name = %s "
#     val = (userid)
#     cursor.execute(sql,val)
#     pwd=cursor.fetchone()
#     print(pwd)

#     if(password== pwd):
#         return redirect(showpdfdata)

#     if(password== pwd):
#         return redirect(reportpdfdata)



def create_split_pdf(request):
    
    mydb=pymysql.connect(host='localhost',user='pritam',passwd='Mumbai.testops@678',db=db_name)
    cursor_1=mydb.cursor()


    print(request.method)
    print(request.POST)
    print(request.GET)
    print("-------------------INSIDE create_split_pdf-----------------------------")
    
    if (request.method=="POST"):

        from_year=request.POST.get('Years_1')
        to_year=request.POST.get('Years_2')
        mtng_no=request.POST.get('mtng_1')

        if from_year !='a1' and to_year != 'a2' :

            agenga_topic=request.POST.get('agnda_1')

            if (mtng_no=="m1" and agenga_topic=="ag1"):
                select_command="select PDF_Year, File_Path, PDF_Name, M_No , Agenda_Tpc, Page_Start, Page_End from "+file_details_table_name+" where PDF_Year>="+from_year+" and PDF_Year<="+to_year
            
            elif (mtng_no=="m1"):
                select_command="select PDF_Year, File_Path, PDF_Name, M_No , Agenda_Tpc, Page_Start, Page_End from "+file_details_table_name+" where PDF_Year>="+from_year+" and PDF_Year<="+to_year+" and Agenda_Tpc='"+agenga_topic+"'"
            
            elif(agenga_topic=="ag1"):
                select_command="select PDF_Year, File_Path, PDF_Name, M_No , Agenda_Tpc, Page_Start, Page_End from "+file_details_table_name+" where PDF_Year>="+from_year+" and PDF_Year<="+to_year+" and M_No="+mtng_no
            
            else:

                select_command="select PDF_Year, File_Path, PDF_Name, M_No , Agenda_Tpc, Page_Start, Page_End from "+file_details_table_name+" where PDF_Year>="+from_year+" and PDF_Year<="+to_year+" and M_No="+mtng_no+" and Agenda_Tpc='"+agenga_topic+"'"
            
            
            print("select_command: ",select_command)
            cursor_1.execute(select_command)
            table_data=cursor_1.fetchall()

            print("table_data:",table_data)

            table_data=sorted(sorted(sorted(table_data, key=lambda x:int(x[0]), reverse=True), key=lambda x:int(x[3]), reverse=True), key=lambda x:str(x[4]))

            media_path = conf_settings.MEDIA_ROOT
            time_now=datetime.now().strftime("%f")
            op_file_name = "%s/balance_sheets_%s.pdf" % (media_path,time_now)
            op_file_name_new = "%s/new_balance_sheets.pdf" % (media_path)

            pdf_writer = PdfFileWriter()

            new_year_flag=0

            for sheet_i in table_data:
                year=sheet_i[0]
                year="%s-%s"%(str(year),str(int(year)+1))
                file_path=sheet_i[1]
                file_name=sheet_i[2]
                mt_no=sheet_i[3]
                topic=sheet_i[4]
                st_pg=sheet_i[5]
                end_pg=sheet_i[6]
                
                filename = r"%s/%s" % (file_path,file_name)
                filename=filename.replace("\\","/")
                print("filename: ",filename)


                #table_str='<table border="1" cellpadding="5" cellspacing="0" style="background-color: #F0F5FF; border-style: ridge; color: #4040C0" width="100%"><tr><td>'

                topic_str=""
                topic_str_len=0
                for i in topic.split():
                    '''
                    topic_str_len=len(topic_str.replace("<\br>",''))+len(i)+1

                    if(topic_str_len)>=35 and topic_str_len):
                        topic_str+="</br>"
                        topic_str_len=0

                    topic_str+="%s "%str(i)
                    '''

                    topic_str_len+=(len(i)+1)
                    if(topic_str_len>=35):
                        topic_str+="</u></b></h1></br><h1 align='center' style='color:blue;font-size:100px;'><b><u>"
                        topic_str_len=0
                 #       table_str+="</td></tr><tr><td style='width:200px'>"
                    #else:
                    #    topic_str_len+=(len(i)+1)
                    topic_str+="%s "%str(i)
                  #  table_str+="%s "%str(i)


                #table_str+="</td></tr></table>"


                #html = '''<h1 align="center" style="color:blue;font-size:100px;"><b><u>'''+topic+''' </u></b></h1></br><h2 align="center">Year: '''+str(year)+'''</h2></br><h3 align="center">Meeting No.: '''+str(mt_no)+''' </h3>'''    
                #html = '''<h1 align="center" style="color:blue;font-size:100px;"><b><u>'''+topic_str+''' </u></b></h1></br><h2 align="center">Financial Year: '''+str(year)+'''</h2></br><h3 align="center">Meeting No.: '''+str(mt_no)+''' </h3></br>'''+table_str    
                html = '''<h1 align="center" style="color:blue;font-size:100px;"><b><u>'''+topic_str+''' </u></b></h1></br><h2 align="center">Financial Year: '''+str(year)+'''</h2></br><h3 align="center">Meeting No.: '''+str(mt_no)+''' </h3></br>'''
                print("html content: ", html)
                pdf = HTML2PDF()
                #pdf = HTML2PDF('L', 'A4', 'fr', True, 'UTF-8', 0)
                pdf.add_page()
                pdf.write_html(html)
                pdf.output('year.pdf')

                pdf_reader = PdfFileReader(open('year.pdf', "rb"))


                if pdf_reader.isEncrypted:
                    pdf_reader.decrypt('')
                pdf_writer.addPage(pdf_reader.getPage(0))

                #filename = r"%s"%sheet_i.split("*")[1]
                if str(sheet_i[-2]).isdigit():

                    start_page=int(sheet_i[-2])
                    end_page=int(sheet_i[-1])

                    filename_with_path = filename

                    print("filename_with_path: ",filename_with_path)
                    pdf_reader = PdfFileReader(open(filename, "rb"))
                    if pdf_reader.isEncrypted:
                        pdf_reader.decrypt('')
                    print(filename,start_page,end_page, pdf_reader.numPages,pdf_reader.getNumPages())
                    if(start_page <= pdf_reader.numPages):
                        #for page in range(start_page, end_page+1):
                        for page in range(start_page-1, end_page):
                            print("page: ",page)
                            pdf_writer.addPage(pdf_reader.getPage(page))

            
            with open(op_file_name_new, 'wb') as fh:
                pdf_writer.write(fh)

            extra_page = fitz.open(op_file_name_new)
            extra_page.save(op_file_name)

            extra_page.close()

            fs = FileSystemStorage()
            if fs.exists(op_file_name):
                print("op_file_name: ",op_file_name)
                with fs.open(op_file_name) as pdf:
                    response = HttpResponse(pdf, content_type='application/pdf')
                    # response['Content-Disposition'] = 'attachment; filename=req_pdf_file_name'
                    response['Content-Disposition'] = 'inline; filename=req_pdf_file_name'
                    return response
        

    cursor_1.close()
    pdf_all=[]
    agenda_list=[]
    

    for p in showpdf.objects.all():
        
        pdf_all.append([p.pdf_Name, p.pdf_key, p.pdf_year, p.M_No, p.Agenda_Tpc, str( p.Page_Start), str(p.Page_End)])
            

    for x  in showpdf.objects.all():
        
        if x.Agenda_Tpc not in agenda_list:
            agenda_list.append(x.Agenda_Tpc)

    if from_year == to_year and str(from_year) == 'a1' :  
        from_year=False
        to_year=False
        
    else:
        from_year=True
        to_year=True
        
    return render(request,"report_pdf_details.html",context={'pdf':pdf_all, 'agenda_list': agenda_list, 'from_year':from_year, 'to_year':to_year })





def InsertRecord(request):
    mydb = pymysql.connect(
    host="127.0.0.1",
    user="pralay",
    password="Bomb.Pra@6530",
    db="Testing_Visualization"
    )

    cursor = mydb.cursor()
    entry1=request.POST.get('pdf_key')
    print("PDF KEY:---------- ",entry1)

    if entry1 != 'key_1':

        tasks = request.POST.getlist('entry[]')

        if len(tasks) != 0:
            print(request.method)
            print("Hello: ")
            pdfcd=request.POST.get('pdf_key')
            pdfnm=request.POST.get('pdf_name')
            print(pdfnm)

            name = pdfnm[ :-4]
            y=''
            r_name=name[::-1]
            for x in r_name:
                if x== '\\':
                    break
                print(x)
                y=y+x

            s_name=y[::-1]
            print(s_name)

            print(name)
            path='./GB_Files/IBPS/GOVERNING_BOARD_MEETING'+'/'+ s_name
            year = request.POST.get('year')
            
            print(len(tasks))
            print("Array Value : ",tasks)

            i=0
            while i < len(tasks):
                my_list = tasks[i].split(",")
                my_list.pop(-1)
                print(my_list)
                print(my_list[0])
                print(my_list[1])
                print(my_list[2])
                print(my_list[3]) 
                print(request.POST.get('Years_1'))
                i=i+1

                x = datetime.now()
                tm=str(x.strftime("%Y-%m-%d %H:%M:%S"))
                print(tm)
                i=i+1
                print("PDF NAME: ",pdfnm)
                # print(x1)
                
                #sql = "UPDATE GBM_file_deatils_pkl_20220413 SET M_No= %s , Agenda_Tpc= %s , Page_Start= %s , Page_End= %s , File_Upld_Tm= %s where PDF_KEY= %s "
                sql = "UPDATE "+file_details_table_name+" SET M_No= %s , Agenda_Tpc= %s , Page_Start= %s , Page_End= %s , File_Upld_Tm= %s where PDF_KEY= %s "
                val = ( int(my_list[0]), eval(my_list[1]).upper(), int(my_list[2]), int(my_list[3]),tm,pdfcd)
                print(val)
                cursor.execute(sql,val)
                mydb.commit()
                cursor.close()

        return redirect(showpdfdata)



    entry=request.POST.get('pdf_key')
    print("Entry------------------------------>>>>>>", entry)
    print(request.method) 
    print("-------------------")
    print("IN POST",request.POST)
    print("FILES: ",request.FILES)
    print("-------------------")
    print("In GET",request.GET)
    print("-------------------")
    if str(entry) == 'key_1':

        tasks = request.POST.getlist('entry[]')
        #print("tasks: ",tasks)
        if len(tasks) != 0:
            #print(request.method)
            #print("Hello: ")
            
            #mtn_no=request.POST.get('mtn_no')

            #pdfnm=request.POST.get('filename')
            #pdfnm_data=request.FILES['pdf_name']
            pdfnm=request.POST.get('pdf_name')
            #print(pdfnm)
            filename_with_source=pdfnm
            name = str(pdfnm)[ :-4]
            y=''
            r_name=name[::-1]
            for x in r_name:
                if x== '\\':
                    break
                #print(x)
                y=y+x

            s_name=y[::-1]
            #print(s_name)
            filename=s_name+".pdf"
    
            #print(name)
            #path='./GB_Files/IBPS/GOVERNING_BOARD_MEETING'+'/'+ s_name
            '''
            dir_path="GB_Files/IBPS/GOVERNING_BOARD_MEETING/%s"%str(mtn_no)
            year = request.POST.get('year')
            
            #print("dir_path:",dir_path) 
            #print(len(tasks))
            #print("Array Value : ",tasks)

            cur_dir=os.getcwd()
            folder_name='%s/%s'%(str(cur_dir),str(dir_path))

            if os.path.isdir(folder_name):
                pass
            else:
                os.mkdir(folder_name)

    
            file_path='%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename))
            #print("file_path:",file_path)
            if os.path.isfile(file_path):
                #print("File already Exists")
                message="File already Exists"
            else:
                with open('%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename)), 'wb+') as destination:
                    for chunk in filename_with_source.chunks():
                        destination.write(chunk)
                message="File %s is saved inside %s/%s"%(str(filename),str(cur_dir),str(dir_path))
            '''
            # #---------------------------- SAVE FILE -----------------------------------------------
            # dir_path="GB_Files/IBPS/GOVERNING_BOARD_MEETING/%s"%str(mtn_no)
            # #year = request.POST.get('year')
        
            # print("dir_path:",dir_path) 
            # print(len(tasks))
            # print("Array Value : ",tasks)

            # cur_dir=os.getcwd()
            # folder_name='%s/%s'%(str(cur_dir),str(dir_path))

            # if os.path.isdir(folder_name):
            #     pass
            # else:
            #     os.mkdir(folder_name)


            # file_path='%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename))
            
            # print("file_path:",file_path)
            # if os.path.isfile(file_path):
            #     print("File already Exists")
            #     message="File already Exists"
            # else:
            #     with open('%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename)), 'wb+') as destination:
            #         for chunk in filename.chunks():
            #             destination.write(chunk)
            # message="File %s is saved inside %s/%s"%(str(filename),str(cur_dir),str(dir_path))
            # #-------------------------- FILE is Saved -----------------------------------------------


            i=0
            while i < len(tasks):
                my_list = tasks[i].split(",")
                my_list.pop(-1)
                #print(my_list)
                mtn_no=my_list[0]
                #print(my_list[0])
                #print(my_list[1])
                #print(my_list[2])
                #print(my_list[3]) 
                #print(request.POST.get('Years_1'))
                #i=i+1

                year = request.POST.get('year')
                cur_dir=os.getcwd()
                dir_path="GB_Files/IBPS/GOVERNING_BOARD_MEETING/%s"%str(mtn_no)
                folder_name='%s/%s'%(str(cur_dir),str(dir_path))
                '''
                #---------------------------- SAVE FILE -----------------------------------------------
                dir_path="GB_Files/IBPS/GOVERNING_BOARD_MEETING/%s"%str(mtn_no)
                year = request.POST.get('year')
            
                #print("dir_path:",dir_path) 
                #print(len(tasks))
                #print("Array Value : ",tasks)
    
                cur_dir=os.getcwd()
                folder_name='%s/%s'%(str(cur_dir),str(dir_path))
    
                if os.path.isdir(folder_name):
                    pass
                else:
                    os.mkdir(folder_name)

    
                file_path='%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename))
                #print("file_path:",file_path)
                if os.path.isfile(file_path):
                    #print("File already Exists")
                    message="File already Exists"
                else:
                    with open('%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename)), 'wb+') as destination:
                        #for chunk in filename.chunks():
                        #for chunk in pdfnm.chunks():
                        for chunk in pdfnm_data.chunks():
                            destination.write(chunk)
                message="File %s is saved inside %s/%s"%(str(filename),str(cur_dir),str(dir_path))
                #-------------------------- FILE is Saved -----------------------------------------------
                '''
                x = datetime.now()
                tm=str(x.strftime("%Y-%m-%d %H:%M:%S"))
                #print(tm)
                i=i+1
                #print("PDF NAME: ",pdfnm)
                # #print(x1)
                #sql = "insert into GBM_file_deatils_pkl_20220413 (PDF_year,File_Path,PDF_Name,M_No,Agenda_Tpc,Page_Start,Page_End,File_Upld_Tm) values (%s, %s, %s,%s, %s, %s,%s, %s)"
                sql = "insert into GBM_file_deatils_pkl_20220413 (PDF_year,File_Path,PDF_Name,M_No,Agenda_Tpc,Page_Start,Page_End,File_Upld_Tm) values (%s, %s, %s,%s, %s, %s,%s, %s)"
                #val = (year,path,s_name+".pdf", my_list[0], eval(my_list[1]).upper(), int(my_list[2]), int(my_list[3]),tm)
                val = (year,folder_name,filename,int( my_list[0]), eval(my_list[1]).upper(), int(my_list[2]), int(my_list[3]),tm)
                print("val:",val)
                cursor.execute(sql,val)
                mydb.commit()

                print("__________________ %d. Additional INSERT IS DONE _________________________"%i)
                
    # ---------------------------- Static Part Entry -------------------------------
    if request.method=='POST' and 'submit' in request.POST:
    #if request.method=='POST':
        print("*****************************************submit IS there ")
        x = datetime.now()
        tm=str(x.strftime("%Y-%m-%d %H:%M:%S"))
        #pdfnm=request.POST.get('filename')
        pdfnm=request.FILES['filename']
        filename=pdfnm
        mtn_no=request.POST.get('mtn_no')    
        print("pdfnm:",pdfnm)
        # print(type(pdfnm))
        # xpdfnm=str(pdfnm)
        name = str(pdfnm)[ :-4]
        y=''
        r_name=name[::-1]
        for x in r_name:
            if x== '\\':
                break
            print(x)
            y=y+x

        s_name=y[::-1]
        print(s_name)
        # x1=str(name)
        print(name)
        #path='./GB_Files/IBPS/GOVERNING_BOARD_MEETING'+'/'+ s_name
        year = request.POST.get('Years_1')

        #---------------------------- SAVE FILE -----------------------------------------------
        dir_path="GB_Files/IBPS/GOVERNING_BOARD_MEETING/%s"%str(mtn_no)
        #year = request.POST.get('year')
    
        print("dir_path:",dir_path) 
        print(len(tasks))
        print("Array Value : ",tasks)

        cur_dir=os.getcwd()
        folder_name='%s/%s'%(str(cur_dir),str(dir_path))

        if os.path.isdir(folder_name):
            pass
        else:
            os.mkdir(folder_name)


        file_path='%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename))
        
        print("file_path:",file_path)
        if os.path.isfile(file_path):
            print("File already Exists")
            message="File already Exists"
        else:
            with open('%s/%s/%s'%(str(cur_dir),str(dir_path),str(filename)), 'wb+') as destination:
                for chunk in filename.chunks():
                    destination.write(chunk)
        message="File %s is saved inside %s/%s"%(str(filename),str(cur_dir),str(dir_path))
        #-------------------------- FILE is Saved -----------------------------------------------

        print("Hello: ")
        #if request.POST.get('bal_mtn') !='' and request.POST.get('bal_sht0') !='' and request.POST.get('bal_sht1') !='':
        # if request.POST.get('mtn_no') !='' and request.POST.get('bal_sht0') !='' and request.POST.get('bal_sht1') !='':

        #     sql = "insert into GBM_file_deatils_pkl_20220413 (PDF_year,File_Path,PDF_Name,M_No,Agenda_Tpc,Page_Start,Page_End,File_Upld_Tm) values (%s, %s, %s,%s, %s, %s,%s, %s)"
        #     val = (request.POST.get('Years_1'),folder_name,s_name+".pdf", request.POST.get('mtn_no'),'BALANCE SHEETS', request.POST.get('bal_sht0'), request.POST.get('bal_sht1'),tm)
        #     cursor.execute(sql,val)
        #     print("__________________ BALANCE SHEETS INSERT IS DONE _________________________")


        # #if request.POST.get('chg_n_mem_mtn') !='' and request.POST.get('chg_n_mem0') !='' and request.POST.get('chg_n_mem1') !='':
        # if request.POST.get('mtn_no') !='' and request.POST.get('chg_n_mem0') !='' and request.POST.get('chg_n_mem1') !='':
        #     sql = "insert into GBM_file_deatils_pkl_20220413 (PDF_year,File_Path,PDF_Name,M_No,Agenda_Tpc,Page_Start,Page_End,File_Upld_Tm) values (%s, %s, %s,%s, %s, %s,%s, %s)"
        #     val = (request.POST.get('Years_1'),folder_name,s_name+".pdf", request.POST.get('mtn_no'),'CHANGE IN MEMBERSHIP', request.POST.get('chg_n_mem0'), request.POST.get('chg_n_mem1'),tm)
        #     cursor.execute(sql,val)
        #     print("__________________ CHANGE IN MEMBERSHIP INSERT IS DONE _________________________")

        # #if request.POST.get('pol_nd_stfrls_mtn') !='' and request.POST.get('pol_nd_stfrls0') !='' and request.POST.get('pol_nd_stfrls1') !='':
        # if request.POST.get('mtn_no') !='' and request.POST.get('pol_nd_stfrls0') !='' and request.POST.get('pol_nd_stfrls1') !='':
        #     sql = "insert into GBM_file_deatils_pkl_20220413 (PDF_year,File_Path,PDF_Name,M_No,Agenda_Tpc,Page_Start,Page_End,File_Upld_Tm) values (%s, %s, %s,%s, %s, %s,%s, %s)"
        #     val = (request.POST.get('Years_1'),folder_name,s_name+".pdf", request.POST.get('mtn_no'),'POLICIES AND STAFFRULES', request.POST.get('pol_nd_stfrls0'), request.POST.get('pol_nd_stfrls1'),tm)
        #     cursor.execute(sql,val)
        #     print("__________________ POLICIES AND STAFFRULES INSERT IS DONE _________________________")

        # #if request.POST.get('sac_pow_mtn') !='' and request.POST.get('sac_pow0') !='' and request.POST.get('sac_pow1') !='':
        # if request.POST.get('mtn_no') !='' and request.POST.get('sac_pow0') !='' and request.POST.get('sac_pow1') !='':
        #     sql = "insert into GBM_file_deatils_pkl_20220413 (PDF_year,File_Path,PDF_Name,M_No,Agenda_Tpc,Page_Start,Page_End,File_Upld_Tm) values (%s, %s, %s,%s, %s, %s,%s, %s)"
        #     val = (request.POST.get('Years_1'),folder_name,s_name+".pdf", request.POST.get('mtn_no'),'SANCTIONING POWER', request.POST.get('sac_pow0'), request.POST.get('sac_pow1'),tm)
        #     cursor.execute(sql,val)
        #     print("__________________ SANCTIONING POWER INSERT IS DONE _________________________")

        # #if request.POST.get('chq_sign_pow_mtn') !='' and request.POST.get('chq_sign_pow0') !='' and request.POST.get('chq_sign_pow1') !='':
        # if request.POST.get('mtn_no') !='' and request.POST.get('chq_sign_pow0') !='' and request.POST.get('chq_sign_pow1') !='':
        #     sql = "insert into GBM_file_deatils_pkl_20220413 (PDF_year,File_Path,PDF_Name,M_No,Agenda_Tpc,Page_Start,Page_End,File_Upld_Tm) values (%s, %s, %s,%s, %s, %s,%s, %s)"
        #     val = (request.POST.get('Years_1'),folder_name,s_name+".pdf", request.POST.get('mtn_no'),'CHEQUE SIGNING POWER', request.POST.get('chq_sign_pow0'), request.POST.get('chq_sign_pow1'),tm)
        #     cursor.execute(sql,val)
        #     print("__________________ CHEQUE SIGNING POWER INSERT IS DONE _________________________")

        # print("__________________ Basic INSERT IS DONE _________________________")

        # mydb.commit()
    # ---------------------------- Static Part Entry -------------------------------
    cursor.close()
            # messages.success(request,'Record Saved Successfully.....!')

        # return redirect(showpdfdata)

        # else:
            # print("no insert")
    return redirect(showpdfdata)

                    
def showpdfdata(request,msg=""):

        pdf_all=[]
        #agenda_list=['check<input style="display:none;" type="text" id="descName" name="descName"  class=" w-2/5  p-2 outline-none hover:bg-indigo-100 " placeholder="Please Do Mention Agenda Topic" />']
        agenda_list=[]

        for p in showpdf.objects.all():
            # print(p)
            pdf_all.append([p.pdf_Name, p.pdf_key, p.pdf_year, p.M_No, p.Agenda_Tpc, str( p.Page_Start), str(p.Page_End)])


        # traverse for all elements
        for x  in showpdf.objects.all():
            # check if exists in unique_list or not
            if x.Agenda_Tpc not in agenda_list:
                agenda_list.append(x.Agenda_Tpc)

        # print(agenda_list)
        context={'pdf':pdf_all, 'agenda_list': agenda_list, 'msg': msg}

        return render(request,"load_pdf_details.html",context=context)

    ######### PDF File ############

        









@csrf_exempt
def showpdfkey(request,msg=""):
    if request.method=='POST':
        request.POST.get('filename')
        keys = showpdf.objects.all()
        serializer = serializer(keys, many= True)
    return Response(serializer.data)

# Create your views here.
# def index(request):
#     return render(request,"index.html")

# ######### Employee ############
# def showempnames(request):
#                 ## results=showemp.objects.all()
#                 ## pdf_key=showemp.objects.filter(pdfname='').values()
#                 ## empage=showemp.objects.filter(empname='xyz').values()
#     empage=showemp.objects.all()
#     emp_name=[]
#     emp_age=[]
#     emp_id=[]
#     for e in showemp.objects.all():
#         print("Column name: ",e.empage)
#         emp_name.append(e.empname)
#         emp_age.append(e.empage)
#         emp_id.append(e.id)
#     print(emp_name)
#     print(emp_age)
#     print(emp_id)
#     # pdf_key=showemp.objects.all()
#     # return render(request,"load_pdf_details.html",{"showemp":empage})
#     return render(request,"load_pdf_details.html",{"showemp_name":emp_name,"showemp_age":emp_age,"showemp_id":emp_id})


# ######### Employee ############










######### PDF File ############









######### PDF File ############



######### PDF File Report Generate page ############


def reportpdfdata(request):

        pdf_all=[]
        agenda_list=[]
        

        for p in showpdf.objects.all():
            
            pdf_all.append([p.pdf_Name, p.pdf_key, p.pdf_year, p.M_No, p.Agenda_Tpc, str( p.Page_Start), str(p.Page_End)])
               
  
        for x  in showpdf.objects.all():
            
            if x.Agenda_Tpc not in agenda_list:
                agenda_list.append(x.Agenda_Tpc)

        
        return render(request,"report_pdf_details.html",context={'pdf':pdf_all, 'agenda_list': agenda_list})




######### PDF File Report Generate page ############



from asyncio.windows_events import NULL
from queue import Empty
from django.shortcuts import render, redirect
from django.contrib.sessions.models import Session
from django.utils import timezone

from django.http import JsonResponse
from django.http import HttpResponse, HttpResponseRedirect
# from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache

from django.contrib.auth.decorators import login_required
from django.contrib.auth import SESSION_KEY
from django.contrib.sessions.models import Session
from django.contrib.auth.decorators import login_required
import pymysql
import json

from django.contrib.auth.models import AnonymousUser

# Create your views here.

def home(request):
    # mydb = pymysql.connect(
    #     host="127.0.0.1",
    #     user="root",
    #     password="Pralay@123",
    #     db="Testing_Ajax"
    #     )

    # cursor = mydb.cursor()
    # sql = "call  GetAllUsers();"
    
    # cursor.execute(sql)
    # stud1 =cursor.fetchall()
    # cursor.close()
    

    # print(stud1)
    print("HELLO====================")
    stud=[]
    Jsonobject=[]
    # for id in stud1:

    #     print(id)
    #     stud.append([id[0], id[1], id[2], id[3]])
    #     object={"id": id[0],"name": id[1],"email": id[2],"password": id[3]}
    #     Jsonobject.append(object)
    # print('Stud',object)
    # JSON string
    # a = '{"name": "Bob", "languages": "English"}'
    # a=''
    
    # # deserializes into dict 
    # # and returns dict.
    # y = json.loads('E:\Pythonjango\MySql_Procedure\Json_Data\User.json')
    
    # print("JSON string = ", y)
    # print()
    
    
    
    # # JSON file
    # f = open ('data.json', "r")
    
    # # Reading from file
    # data = json.loads(f.read())
    
    # # Iterating through the json
    # # list
    # for i in data['emp_details']:
    #     print(i)
    
    # # Closing file
    # f.close()
    a=[]
    # Opening JSON file
    f = open('E:\Pythonjango\MySql_Procedure\Json_Data\\User.json')
    
    # returns JSON object as 
    # a dictionary
    data = json.load(f)
    print("DATA:", data)
    
    # Iterating through the json
    # list
    for i in data['Usersss']:
        print(i)
        a.append(i)
    
    # Closing file
    f.close()
    print(a)

    return render(request, 'E:\Pythonjango\MySql_Procedure\API_SELECT\\templates\home.html',context={"data": a})

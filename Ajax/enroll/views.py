from asyncio.windows_events import NULL
from queue import Empty
from django.shortcuts import render, redirect
from django.contrib.sessions.models import Session
from django.utils import timezone
from .forms import StudentRegistration
from .models import User
from .models import LogInUser
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


from django.contrib.auth.models import AnonymousUser

from django.test.utils import override_settings
# # --------------------------------------------------------------------------
# # Query all non-expired sessions
# # use timezone.now() instead of datetime.now() in latest versions of Django
# sessions = Session.objects.filter(expire_date__gte=timezone.now())
# uid_list = []
# 
##############################################################################
# # Build a list of user ids from that query
# for session in sessions:
#     data = session.get_decoded()
#     uid_list.append(data.get('_auth_user_id', None))
#
# for user in table
#     if user not in uid_list
#         user.remove_from_table()
# # --------------------------------------------------------------------------
# stud = User.objects.all()
# uname = request.POST['uname']
# psw = request.POST['psw']
# check_user = User.objects.filter(name=uname, password=psw)
# if check_user and request.session['user']== uname:
# -----------------------------------------------------------------------------


    




def login_excluded(redirect_to):
    """ This decorator kicks authenticated users out of a view """ 
    def _method_wrapper(view_method):
        def _arguments_wrapper(request, *args, **kwargs):
            if request.user.is_authenticated:
                return redirect(redirect_to) 
            return view_method(request, *args, **kwargs)
        return _arguments_wrapper
    return _method_wrapper

@never_cache
def login(request):
    form = StudentRegistration()
    # print(form)
    mydb = pymysql.connect(
    host="127.0.0.1",
    user="root",
    password="Pralay@123",
    db="Testing_Ajax"
    )

    cursor = mydb.cursor()
    sql = "select * from  User;"
    
    cursor.execute(sql)
    stud =cursor.fetchall()
    cursor.close()
    # stud = User.objects.all()
    if request.method == "POST" :
        uname = request.POST['uname']
        psw = request.POST['psw']
        # form = StudentRegistration()
        mydb = pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="Pralay@123",
        db="Testing_Ajax"
        )

        cursor = mydb.cursor()
        sql = "select * from  User where name=%s and password=%s;"
        val=(uname,psw)
        cursor.execute(sql,val)
        stud1 =cursor.fetchall()
        cursor.close()

        print("111111111111111111",len(stud1))

        stud=[]
        Jsonobject=[]
        for id in stud1:
            id_1 = id[0]
            print("2222222222222222222222",len(id))
        if len(stud1) != 0:    
            request.session['user'] = uname

            print("New Session:",request.session['user'])
            print("Session Details: ",request.session['user'])
            return redirect(home)


        else:
            return HttpResponse('Please enter valid Username or Password.')

    return render(request, 'enroll/login.html', {'form': form, 'stu':stud} )


@never_cache
def logout(request):
    try:
        print("Session:",request.session['user'])
        del request.session['user']

    except:

        pass
    
    print("Session-----------:",request.session)
    request.session['user'] = 'AnonymousUser'
    return redirect(login) 

    
    
# @login_required
@never_cache
@override_settings(ALLOW_ANONYMOUS_ACCESS=False)
def home(request):

    if request.session['user'] != 'AnonymousUser':
        form = StudentRegistration()
        mydb = pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="Pralay@123",
        db="Testing_Ajax"
        )

        cursor = mydb.cursor()
        sql = "select * from  User;"
        
        cursor.execute(sql)
        stud1 =cursor.fetchall()
        cursor.close()

        print(stud1)

        stud=[]
        Jsonobject=[]
        for id in stud1:

            print(id)
            stud.append([id[0], id[1], id[2], id[3]])
            object={"id": id[0],"name": id[1],"email": id[2],"password": id[3]}
            Jsonobject.append(object)
        print('Stud',object)

        
        return render(request, 'enroll/home.html', {'form': form, 'stu':Jsonobject} )
    else:    
        return redirect(login)     


# @csrf_exempt
@never_cache
def save_data(request):

    if request.method == "POST":
        form = StudentRegistration(request.POST)
        if form.is_valid():
            mydb = pymysql.connect(
            host="127.0.0.1",
            user="root",
            password="Pralay@123",
            db="Testing_Ajax"
            )
            name = request.POST['name']
            email = request.POST['email']
            password = request.POST['password']
            sid = request.POST['stuid']

            print("----------------------------------------")
            print("SID",sid)
            if sid == '':
                print("yyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
                cursor = mydb.cursor()
                sql = "insert into  User(name,email,password) values(%s,%s,%s);"
                val=(name,email,password)
                cursor.execute(sql,val)
                mydb.commit()
 
                sql = "select * from  User;"
            
                cursor.execute(sql)
                stud1 =cursor.fetchall()

            else:
                cursor = mydb.cursor()
                sql = "update  User set name = %s, email = %s, password = %s where id =%s;"
                val=(name,email,password,sid)
                cursor.execute(sql,val)
                mydb.commit()

                sql = "select * from  User;"
            
                cursor.execute(sql)
                stud1 =cursor.fetchall()
            cursor.close()
            


            stud=[]
            Jsonobject=[]
            for id in stud1:

                print(id)
                stud.append([id[0], id[1], id[2], id[3]])
                object={"id": id[0],"name": id[1],"email": id[2],"password": id[3]}
                Jsonobject.append(object)

            return JsonResponse( {'status': 'Save', 'student_data':Jsonobject})
        else:
            return JsonResponse({'status': 0})  

@never_cache

def delete_data(request):
    if request.method == 'POST':
        id = request.POST.get("sid")
        
        print(id)
        mydb = pymysql.connect(
            host="127.0.0.1",
            user="root",
            password="Pralay@123",
            db="Testing_Ajax"
            )

        cursor = mydb.cursor()
        sql = "delete from  User where id =%s;"
        val=(id)
        cursor.execute(sql,val)
        mydb.commit()

        return JsonResponse({'status':1})
    else:
        return JsonResponse({'status':0})

@never_cache

def edit_data(request):
    if request.method == 'POST':
        id = request.POST.get("sid")

        print(id)
        mydb = pymysql.connect(
            host="127.0.0.1",
            user="root",
            password="Pralay@123",
            db="Testing_Ajax"
            )
        cursor = mydb.cursor()

        sql = "select * from  User where id=%s;"
        val=(id)
        cursor.execute(sql,val)
        stud1 =cursor.fetchall()
        cursor.close()

        stud=[]
        Jsonobject=[]
        for id in stud1:

            print(id)
            stud.append([id[0], id[1], id[2], id[3]])
            object={"id": id[0],"name": id[1],"email": id[2],"password": id[3]}
            Jsonobject.append(object)

            student_data = {"id": id[0],"name": id[1],"email": id[2],"password": id[3]}
        
        return JsonResponse(student_data)


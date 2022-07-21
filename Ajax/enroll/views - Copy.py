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

from django.contrib.auth.models import AnonymousUser

from django.test.utils import override_settings
# # --------------------------------------------------------------------------
# # Query all non-expired sessions
# # use timezone.now() instead of datetime.now() in latest versions of Django
# sessions = Session.objects.filter(expire_date__gte=timezone.now())
# uid_list = []

# # Build a list of user ids from that query
# for session in sessions:
#     data = session.get_decoded()
#     uid_list.append(data.get('_auth_user_id', None))

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
    
    
    stud = User.objects.all()
    if request.method == "POST" :
        uname = request.POST['uname']
        psw = request.POST['psw']
        request.session['user'] = uname

        print("New Session:",request.session['user'])

        # ------------SESSION--------------------------

        # ------------SESSION--------------------------
        # print("Session:",request.session['user'])
        #-------------- one way -----------------
        # if(uname == 'Pralay' and psw == 'Pralay@123'):
        #     return render(request, 'enroll/home.html', {'form': form, 'stu':stud} )
        # else:    
        #     return render(request, 'enroll/login.html', {'form': form, 'stu':stud} )
        # -------------- second way -----------------

        check_user = User.objects.filter(name=uname, password=psw)
        if check_user and  request.session['user']== uname:
            print("Session Details: ",request.session['user'])
            # request.session['user'] = uname
            # print("Session:",request.session['user'])
            # return render(request, 'enroll/home.html', {'form': form, 'stu':stud} )
            return redirect(home)
            # return (save_data)
        else:
            return HttpResponse('Please enter valid Username or Password.')

    return render(request, 'enroll/login.html', {'form': form, 'stu':stud} )


@never_cache
def logout(request):
    try:
        print("Session:",request.session['user'])
        del request.session['user']
        # print("Session:",request.session['user'])
    except:
        # print("Session:",request.session['user'])
        pass
    
    print("Session-----------:",request.session)
    request.session['user'] = 'AnonymousUser'
    return redirect(login) 
    # return HttpResponse("You're logged out.")   
    
    
# @login_required
@never_cache
@override_settings(ALLOW_ANONYMOUS_ACCESS=False)
def home(request):
    # print("New Session Home:",request.session['user'])
    
    if request.session['user'] != 'AnonymousUser':
    # print("Session:",request.session['user'])
        print('AnonymousUser',request.user)
        print('AnonymousUser',request.session['user'])
        form = StudentRegistration()
        # print(form)
        stud = User.objects.all()
        # stud = User.objects.all()
        # print('Stud',stud)
        # uname = request.POST['uname']
        # psw = request.POST['psw']
        # check_user = User.objects.filter(name=uname, password=psw)
        
        # if request.session['user'] == 'Pralay' :
        #     print("request.user--->",request.session)
        #     return render(request, 'enroll/home.html', {'form': form, 'stu':stud} )
        # else:
        #     print("request.user>>>>>>>>>>>>>",request.session)
        #     return render(request, 'enroll/login.html', {'form': form, 'stu':stud} )
        
        return render(request, 'enroll/home.html', {'form': form, 'stu':stud} )
    else:    
        return redirect(login)     


# @csrf_exempt
@never_cache
def save_data(request):

    if request.method == "POST":
        form = StudentRegistration(request.POST)
        if form.is_valid():
            name = request.POST['name']
            email = request.POST['email']
            password = request.POST['password']
            sid = request.POST['stuid']
            if sid == '':
                usr = User(name = name, email = email, password=password)
            else:
                usr = User(id=sid, name = name, email = email, password=password)
            usr.save()
            stud = User.objects.values()
            # print(stud)
            student_data = list(stud)
            return JsonResponse( {'status': 'Save', 'student_data':student_data})
        else:
            return JsonResponse({'status': 0})  

@never_cache

def delete_data(request):
    if request.method == 'POST':
        id = request.POST.get("sid")
        print(id)
        pi = User.objects.get(pk=id)
        pi.delete()
        return JsonResponse({'status':1})
    else:
        return JsonResponse({'status':0})

@never_cache

def edit_data(request):
    if request.method == 'POST':
        id = request.POST.get("sid")
        print(id)
        pi = User.objects.get(pk=id)
        student = User.objects.get(pk=id)
        student_data = {"id": student.id, "name": student.name, "email": student.email, "password": student.password}
        
        return JsonResponse(student_data)


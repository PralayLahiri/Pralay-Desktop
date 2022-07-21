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


from django.contrib.auth.models import AnonymousUser

# Create your views here.

def home(request):
    return render(request, 'enroll/home.html')

from django.shortcuts import render

# Create your views here.
from Test.models import StudentRecord
from Test.utils import render_to_pdf
import pymysql


def ResultList(request):
    template_name = "pdf.html"
    # records = StudentRecord.objects.all().order_by("roll_no")
    mydb = pymysql.connect(
            host="127.0.0.1",
            user="root",
            password="Pralay@123",
            db="testing_visualization"
            )
    cursor = mydb.cursor()
    sql = "select * from test_studentrecord order by roll_no;"
    # val=(name,email,password)
    cursor.execute(sql)     
    records_1 =cursor.fetchall()   
    print("SQL- type------>",type(records_1))
    print("SQL------->",records_1)
    records=[]
    for id in records_1:

                print(id)
                # stud.append([id[0], id[1], id[2], id[3]])
                object={"id": id[0],"name": id[1],"roll_no": id[2],"score": id[3]}
                records.append(object)

    return render_to_pdf(
        template_name,
        {
            "record": records,
        },
    )
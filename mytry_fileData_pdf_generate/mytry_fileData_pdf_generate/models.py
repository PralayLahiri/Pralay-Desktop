from django.db import models
from django.db import connections
# import pymysql as MySQLdb
# Create your models here.

# class showemp(models.Model):
#     # empname=models.IntegerField()
#     # empage=models.IntegerField()
#     # id=models.IntegerField(primary_key=True)
    

#     class Meta:
#         db_table="Employee"



class showpdf(models.Model):
    pdf_Name=models.IntegerField()
    pdf_key=models.IntegerField(primary_key=True)
    pdf_year=models.IntegerField()
    M_No=models.IntegerField()
    Agenda_Tpc=models.IntegerField()
    Page_Start  =models.IntegerField() 
    Page_End    =models.IntegerField()
    # C_Page_Start  =models.IntegerField()
    # C_Page_End    =models.IntegerField()
    # P_Page_Start  =models.IntegerField()
    # P_Page_End    =models.IntegerField()
    # S_Page_Start  =models.IntegerField()
    # S_Page_End    =models.IntegerField()
    # CS_Page_Start =models.IntegerField()
    # CS_Page_End   =models.IntegerField()

    class Meta:
        db_table="GBM_file_deatils_pkl_20220413"
    
    def __repr__(self) -> str:
        return map(str, [self.pdf_key, self.pdf_Name, self.pdf_year,self.M_No, self.Agenda_Tpc,  self.Page_Start, self.Page_End])
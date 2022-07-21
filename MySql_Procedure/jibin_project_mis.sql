BULK INSERT csv_data_import
FROM 'C:\Users\user\Downloads\New folder (3)\procedure_mysql_django-main\sample_csv.csv'
WITH
(
    FIRSTROW = 5, -- as 1st one is header
    FIELDTERMINATOR = ',',  --CSV field delimiter
    ROWTERMINATOR = '\n',   --Use to shift the control to next row
    LASTROW = 21
)

BULK INSERT import_cs_total_data
FROM 'C:\Users\user\Downloads\New folder (3)\procedure_mysql_django-main\sample_csv.csv'
WITH
(
    FIRSTROW = 25, -- as 1st one is header
    FIELDTERMINATOR = ',',  --CSV field delimiter
    ROWTERMINATOR = '\n',   --Use to shift the control to next row
    LASTROW = 27
)

select * from csv_data_import
select * from import_cs_total_data

truncate table csv_data_import
truncate table import_cs_total_data

create table csv_data_import
(
type varchar(100),
type_value varchar(100),
column_1 varchar(100),
column_2 varchar(100),
column_3 varchar(100),
column_4 varchar(100),
column_5 varchar(100),
column_6 varchar(100),
column_7 varchar(100),
column_8 varchar(100),
column_9 varchar(100),
column_10 varchar(100),
column_11 varchar(100)
)

create table import_cs_total_data
(
column_1 varchar(100),
column_2 varchar(100),
column_3 varchar(100),
column_4 varchar(100),
column_5 varchar(100),
column_6 varchar(100),
column_7 varchar(100),
column_8 varchar(100),
column_9 varchar(100)
)


exec cv_split_load_different_table;

create procedure cv_split_load_different_table
as

BULK INSERT csv_data_import
FROM 'C:\Users\user\Downloads\New folder (3)\procedure_mysql_django-main\sample_csv.csv'
WITH
(
    FIRSTROW = 5, -- as 1st one is header
    FIELDTERMINATOR = ',',  --CSV field delimiter
    ROWTERMINATOR = '\n',   --Use to shift the control to next row
    LASTROW = 21
)

BULK INSERT import_cs_total_data
FROM 'C:\Users\user\Downloads\New folder (3)\procedure_mysql_django-main\sample_csv.csv'
WITH
(
    FIRSTROW = 25, -- as 1st one is header
    FIELDTERMINATOR = ',',  --CSV field delimiter
    ROWTERMINATOR = '\n',   --Use to shift the control to next row
    LASTROW = 27
)

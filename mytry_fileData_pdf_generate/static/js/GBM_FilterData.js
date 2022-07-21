
var AllDataForFilter=[]
// AllDataForFilter = showemp

function InitiateLists(pdfData){
    pdfData.forEach(function(currentValue, index){
    var obj={
        "MeetingNo":pdfData[index][3],
        "Agenda":pdfData[index][4],
        "YearText": pdfData[index][2].toString()+"-"+(parseInt(pdfData[index][2])+1).toString().slice(-2),
        "YearVal": pdfData[index][2].toString()
    }
    AllDataForFilter.push(obj);
    });
}

function GenerateAgendaList(d){
    $("#txtName_d option").remove();
    var datalist="";
    if(d!=undefined && d!=null && d.length>0){
        if(d.length==1){
            datalist=datalist+'<option class="w-full rounded w-full  p-2 outline-none hover:bg-indigo-100 " value="'+d[0].Agenda.toUpperCase()+'" selected>'
        }else{
            datalist=datalist+'<option class="w-full rounded w-full  p-2 outline-none hover:bg-indigo-100 " value="All">';
            for (let index = 0; index < d.length; index++) {
                datalist=datalist+'<option class="w-full rounded w-full  p-2 outline-none hover:bg-indigo-100 " value="'+d[index].Agenda.toUpperCase()+'">'
            }
        }
    }
    $("#txtName_d").html(datalist);
}

function GenerateMeetingNoList(d){
    $("#mtng_1_d option").remove();
    var datalist="";
    if(d!=undefined && d!=null && d.length>0){
        if(d.length==1){
            datalist=datalist+'<option class="w-full rounded w-full  p-2 outline-none hover:bg-indigo-100 " value="'+d[0].MeetingNo+'" selected>'
        }else{
            datalist=datalist+'<option class="w-full rounded w-full  p-2 outline-none hover:bg-indigo-100 " value="All">';
            for (let index = 0; index < d.length; index++) {
                datalist=datalist+'<option class="w-full rounded w-full  p-2 outline-none hover:bg-indigo-100 " value="'+d[index].MeetingNo+'">'
            }
        }
    }
    $("#mtng_1_d").html(datalist);
}   

function GenerateToYearList(d){
    $("#Years_2 option").remove();
    var datalist="";
    if(d!=undefined && d!=null && d.length>0){
        if(d.length==1){
            datalist=datalist+'<option value="'+d[0].YearText+'" selected>'+d[index].YearVal+'</option>'
        }else{
            datalist=datalist+'<option selected="selected" class="h-1/3" value="a2" name="Years">To Year</option>';
            for (let index = 0; index < d.length; index++) {
                datalist=datalist+'<option value="'+d[index].YearText+'">'+d[index].YearVal+'</option>'
            }
        }
    }
    $("#Years_2").html(datalist);
}

function GenerateFromYearList(d){
    $("#Years_1 option").remove();
    var datalist="";
    if(d!=undefined && d!=null && d.length>0){
        if(d.length==1){
            datalist=datalist+'<option value="'+d[0].YearText+'" selected>'+d[index].YearVal+'</option>'
        }else{
            datalist=datalist+'<option selected="selected" class="h-1/3" value="a1" name="Years">From Year</option>';
            for (let index = 0; index < d.length; index++) {
                datalist=datalist+'<option value="'+d[index].YearText+'">'+d[index].YearVal+'</option>'
            }
        }
    }
    $("#Years_1").html(datalist);
}



$(document).ready(function(){
    GenerateAgendaList(AllDataForFilter);
    GenerateMeetingNoList(AllDataForFilter);
    GenerateFromYearList(AllDataForFilter);
    GenerateToYearList(AllDataForFilter);

    $(document).on('keyup','#agnda_2',function(){
      var inputAgenda=$(this).val();
      var newFilteredData =[];
      if(inputAgenda!=undefined && inputAgenda!=null&&inputAgenda!=""){
        newFilteredData = AllDataForFilter.filter(
           function (el){
         return el.Agenda ==inputAgenda; }
       );
   }else{
    newFilteredData=AllDataForFilter;
   }
       GenerateAgendaList(newFilteredData);
       GenerateMeetingNoList(newFilteredData);
       GenerateFromYearList(newFilteredData);
       GenerateToYearList(newFilteredData);

    });
    $(document).on('keyup','#mtng_2',function(){
        var inputMeetingNo=$(this).val();
        var newFilteredData =[];
        if(inputMeetingNo!=undefined && inputMeetingNo!=null&&inputMeetingNo!=""){
            newFilteredData = AllDataForFilter.filter(
                function (el){
              return el.MeetingNo ==inputMeetingNo; }
            );
     }else{
      newFilteredData=AllDataForFilter;
     }
         GenerateAgendaList(newFilteredData);
         GenerateMeetingNoList(newFilteredData);
         GenerateFromYearList(newFilteredData);
         GenerateToYearList(newFilteredData);
  
    });

    $(document).on('change','#Years_1',function(){
        var inputFromYear= Helper.getDropdownValue("#Years_1");
        var newFilteredData =[];
        if(inputFromYear!=undefined && inputFromYear!=null&&inputFromYear!="a1"){
            newFilteredData = AllDataForFilter.filter(
                function (el){
              return el.YearVal ==inputFromYear; }
            );
     }else{
      newFilteredData=AllDataForFilter;
     }
         GenerateAgendaList(newFilteredData);
         GenerateMeetingNoList(newFilteredData);
         GenerateFromYearList(newFilteredData);
         GenerateToYearList(newFilteredData);
  
    });

    $(document).on('change','#Years_2',function(){
        var inputToYear= Helper.getDropdownValue("#Years_2");
        var newFilteredData =[];
        if(inputToYear!=undefined && inputToYear!=null&&inputToYear!="a2"){
            newFilteredData = AllDataForFilter.filter(
                function (el){
              return el.YearVal ==inputToYear; }
            );
     }else{
      newFilteredData=AllDataForFilter;
     }
         GenerateAgendaList(newFilteredData);
         GenerateMeetingNoList(newFilteredData);
         GenerateFromYearList(newFilteredData);
         GenerateToYearList(newFilteredData);
  
    });

});


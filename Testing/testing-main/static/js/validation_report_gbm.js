
function fileValidation_to_agnt_select(pdf_data) {
        
  const arr = [];
  var a = pdf_data;
  var array1=[]
  var array_agnt = []
  var array_year1= []
  var array_year2= []


  var GlobalobjResult={
    "FromYears":[],
    "MeetingNo":[],
    "agendatopic":[]
  }



  
  var agnt_2 = document.getElementById("agnda_2").value;
  
  var agnt_1 = document.getElementById("agnda_1").value;
  var year_1 = document.getElementById("Years_1").value;
  var year_2 = document.getElementById("Years_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;
  var mtng_2 = document.getElementById("mtng_2").value;
  // document.getElementById("mtng_2").value='';

  // document.getElementById("mtng_2").style.display = 'none';
  // document.getElementById('mtng_2').disabled = true; 
  // document.getElementById("mtng_1").style.display = '';
  // document.getElementById("mtng_1").disabled = false;
  


  // console.log('Agenda--',agnt_2,'--Agenda');
  // ///changed------------------
  if(agnt_2 != '' && mtng_1 != 'ALL' ){
    document.getElementById("mtng_2").style.display = 'none';
    document.getElementById('mtng_2').disabled = true; 
    document.getElementById("mtng_1").style.display = '';
    document.getElementById("mtng_1").disabled = false; 

    //alert("Actual Agenda New")
    //alert(mtng_2);

              //---------------------working ----------------------
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              let element = document.getElementById("mtng_1");
                while (element.firstChild) {
                  element.removeChild(element.firstChild);
                }

              
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode("ALL");
                node.appendChild(textnode);
                node.value="ALL";
                array1.push("ALL");
                node.name=1;
                //node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
              
              console.log("--agenda--",objResult);   
              var i=3;
                for (x in a){
                            d=a[x]
                            yd=d[2]
                            md=d[3]
                            agnda=d[4]
                            kd=d[1]
                            yd1=d[5]
                            yd2=d[6]
       
                          if( agnt_2 == agnda){
                              node = document.createElement("Option");
                              document.getElementById("mtng_1").appendChild(node);
                              textnode = document.createTextNode(md);
                              node.appendChild(textnode);
                              node.value=md
                              array1.push(md);
                              node.name=1;
                              //node.selected = true;
                              document.getElementById("mtng_1").appendChild(node);

                            
                              if (!objResult.FromYears.includes(yd) ) {
                                objResult.FromYears.push(yd);
                              }
                            
                              //objResult.FromYears.push(yd);
                              if (!objResult.MeetingNo.includes(md) ) {
                              objResult.MeetingNo.push(md);
                              }
                              if (!objResult.agendatopic.includes(agnda) ) {
                              objResult.agendatopic.push(agnda);
                              }
    
    
                              console.log("--agenda--",objResult);
                                   
                          } 
                         i++;
    
                  }
    
                  //--------------------------- from year --------------------------------
                    //debugger;
                    //alert(year_1);
                    if(year_1 == 'a1'){
                      if(objResult.FromYears.length>0){
                        $("#Years_1").html("");
                        var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                          Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                          //
                        }
                        $("#Years_1").html(Options);
    
                      }else{
                        $("#Years_1").html("");
    
                      }
                  }
                  if(year_1 != 'a1'){
                    if(objResult.FromYears.length>0){
                      $("#Years_1").html("");
                      var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                        if(objResult.FromYears[index] != year_1){
                          Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                          }//
                          if(objResult.FromYears[index] == year_1){
                            Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }
                      }
                      $("#Years_1").html(Options);
    
                    }else{
                      $("#Years_1").html("");
    
                    }
                }
                  ///----------------------------- from year ------------------------------
    
                  ///------------------------------ to year ----------------------------
                  //debugger;
                  //alert(year_2);
                  if(year_2 == 'a2'){
                        if(objResult.FromYears.length>0){
                          $("#Years_2").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            //
                          }
                          $("#Years_2").html(Options);
    
                        }else{
                          $("#Years_2").html("");
    
                        }
                      }
    
    
                      if(year_2 != 'a2'){
                        if(objResult.FromYears.length>0){
                          $("#Years_2").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            if(objResult.FromYears[index] != year_2){
                              Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }//
                              if(objResult.FromYears[index] == year_2){
                                Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                }
                          }
                          $("#Years_2").html(Options);
    
                        }else{
                          $("#Years_2").html("");
    
                        }
                      }
                  ///------------------------------ to year ----------------------------
    
        //---------------------working ----------------------

  }

  if(agnt_2 != '' && mtng_2 == '' ){
    document.getElementById("mtng_2").style.display = 'none';
    document.getElementById('mtng_2').disabled = true; 
    document.getElementById("mtng_1").style.display = '';
    document.getElementById("mtng_1").disabled = false; 

    //alert("Actual Agenda New")
    //alert(mtng_2);

              //---------------------working ----------------------
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }

              let element = document.getElementById("mtng_1");
              while (element.firstChild) {
                element.removeChild(element.firstChild);
              }

              
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode("ALL");
                node.appendChild(textnode);
                node.value="ALL";
                array1.push("ALL");
                node.name=1;
                //node.selected = true;
                document.getElementById("mtng_1").appendChild(node);

              
              

              console.log("--agenda--",objResult);   
              var i=3;
                for (x in a){
                            d=a[x]
                            yd=d[2]
                            md=d[3]
                            agnda=d[4]
                            kd=d[1]
                            yd1=d[5]
                            yd2=d[6]
       
                          if( agnt_2 == agnda){
                              node = document.createElement("Option");
                              document.getElementById("mtng_1").appendChild(node);
                              textnode = document.createTextNode(md);
                              node.appendChild(textnode);
                              node.value=md
                              array1.push(md);
                              node.name=1;
                              //node.selected = true;
                              document.getElementById("mtng_1").appendChild(node);

                            
                              if (!objResult.FromYears.includes(yd) ) {
                                objResult.FromYears.push(yd);
                              }
                            
                              //objResult.FromYears.push(yd);
                              if (!objResult.MeetingNo.includes(md) ) {
                              objResult.MeetingNo.push(md);
                              }
                              if (!objResult.agendatopic.includes(agnda) ) {
                              objResult.agendatopic.push(agnda);
                              }
    
    
                              console.log("--agenda--",objResult);
                                   
                          } 
                         i++;
    
                  }
    
                  //--------------------------- from year --------------------------------
                    //debugger;
                    //alert(year_1);
                    if(year_1 == 'a1'){
                      if(objResult.FromYears.length>0){
                        $("#Years_1").html("");
                        var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                          Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                          //
                        }
                        $("#Years_1").html(Options);
    
                      }else{
                        $("#Years_1").html("");
    
                      }
                  }
                  if(year_1 != 'a1'){
                    if(objResult.FromYears.length>0){
                      $("#Years_1").html("");
                      var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                        if(objResult.FromYears[index] != year_1){
                          Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                          }//
                          if(objResult.FromYears[index] == year_1){
                            Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }
                      }
                      $("#Years_1").html(Options);
    
                    }else{
                      $("#Years_1").html("");
    
                    }
                }
                  ///----------------------------- from year ------------------------------
    
                  ///------------------------------ to year ----------------------------
                  //debugger;
                  //alert(year_2);
                  if(year_2 == 'a2'){
                        if(objResult.FromYears.length>0){
                          $("#Years_2").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            //
                          }
                          $("#Years_2").html(Options);
    
                        }else{
                          $("#Years_2").html("");
    
                        }
                      }
    
    
                      if(year_2 != 'a2'){
                        if(objResult.FromYears.length>0){
                          $("#Years_2").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            if(objResult.FromYears[index] != year_2){
                              Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }//
                              if(objResult.FromYears[index] == year_2){
                                Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                }
                          }
                          $("#Years_2").html(Options);
    
                        }else{
                          $("#Years_2").html("");
    
                        }
                      }
                  ///------------------------------ to year ----------------------------
    
        //---------------------working ----------------------

  }
    
  

  if(agnt_1 != '' && agnt_1 != 'ALL'  && mtng_2 != ''){
      //alert("Actual Agenda New New");
      //alert(mtng_2);

                //---------------------working ----------------------
                var objResult={
                  "FromYears":[],
                  "MeetingNo":[],
                  "agendatopic":[]
                }
                // let element = document.getElementById("mtng_1");
                // while (element.firstChild) {
                //   element.removeChild(element.firstChild);
                // }
               

                console.log("--agenda--",objResult);   
                var i=3;
                for (x in a){
                              d=a[x]
                              yd=d[2]
                              md=d[3]
                              agnda=d[4]
                              kd=d[1]
                              yd1=d[5]
                              yd2=d[6]
         
                            if( agnt_1 == agnda && mtng_2 == md){
                                
                              
                                if (!objResult.FromYears.includes(yd) ) {
                                  objResult.FromYears.push(yd);
                                }
                              
                                //objResult.FromYears.push(yd);
                                if (!objResult.MeetingNo.includes(md) ) {
                                objResult.MeetingNo.push(md);
                                }
                                if (!objResult.agendatopic.includes(agnda) ) {
                                objResult.agendatopic.push(agnda);
                                }
      
      
                                console.log("--agenda--",objResult);
                                     
                            } 
                           i++;
      
                    }
      
                    //--------------------------- from year --------------------------------
                      //debugger;
                      //alert(year_1);
                      if(year_1 == 'a1'){
                        if(objResult.FromYears.length>0){
                          $("#Years_1").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            //
                          }
                          $("#Years_1").html(Options);
      
                        }else{
                          $("#Years_1").html("");
      
                        }
                    }
                    if(year_1 != 'a1'){
                      if(objResult.FromYears.length>0){
                        $("#Years_1").html("");
                        var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                          if(objResult.FromYears[index] != year_1){
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }//
                            if(objResult.FromYears[index] == year_1){
                              Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }
                        }
                        $("#Years_1").html(Options);
      
                      }else{
                        $("#Years_1").html("");
      
                      }
                  }
                    ///----------------------------- from year ------------------------------
      
                    ///------------------------------ to year ----------------------------
                    //debugger;
                    //alert(year_2);
                    if(year_2 == 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              //
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
      
      
                        if(year_2 != 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              if(objResult.FromYears[index] != year_2){
                                Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                }//
                                if(objResult.FromYears[index] == year_2){
                                  Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                  }
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
                    ///------------------------------ to year ----------------------------
      
          //---------------------working ----------------------

    }


    if(agnt_1 != '' && agnt_1 == 'ALL'  && mtng_2 != ''){
      //alert("Actual Agenda New New");
      //alert(mtng_2);

                //---------------------working ----------------------
                var objResult={
                  "FromYears":[],
                  "MeetingNo":[],
                  "agendatopic":[]
                }
                // let element = document.getElementById("mtng_1");
                // while (element.firstChild) {
                //   element.removeChild(element.firstChild);
                // }
               

                console.log("--agenda--",objResult);   
                var i=3;
                for (x in a){
                              d=a[x]
                              yd=d[2]
                              md=d[3]
                              agnda=d[4]
                              kd=d[1]
                              yd1=d[5]
                              yd2=d[6]
         
                            if( mtng_2 == md){
                                
                              
                                if (!objResult.FromYears.includes(yd) ) {
                                  objResult.FromYears.push(yd);
                                }
                              
                                //objResult.FromYears.push(yd);
                                if (!objResult.MeetingNo.includes(md) ) {
                                objResult.MeetingNo.push(md);
                                }
                                if (!objResult.agendatopic.includes(agnda) ) {
                                objResult.agendatopic.push(agnda);
                                }
      
      
                                console.log("--agenda--",objResult);
                                     
                            } 
                           i++;
      
                    }
      
                    //--------------------------- from year --------------------------------
                      //debugger;
                      //alert(year_1);
                      if(year_1 == 'a1'){
                        if(objResult.FromYears.length>0){
                          $("#Years_1").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            //
                          }
                          $("#Years_1").html(Options);
      
                        }else{
                          $("#Years_1").html("");
      
                        }
                    }
                    if(year_1 != 'a1'){
                      if(objResult.FromYears.length>0){
                        $("#Years_1").html("");
                        var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                          if(objResult.FromYears[index] != year_1){
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }//
                            if(objResult.FromYears[index] == year_1){
                              Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }
                        }
                        $("#Years_1").html(Options);
      
                      }else{
                        $("#Years_1").html("");
      
                      }
                  }
                    ///----------------------------- from year ------------------------------
      
                    ///------------------------------ to year ----------------------------
                    //debugger;
                    //alert(year_2);
                    if(year_2 == 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              //
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
      
      
                        if(year_2 != 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              if(objResult.FromYears[index] != year_2){
                                Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                }//
                                if(objResult.FromYears[index] == year_2){
                                  Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                  }
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
                    ///------------------------------ to year ----------------------------
      
          //---------------------working ----------------------

    }  
        
     

}



// // ################################## ON CHANGE AGENDA FIELD EFFECT ON MEETING FIELD ###################################



// // ################################## ON CHANGE MEETING FIELD EFFECT ON AGENDA FIELD ###################################

function fileValidation_to_mtng_select(pdf_data) {
        
  const arr = [];
  var a = pdf_data;
  var array1 = []
  var array_agnt = []
  var count=0;
  
  var agnt_2 = document.getElementById("agnda_2").value;
  var agnt_1 = document.getElementById("agnda_1").value;
  var year_1 = document.getElementById("Years_1").value;
  var year_2 = document.getElementById("Years_2").value;
  var mtng_2 = document.getElementById("mtng_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;
  //document.getElementById("agnda_2").value = '';
  // alert('-----1------'+mtng_2);
  // ///changed------------------
  if(agnt_2 != '' ){
    // document.getElementById("agnda_2").style.display = 'none';
    // document.getElementById('agnda_2').disabled = true; 
    // document.getElementById("agnda_1").style.display = '';
  }

  if(agnt_1 != '' ){
    document.getElementById("agnda_2").style.display = 'none';
    document.getElementById('agnda_2').disabled = true; 
    document.getElementById("agnda_1").style.display = '';
  }
  
   
    if(agnt_2 != '' && agnt_2 != 'ALL' && mtng_1 != 'ALL'){
      //alert("Actual")

                //---------------------working ----------------------
                var objResult={
                  "FromYears":[],
                  "MeetingNo":[],
                  "agendatopic":[]
                }

                console.log("--agenda--",objResult);   
                var i=3;
                  for (x in a){
                              d=a[x]
                              yd=d[2]
                              md=d[3]
                              agnda=d[4]
                              kd=d[1]
                              yd1=d[5]
                              yd2=d[6]
         
                            if( agnt_2 == agnda && md == mtng_1){
                              
                                if (!objResult.FromYears.includes(yd) && md == mtng_1) {
                                  objResult.FromYears.push(yd);
                                }
                              
                                //objResult.FromYears.push(yd);
                                if (!objResult.MeetingNo.includes(md) && md == mtng_1) {
                                objResult.MeetingNo.push(md);
                                }
                                if (!objResult.agendatopic.includes(agnda) && md == mtng_1) {
                                objResult.agendatopic.push(agnda);
                                }
      
      
                                console.log("--agenda--",objResult);
                                    
                            } 
                           
      
                    }
      
                    //--------------------------- from year --------------------------------
                      //debugger;
                      //alert(year_1);
                      if(year_1 == 'a1'){
                        if(objResult.FromYears.length>0){
                          $("#Years_1").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            //
                          }
                          $("#Years_1").html(Options);
      
                        }else{
                          $("#Years_1").html("");
      
                        }
                    }
                    if(year_1 != 'a1'){
                      if(objResult.FromYears.length>0){
                        $("#Years_1").html("");
                        var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                          if(objResult.FromYears[index] != year_1){
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }//
                            if(objResult.FromYears[index] == year_1){
                              Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }
                        }
                        $("#Years_1").html(Options);
      
                      }else{
                        $("#Years_1").html("");
      
                      }
                  }
                    ///----------------------------- from year ------------------------------
      
                    ///------------------------------ to year ----------------------------
                    //debugger;
                    //alert(year_2);
                    if(year_2 == 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              //
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
      
      
                        if(year_2 != 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              if(objResult.FromYears[index] != year_2){
                                Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                }//
                                if(objResult.FromYears[index] == year_2){
                                  Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                  }
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
                    ///------------------------------ to year ----------------------------
      
          //---------------------working ----------------------

    }

    if(agnt_2 != '' && agnt_2 != 'ALL' && mtng_1 == 'ALL'){
      //alert("Actual New")

                //---------------------working ----------------------
                var objResult={
                  "FromYears":[],
                  "MeetingNo":[],
                  "agendatopic":[]
                }

                console.log("--agenda--",objResult);   
                var i=3;
                  for (x in a){
                              d=a[x]
                              yd=d[2]
                              md=d[3]
                              agnda=d[4]
                              kd=d[1]
                              yd1=d[5]
                              yd2=d[6]
         
                            if( agnt_2 == agnda){
                              
                                if (!objResult.FromYears.includes(yd) ) {
                                  objResult.FromYears.push(yd);
                                }
                              
                                //objResult.FromYears.push(yd);
                                if (!objResult.MeetingNo.includes(md) ) {
                                objResult.MeetingNo.push(md);
                                }
                                if (!objResult.agendatopic.includes(agnda) ) {
                                objResult.agendatopic.push(agnda);
                                }
      
      
                                console.log("--agenda--",objResult);
                                     
                            } 
                           
      
                    }
      
                    //--------------------------- from year --------------------------------
                      //debugger;
                      //alert(year_1);
                      if(year_1 == 'a1'){
                        if(objResult.FromYears.length>0){
                          $("#Years_1").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            //
                          }
                          $("#Years_1").html(Options);
      
                        }else{
                          $("#Years_1").html("");
      
                        }
                    }
                    if(year_1 != 'a1'){
                      if(objResult.FromYears.length>0){
                        $("#Years_1").html("");
                        var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                          if(objResult.FromYears[index] != year_1){
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }//
                            if(objResult.FromYears[index] == year_1){
                              Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }
                        }
                        $("#Years_1").html(Options);
      
                      }else{
                        $("#Years_1").html("");
      
                      }
                  }
                    ///----------------------------- from year ------------------------------
      
                    ///------------------------------ to year ----------------------------
                    //debugger;
                    //alert(year_2);
                    if(year_2 == 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              //
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
      
      
                        if(year_2 != 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              if(objResult.FromYears[index] != year_2){
                                Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                }//
                                if(objResult.FromYears[index] == year_2){
                                  Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                  }
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
                    ///------------------------------ to year ----------------------------
      
          //---------------------working ----------------------

    }

    if(mtng_2 != ''){
      document.getElementById("agnda_2").style.display = 'none';
      document.getElementById('agnda_2').disabled = true; 
      document.getElementById("agnda_1").style.display = '';
      document.getElementById('agnda_1').disabled = false; 

      //alert("Actual New New")
      //alert(mtng_2);

                //---------------------working ----------------------
                var objResult={
                  "FromYears":[],
                  "MeetingNo":[],
                  "agendatopic":[]
                }

                let element = document.getElementById("agnda_1");
                while (element.firstChild) {
                  element.removeChild(element.firstChild);
                }
                
                  node = document.createElement("Option");
                  document.getElementById("agnda_1").appendChild(node);
                  textnode = document.createTextNode("ALL");
                  node.appendChild(textnode);
                  node.value="ALL";
                  array1.push("ALL");
                  node.name=1;
                  //node.selected = true;
                  document.getElementById("agnda_1").appendChild(node);
               
                console.log("--agenda--",objResult);   
                var i=3;
                  for (x in a){
                              d=a[x]
                              yd=d[2]
                              md=d[3]
                              agnda=d[4]
                              kd=d[1]
                              yd1=d[5]
                              yd2=d[6]
         
                            if( mtng_2 == md){
                                node = document.createElement("Option");
                                document.getElementById("agnda_1").appendChild(node);
                                textnode = document.createTextNode(agnda);
                                node.appendChild(textnode);
                                node.value=agnda;
                                array1.push(agnda);
                                node.name=1;
                                //node.selected = true;
                                document.getElementById("agnda_1").appendChild(node);

                              
                                if (!objResult.FromYears.includes(yd) ) {
                                  objResult.FromYears.push(yd);
                                }
                              
                                //objResult.FromYears.push(yd);
                                if (!objResult.MeetingNo.includes(md) ) {
                                objResult.MeetingNo.push(md);
                                }
                                if (!objResult.agendatopic.includes(agnda) ) {
                                objResult.agendatopic.push(agnda);
                                }
      
      
                                console.log("--agenda--",objResult);
                                     
                            } 
                           i++;
      
                    }
      
                    //--------------------------- from year --------------------------------
                      //debugger;
                      //alert(year_1);
                      if(year_1 == 'a1'){
                        if(objResult.FromYears.length>0){
                          $("#Years_1").html("");
                          var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                          for (let index = 0; index < objResult.FromYears.length; index++) {
                          
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            //
                          }
                          $("#Years_1").html(Options);
      
                        }else{
                          $("#Years_1").html("");
      
                        }
                    }
                    if(year_1 != 'a1'){
                      if(objResult.FromYears.length>0){
                        $("#Years_1").html("");
                        var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                          if(objResult.FromYears[index] != year_1){
                            Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }//
                            if(objResult.FromYears[index] == year_1){
                              Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }
                        }
                        $("#Years_1").html(Options);
      
                      }else{
                        $("#Years_1").html("");
      
                      }
                  }
                    ///----------------------------- from year ------------------------------
      
                    ///------------------------------ to year ----------------------------
                    //debugger;
                    //alert(year_2);
                    if(year_2 == 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              //
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
      
      
                        if(year_2 != 'a2'){
                          if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {
                            
                              if(objResult.FromYears[index] != year_2){
                                Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                }//
                                if(objResult.FromYears[index] == year_2){
                                  Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                                  }
                            }
                            $("#Years_2").html(Options);
      
                          }else{
                            $("#Years_2").html("");
      
                          }
                        }
                    ///------------------------------ to year ----------------------------
      
          //---------------------working ----------------------

    }

}



// // ################################## ON CHANGE YEAR FIELD EFFECT ON AGENDA AND MEETING FIELD ###################################

function FromYears(pdf_data,from_year_list){

  var agnt_2 = document.getElementById("agnda_2").value;
  var agnt_1 = document.getElementById("agnda_1").value;
  var year_1 = document.getElementById("Years_1").value;
  var year_2 = document.getElementById("Years_2").value;
  var mtng_2 = document.getElementById("mtng_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;
  var a = pdf_data;
  var array2 = [];
  var array_agnt2 = [];
  var count=0;

 
  var startyear = Math.max(...from_year_list);
  if(year_2 == 'a2'){
    year_2=startyear
  }

  if(year_1 == 'a1'){
    year_1=startyear
  }

    

      //--------- ONLY DATE MATCHING ---------------------
  if(year_1 <=year_2 && (agnt_2 == '' && mtng_2 == '')){
    // var array2 = [];
    // var array_agnt2 = [];
        // ------------------------------------
        let element = document.getElementById("agnda_1");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        // -----------------------------
    
        // ------------------------------------
        let element1 = document.getElementById("mtng_1");
        while (element1.firstChild) {
          element1.removeChild(element1.firstChild);
        }
        // -----------------------------
        

    if(mtng_2 == '' && mtng_1 == ''){
      //pass
    }
    if(mtng_2 == '' && mtng_1 != ''){
      //pass
    }
    if(mtng_2 != '' && mtng_1 == ''){
      mtng_1 = mtng_2;
    }

    var startyear = Math.max(...from_year_list);
    if(year_2 == 'a2'){
      year_2=startyear
    }

    if(year_1 == 'a1'){
      year_1=startyear
    }


    //------------ pre select meeting -------------------

    if(mtng_1 != ''  ){
      if(!array_agnt2.includes(mtng_1)){
        node = document.createElement("Option");
        document.getElementById("mtng_1").appendChild(node);
        textnode = document.createTextNode(mtng_1);
        node.appendChild(textnode);
        node.value=mtng_1;
        array_agnt2.push(mtng_1);
        node.name=1;
        document.getElementById("mtng_1").appendChild(node);
      }
      
    }


    if(mtng_2 != ''){
      if(!array_agnt2.includes(mtng_2)){
      node = document.createElement("Option");
      document.getElementById("mtng_1").appendChild(node);
      textnode = document.createTextNode(mtng_2);
      node.appendChild(textnode);
      node.value=mtng_2;
      array_agnt2.push(mtng_2);
      node.name=1;
      document.getElementById("mtng_1").appendChild(node);
      }
    }
    

    //------------ pre select meeting -------------------

    //------------append agenda-------------------

    if(!array2.includes("ALL")){
        node = document.createElement("Option");
        document.getElementById("agnda_1").appendChild(node);
        textnode = document.createTextNode("ALL");
        node.appendChild(textnode);
        node.value="ALL";
        array2.push("ALL");
        node.name=1;
        document.getElementById("agnda_1").appendChild(node);

    }
    

    //------------append agenda-------------------
    //------------append meeting-------------------

    if(!array_agnt2.includes("ALL")){
      node = document.createElement("Option");
      document.getElementById("mtng_1").appendChild(node);
      textnode = document.createTextNode("ALL");
      node.appendChild(textnode);
      node.value="ALL";
      array_agnt2.push("ALL");
      node.name=1;
      document.getElementById("mtng_1").appendChild(node);

      }
      

      //------------append meeting-------------------

        var objResult={
          "FromYears":[],
          "MeetingNo":[],
          "agendatopic":[]
        }
        
            
        var i=1;
          for (x in a){
            // console.log(agnt_2);
            // console.log(agnt_1);
            // console.log(year_1);
            // console.log(year_2);
            // console.log(mtng_2);
            // console.log(mtng_1);
            console.log("DATE MATCH");
                      d=a[x]
                      yd=d[2]
                      md=d[3]
                      agnda=d[4]
                      kd=d[1]
                      yd1=d[5]
                      yd2=d[6]

                    if(yd >= year_1 && yd <= year_2 ){

                        // if(md == mtng_2 || md == mtng_1){
                        
                        

                        
                          console.log("--meeting--",objResult) ; 
                          //---------------------working ----------------------
                          document.getElementById("agnda_1").style.display = '';
                          document.getElementById('agnda_1').disabled = false; 
                          document.getElementById("agnda_2").style.display = 'none';
                          //---------------------working ----------------------
                          
                          
                          //------------append agenda-------------------
                            if (!array2.includes(agnda)) {
                              // alert(array)
                                // node = document.createElement("Option");
                                // document.getElementById("agnda_1").appendChild(node);
                                // textnode = document.createTextNode(agnda);
                                // node.appendChild(textnode);
                                // node.value=agnda;
                                // node.name=i;
                                array2.push(agnda);
                                // document.getElementById("agnda_1").appendChild(node);
                                  
                                
                            }
                          //------------append agenda------------------- 


                          //---------------------working ----------------------
                          document.getElementById("mtng_1").style.display = '';
                          document.getElementById('mtng_1').disabled = false; 
                          document.getElementById("mtng_2").style.display = 'none';
                          //---------------------working ----------------------
                          
                          
                          //------------append meeting-------------------
                            if (!array_agnt2.includes(md)) {
                              // alert(array)
                                // node = document.createElement("Option");
                                // document.getElementById("mtng_1").appendChild(node);
                                // textnode = document.createTextNode(md);
                                // node.appendChild(textnode);
                                // node.value=md;
                                // node.name=i;
                                array_agnt2.push(md);
                                // document.getElementById("mtng_1").appendChild(node);
                                  
                                i++;
                            }
                          //------------append meeting-------------------
                          

                            
                        // }

                    }  

                    
                  // }
            }
          // array2.includes(md)
          array2.sort();
          // array_agnt2.includes(md)
          array_agnt2.sort();

            j=0;
            while(j<=i){
              if(array_agnt2[j] != undefined){
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(array_agnt2[j]);
                node.appendChild(textnode);
                node.value=array_agnt2[j];
                node.name=j;
                //array2.push(md);
                document.getElementById("mtng_1").appendChild(node);
              }
              

              if(array2[j] != undefined){
                node = document.createElement("Option");
                document.getElementById("agnda_1").appendChild(node);
                textnode = document.createTextNode(array2[j]);
                node.appendChild(textnode);
                node.value=array2[j];
                node.name=j;
                //array2.push(agnda);
                document.getElementById("agnda_1").appendChild(node);
              }

              j++;
            }
                                
            //--------------------------- from year --------------------------------
            //debugger;
            // if( agnt_1 != ''){

                      ///----------------------------- from year ------------------------------

                      ///------------------------------ to year ----------------------------
                      //debugger;

                // }
    }
    // ---------- 20220518 ---------



     //--------- ONLY DATES MATCHING ---------------------



         //--------- BOTH MATCHING ---------------------
  
         //--------- BOTH MATCHING ---------------------
}



// // ################################## ON CHANGE YEAR FIELD EFFECT ON AGENDA AND MEETING FIELD ###################################



function Submit_check(pdf_data){
  var a = pdf_data;
  

  var agnt_2 = document.getElementById("agnda_2").value;
  var agnt_1 = document.getElementById("agnda_1").value;
  var year_1 = document.getElementById("Years_1").value;
  var year_2 = document.getElementById("Years_2").value;
  var mtng_2 = document.getElementById("mtng_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;


  
  
  if(mtng_2 != '' && mtng_1 == ''){
    mtng_1 = mtng_2;
  }

  
  if(agnt_2 != '' && agnt_1 == ''){
    agnt_1 = agnt_2;
  }



  console.log("DATE MATCH-------------");
  console.log(agnt_1);
  console.log(mtng_1);
  console.log(year_1);
  console.log(year_2);
  

  //alert(agnt_1)
  //alert(mtng_1)

  var count = 0;
  console.log(count);
  var i=1;
  if(year_1!=undefined && year_1!=null && year_2!=undefined && year_2!=null && year_2 != 'a2' && year_1 !='a1' && year_1 <= year_2){


      if(agnt_1 == 'ALL' && mtng_1 == 'ALL'){
        for (x in a){
          d=a[x]
          yd=d[2]
          md=d[3]
          agnda=d[4]
          kd=d[1]
          yd1=d[5]
          yd2=d[6]
          if(agnt_1 == 'ALL' && mtng_1 == 'ALL' && year_1 == yd  && parseInt(year_1) <= parseInt(year_2)){
            count = 1;
          }
          i++;
          }
      }

      if(agnt_1 != 'ALL' && mtng_1 == 'ALL'){
        for (x in a){
          d=a[x]
          yd=d[2]
          md=d[3]
          agnda=d[4]
          kd=d[1]
          yd1=d[5]
          yd2=d[6]
          if(agnt_1 == agnda && year_1 == yd  && parseInt(year_1) <= parseInt(year_2) ){
            count = 2;
          }
          i++;
          }
      }

      if(agnt_1 == 'ALL' && mtng_1 != 'ALL'){
        for (x in a){
          d=a[x]
          yd=d[2]
          md=d[3]
          agnda=d[4]
          kd=d[1]
          yd1=d[5]
          yd2=d[6]
          if(mtng_1 == md && year_1 == yd  && parseInt(year_1) <= parseInt(year_2) ){
            count = 3;
          }
          i++;
          }
      }

      if(agnt_1 != 'ALL' && mtng_1 != 'ALL'){
        for (x in a){
          d=a[x]
          yd=d[2]
          md=d[3]
          agnda=d[4]
          kd=d[1]
          yd1=d[5]
          yd2=d[6]
          if(agnt_1 == agnda && mtng_1 == md && year_1 == yd  && parseInt(year_1) <= parseInt(year_2) ){
            count = 4;
          }
          i++;
          }
      }
  }
  //alert(year_1)
  //alert(year_2)
    if(count == 1 || count == 2 || count == 3 || count == 4 || count == 5 || count == 6 && (year_1 != 'a1' && year_2 != 'a2')){
          //alert(count);
          document.getElementById('submit').disabled = false;
          // document.getElementById('submit').classList.add('bg-indigo-500');
          // document.getElementById('submit').classList.add('hover:bg-indigo-400');
          // document.getElementById('submit').classList.remove('bg-indigo-500');
          // document.getElementById('submit').classList.add('bg-indigo-500');
          document.getElementById('submit').classList.replace('bg-slate-500', 'bg-indigo-500');
          document.getElementById('submit').classList.replace('hover:bg-slate-400', 'hover:bg-indigo-400');


          // document.getElementById("submit_1").style.display = '';
          
          //document.getElementById("ftdt").style.display = 'none';
      }
    if(count == 0){
            //alert(count);
            //document.getElementById("ftdt").style.display = '';
            document.getElementById('submit').disabled = true;
            document.getElementById('submit').classList.replace( 'bg-indigo-500', 'bg-slate-500');
            document.getElementById('submit').classList.replace( 'hover:bg-indigo-400','hover:bg-slate-400');
      }
}


// // ################# Reverse way 20220512 ################



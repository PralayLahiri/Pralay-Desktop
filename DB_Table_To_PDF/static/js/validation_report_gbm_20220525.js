
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

  //GlobalobjResult = objResult


 //GlobalobjResult.FromYears = structuredClone(objResult.FromYears );

 //GlobalobjResult.FromYears = objResult.FromYears.map(a => Object.assign({}, a));

 //console.log("Copy of object",GlobalobjResult.FromYears)

  
  var agnt_2 = document.getElementById("agnda_2").value;
  
  var agnt_1 = document.getElementById("agnda_1").value;
  var year_1 = document.getElementById("Years_1").value;
  var year_2 = document.getElementById("Years_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;
  var mtng_2 = document.getElementById("mtng_2").value;
  document.getElementById("mtng_2").value='';
  


  // console.log('Agenda--',agnt_2,'--Agenda');
  // ///changed------------------
      if(agnt_2 != "ALL" && agnt_2 !='' && agnt_1 =='' ){
        //alert("Inside 1")
        //alert("-----")
          //#########2022-04-27#########

            //-------20220518-----
            
            //-------20220518-----
            // document.getElementById("agnda_1").options.length=0;
            // removeChild(node);
            //---------------------working ----------------------
            let element = document.getElementById("mtng_1");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
            //---------------------working ----------------------

            
            // ------------20220518-----------------
            // document.getElementById("mtng_1").style.display = 'none';
            // document.getElementById('mtng_1').disabled = true; 
            // document.getElementById("mtng_2").style.display = '';
            // ------------20220518-----------------
            //---------------------working ----------------------
            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != '' && mtng_1 != 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("1")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
              // for( var j = year_1; j<= year_2; j++){      
              if(agnda == agnt_2 || agnda == agnt_1){
                if(mtng_1 == md){
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                
                //----------pre select -------
                // var f_agenda = document.getElementsById("1");
                // alert(f_agenda);
                // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                //select.appendChild(node);

                //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                //node.option.selected='selected';
                  console.log(array_agnt);
                //alert("--mt1--",mtng_1);

                }
                          
              }
            }
            }

            if( mtng_1 == 'ALL' && agnt_1 != 'ALL' && mtng_2 != 'ALL' && agnt_1 != ''){

              //alert("Inside Here");


            

              
              
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("2")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
              // for( var j = year_1; j<= year_2; j++){      
              if(agnda == agnt_2 || agnda == agnt_1){
                  if(mtng_1 == md){
                  if(!array_agnt.includes(md)){
                  node = document.createElement("Option");
                  document.getElementById("mtng_1").appendChild(node);
                  textnode = document.createTextNode(md);
                  node.appendChild(textnode);
                  node.value=md; //mtng_2 //20220518
                  array_agnt.push(md); //mtng_2 //20220518
                  node.name=1;
                  node.selected = true;
                  document.getElementById("mtng_1").appendChild(node);

                  }}
                  if(mtng_1 == 'ALL'){
                  if(!array_agnt.includes('ALL')){
                    node = document.createElement("Option");
                    document.getElementById("mtng_1").appendChild(node);
                    textnode = document.createTextNode('ALL');
                    node.appendChild(textnode);
                    node.value='ALL'; //mtng_2 //20220518
                    array_agnt.push('ALL'); //mtng_2 //20220518
                    node.name=1;
                    //node.selected = true;
                    document.getElementById("mtng_1").appendChild(node);
    
                    }}
                    if(mtng_1 != md){
                      if(!array_agnt.includes(md)){
                      node = document.createElement("Option");
                      document.getElementById("mtng_1").appendChild(node);
                      textnode = document.createTextNode(md);
                      node.appendChild(textnode);
                      node.value=md; //mtng_2 //20220518
                      array_agnt.push(md); //mtng_2 //20220518
                      node.name=1;
                      //node.selected = true;
                      document.getElementById("mtng_1").appendChild(node);
    
                      }}
                  
                
                //----------pre select -------
                // var f_agenda = document.getElementsById("1");
                // alert(f_agenda);
                // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                //select.appendChild(node);

                //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                //node.option.selected='selected';
                  console.log(array_agnt);
                //alert("--mt1--",mtng_1);

                // }
                       
                if (!objResult.FromYears.includes(yd)) {
                  objResult.FromYears.push(yd);
                }
              
                //objResult.FromYears.push(yd);
                if (!objResult.MeetingNo.includes(md)) {
                objResult.MeetingNo.push(md);
                }
                if (!objResult.agendatopic.includes(agnda)) {
                objResult.agendatopic.push(agnda);
                }
              // }
              i++;

              }
            }

            objResult.FromYears.sort(function(a, b){return a - b});   

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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                      }
                ///------------------------------ to year ----------------------------

            }

            if( mtng_1 == '' && agnt_1 != 'ALL' && mtng_2 != 'ALL' && agnt_1 != ''){

              //alert("Inside Here 2");


            

              
              
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("2")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
                // for( var j = year_1; j<= year_2; j++){      
               if(agnda == agnt_2 || agnda == agnt_1){
                  if(mtng_1 == md){
                  if(!array_agnt.includes(md)){
                  node = document.createElement("Option");
                  document.getElementById("mtng_1").appendChild(node);
                  textnode = document.createTextNode(md);
                  node.appendChild(textnode);
                  node.value=md; //mtng_2 //20220518
                  array_agnt.push(md); //mtng_2 //20220518
                  node.name=1;
                  node.selected = true;
                  document.getElementById("mtng_1").appendChild(node);

                  }}
                  if(mtng_1 == 'ALL'){
                  if(!array_agnt.includes('ALL')){
                    node = document.createElement("Option");
                    document.getElementById("mtng_1").appendChild(node);
                    textnode = document.createTextNode('ALL');
                    node.appendChild(textnode);
                    node.value='ALL'; //mtng_2 //20220518
                    array_agnt.push('ALL'); //mtng_2 //20220518
                    node.name=1;
                    //node.selected = true;
                    document.getElementById("mtng_1").appendChild(node);
    
                    }}
                    if(mtng_1 != md){
                      if(!array_agnt.includes(md)){
                      node = document.createElement("Option");
                      document.getElementById("mtng_1").appendChild(node);
                      textnode = document.createTextNode(md);
                      node.appendChild(textnode);
                      node.value=md; //mtng_2 //20220518
                      array_agnt.push(md); //mtng_2 //20220518
                      node.name=1;
                      //node.selected = true;
                      document.getElementById("mtng_1").appendChild(node);
    
                      }}
                  
                
                //----------pre select -------
                // var f_agenda = document.getElementsById("1");
                // alert(f_agenda);
                // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                //select.appendChild(node);

                //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                //node.option.selected='selected';
                  console.log(array_agnt);
                //alert("--mt1--",mtng_1);

                // }
                       
                if (!objResult.FromYears.includes(yd)) {
                  objResult.FromYears.push(yd);
                }
              
                //objResult.FromYears.push(yd);
                if (!objResult.MeetingNo.includes(md)) {
                objResult.MeetingNo.push(md);
                }
                if (!objResult.agendatopic.includes(agnda)) {
                objResult.agendatopic.push(agnda);
                }
              // }
              i++;

              }
            }

            objResult.FromYears.sort(function(a, b){return a - b});   

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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                      }
                ///------------------------------ to year ----------------------------

            }

            if(mtng_2 != '' && mtng_2 != 'ALL'){  //20220524
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("2")
              //alert("At Meeting 2 "+mtng_2)
              //var mtng_2 = document.getElementById("mtng_2").value ;
              for (x in a){
                  d=a[x]
                  yd=d[2]
                  md=d[3]
                  agnda=d[4]
                  kd=d[1]
                  yd1=d[5]
                  yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                  // for( var j = year_1; j<= year_2; j++){      
                  if(agnda == agnt_2 || agnda == agnt_1){
                    if(mtng_2 == md){
                      //---------------------working ----------------------
                      document.getElementById("mtng_1").style.display = '';
                      document.getElementById('mtng_1').disabled = false; 
                      document.getElementById("mtng_2").style.display = 'none';
                      document.getElementById("mtng_2").value = '';
                      //---------------------working ----------------------
                    node = document.createElement("Option");
                    document.getElementById("mtng_1").appendChild(node);
                    textnode = document.createTextNode(mtng_2);
                    node.appendChild(textnode);
                    node.value=md; //mtng_2 //20220518
                    array_agnt.push(md); //mtng_2 //20220518
                    node.name=1;
                    node.selected = true;
                    document.getElementById("mtng_1").appendChild(node);
                    
                    //----------pre select -------
                    // var f_agenda = document.getElementsById("1");
                    // alert(f_agenda);
                    // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                    //select.appendChild(node);

                    //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                    //node.option.selected='selected';

                    console.log(array_agnt);
                    //alert("--mt2--",md);

                    }
                              
                  }
              }

            }
            
            if( mtng_1 == 'ALL' &&  agnt_1 == 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("4")
              //--------------------------- from year --------------------------------
              //alert("Actual")
              //alert(mtng_1);
              //alert(year_1);
              //alert(year_2);
              var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
              var year_1 = document.getElementById("Years_1").value=year_1;
              var year_2 = document.getElementById("Years_2").value=year_2;


                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                var i =2;
                for (x in a){
                    d=a[x]
                    yd=d[2]
                    md=d[3]
                    agnda=d[4]
                    kd=d[1]
                    yd1=d[5]
                    yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                    // for( var j = year_1; j<= year_2; j++){      
                    // if(agnda == agnt_2 || agnda == agnt_1){
                      // if(mtng_1 == md){
                      if(!array_agnt.includes(md)) { 
                          node = document.createElement("Option");
                          document.getElementById("mtng_1").appendChild(node);
                          textnode = document.createTextNode(md);
                          node.appendChild(textnode);
                          node.value=md; //mtng_1 //20220518
                          array_agnt.push(md); //mtng_1 //20220518
                          node.name=1;
                          
                          document.getElementById("mtng_1").appendChild(node);
                      // }
                       }
                    // }
                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                    
                      //objResult.FromYears.push(yd);
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }
                    // }
                    i++;
                  }

                  //debugger;
                  //alert(year_1);
                  objResult.FromYears.sort(function(a, b){return a - b});   

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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                      }
                ///------------------------------ to year ----------------------------

            }

            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != 'ALL' &&  mtng_2 != 'ALL' && mtng_2 == ''){
              //alert("5")
          
            //------------append meeting-------------------
            node = document.createElement("Option");
            document.getElementById("mtng_1").appendChild(node);
            textnode = document.createTextNode("ALL");
            node.appendChild(textnode);
            node.value="ALL";
            array_agnt.push("ALL");
            node.name=2;
            document.getElementById("mtng_1").appendChild(node);
            //------------append meeting-------------------
            //---------------------working ----------------------
            var objResult={
              "FromYears":[],
              "MeetingNo":[],
              "agendatopic":[]
            }
            console.log("--agenda--",objResult) ;   
            var i=3;
              for (x in a){
                          d=a[x]
                          yd=d[2]
                          md=d[3]
                          agnda=d[4]
                          kd=d[1]
                          yd1=d[5]
                          yd2=d[6]
                          // document.getElementById("mtng_1").style.display = '';
                          // document.getElementById('mtng_1').disabled = false; 
                          // document.getElementById("mtng_2").style.display = 'none';
                          // for( var j = year_1; j<= year_2; j++){      
                        if(agnda == agnt_2 || agnda == agnt_1){
                          if(mtng_1 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_1 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_1 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_1 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_2 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_2 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_2 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_2 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == 'ALL' || mtng_2 == 'ALL'){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == '' && mtng_2 == ''){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          
                          
                          

                          console.log("--agenda--",objResult) ;
                          //---------------------working ----------------------
                          document.getElementById("mtng_1").style.display = '';
                          document.getElementById('mtng_1').disabled = false; 
                          document.getElementById("mtng_2").style.display = 'none';
                          //---------------------working ----------------------

                          
                          
                          //---------------------working ----------------------
                          //------------append meeting-------------------
                            if (!array_agnt.includes(md)) {
                              // alert(array)
                                node = document.createElement("Option");
                                document.getElementById("mtng_1").appendChild(node);
                                textnode = document.createTextNode(md);
                                node.appendChild(textnode);
                                node.value=md;
                                node.name=i;
                                array_agnt.push(md);
                                document.getElementById("mtng_1").appendChild(node);
                                  
                                i++;
                            }
                          //------------append meeting------------------- 
                          //---------------------working ----------------------
                          

                            
                        }
                      // }
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                    }
                ///------------------------------ to year ----------------------------
              }
            }

      if(agnt_2 =='' && agnt_1 !=''){
        //alert("Inside 2")
        //alert("-----")
          //#########2022-04-27#########

            //-------20220518-----
            
            //-------20220518-----
            // document.getElementById("agnda_1").options.length=0;
            // removeChild(node);
            //---------------------working ----------------------
            let element = document.getElementById("mtng_1");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
            //---------------------working ----------------------

            
            // ------------20220518-----------------
            // document.getElementById("mtng_1").style.display = 'none';
            // document.getElementById('mtng_1').disabled = true; 
            // document.getElementById("mtng_2").style.display = '';
            // ------------20220518-----------------
            //---------------------working ----------------------
            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != '' && mtng_1 != 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("1")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
              // for( var j = year_1; j<= year_2; j++){      
              if(agnda == agnt_2 || agnda == agnt_1){
                if(mtng_1 == md){
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                
                //----------pre select -------
                // var f_agenda = document.getElementsById("1");
                // alert(f_agenda);
                // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                //select.appendChild(node);

                //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                //node.option.selected='selected';
                  console.log(array_agnt);
                //alert("--mt1--",mtng_1);

                }
                          
              }
            }
            }

            if( mtng_1 == 'ALL' && agnt_1 != 'ALL'  ){
              //alert('inside2');

              var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
              var year_1 = document.getElementById("Years_1").value=year_1;
              var year_2 = document.getElementById("Years_2").value=year_2;

              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }

              if(!array_agnt.includes(md)) {
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode('ALL');
                node.appendChild(textnode);
                node.value=md; //mtng_2 //20220518
                array_agnt.push(md); //mtng_2 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
               }
              //alert("2")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
                // for( var j = year_1; j<= year_2; j++){      
                if(agnda == agnt_2 || agnda == agnt_1){
                  // if(mtng_1 == md){
                  if(!array_agnt.includes(md)) {
                    node = document.createElement("Option");
                    document.getElementById("mtng_1").appendChild(node);
                    textnode = document.createTextNode(md);
                    node.appendChild(textnode);
                    node.value=md; //mtng_1 //20220518
                    array_agnt.push(md); //mtng_1 //20220518
                    node.name=1;
                    //node.selected = true;
                    document.getElementById("mtng_1").appendChild(node);
                  } 
                  
                  
                  //----------pre select -------
                  // var f_agenda = document.getElementsById("1");
                  // alert(f_agenda);
                  // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                  //select.appendChild(node);

                  //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                  //node.option.selected='selected';
                    console.log(array_agnt);
                  //alert("--mt1--",mtng_1);

                  // }
                  if (!objResult.FromYears.includes(yd) ) {
                    objResult.FromYears.push(yd);
                  }
                
                  //objResult.FromYears.push(yd);
                  if (!objResult.MeetingNo.includes(md)) {
                  objResult.MeetingNo.push(md);
                  }
                  if (!objResult.agendatopic.includes(agnda)) {
                  objResult.agendatopic.push(agnda);
                  }
                            
                }
                

            }
            objResult.FromYears.sort(function(a, b){return a - b});   
            //alert("Inside 2");

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
                // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                // for (let index = 0; index < objResult.FromYears.length; index++) {
                
                //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                //    //
                // }
                // $("#Years_1").html(Options);
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
              // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
              // for (let index = 0; index < objResult.FromYears.length; index++) {
              
              //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
              //    //
              // }
              // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
                }
                }
          ///------------------------------ to year ----------------------------
            }

            if(mtng_2 != '' ){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("mtng 2 here")
              //alert("2")
              //alert("At Meeting 2 "+mtng_2)
              //var mtng_2 = document.getElementById("mtng_2").value ;
              for (x in a){
                  d=a[x]
                  yd=d[2]
                  md=d[3]
                  agnda=d[4]
                  kd=d[1]
                  yd1=d[5]
                  yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                  // for( var j = year_1; j<= year_2; j++){      
                  if(agnda == agnt_2 || agnda == agnt_1){
                    if(mtng_2 == md){
                      //---------------------working ----------------------
                      document.getElementById("mtng_1").style.display = '';
                      document.getElementById('mtng_1').disabled = false; 
                      document.getElementById("mtng_2").style.display = 'none';
                      document.getElementById("mtng_2").value = '';
                      //---------------------working ----------------------
                     if(!array_agnt.includes(md)) {
                      node = document.createElement("Option");
                      document.getElementById("mtng_1").appendChild(node);
                      textnode = document.createTextNode(mtng_2);
                      node.appendChild(textnode);
                      node.value=md; //mtng_2 //20220518
                      array_agnt.push(md); //mtng_2 //20220518
                      node.name=1;
                      node.selected = true;
                      document.getElementById("mtng_1").appendChild(node);
                     }
                    
                    
                    //----------pre select -------
                    // var f_agenda = document.getElementsById("1");
                    // alert(f_agenda);
                    // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                    //select.appendChild(node);

                    //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                    //node.option.selected='selected';

                    console.log(array_agnt);
                    //alert("--mt2--",md);

                    }
                              
                  }
              }

              objResult.FromYears.sort(function(a, b){return a - b});   
              //alert("Inside 4");
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                // for (let index = 0; index < objResult.FromYears.length; index++) {
                
                //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                //    //
                // }
                // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
                  }
                  }
            ///------------------------------ to year ----------------------------


            }
            
            if( mtng_1 == 'ALL' &&  agnt_1 == 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("4")
              //--------------------------- from year --------------------------------
              //alert("Actual")
              //alert(mtng_1);
              //alert(year_1);
              //alert(year_2);
              var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
              var year_1 = document.getElementById("Years_1").value=year_1;
              var year_2 = document.getElementById("Years_2").value=year_2;


                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                var i =2;
                for (x in a){
                    d=a[x]
                    yd=d[2]
                    md=d[3]
                    agnda=d[4]
                    kd=d[1]
                    yd1=d[5]
                    yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                    // for( var j = year_1; j<= year_2; j++){      
                    // if(agnda == agnt_2 || agnda == agnt_1){
                      // if(mtng_1 == md){
                      if(!array_agnt.includes(md)) { 
                          node = document.createElement("Option");
                          document.getElementById("mtng_1").appendChild(node);
                          textnode = document.createTextNode(md);
                          node.appendChild(textnode);
                          node.value=md; //mtng_1 //20220518
                          array_agnt.push(md); //mtng_1 //20220518
                          node.name=1;
                          
                          document.getElementById("mtng_1").appendChild(node);
                      // }
                        }
                    // }
                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                    
                      //objResult.FromYears.push(yd);
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }
                    // }
                    i++;
                  }

                  //debugger;
                  //alert(year_1);
                  objResult.FromYears.sort(function(a, b){return a - b});   

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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                      }
                ///------------------------------ to year ----------------------------

            }

            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != 'ALL' &&  mtng_2 != 'ALL' && mtng_2 == ''){
              //alert("5")
          
            //------------append meeting-------------------
            node = document.createElement("Option");
            document.getElementById("mtng_1").appendChild(node);
            textnode = document.createTextNode("ALL");
            node.appendChild(textnode);
            node.value="ALL";
            array_agnt.push("ALL");
            node.name=2;
            document.getElementById("mtng_1").appendChild(node);
            //------------append meeting-------------------
            //---------------------working ----------------------
            var objResult={
              "FromYears":[],
              "MeetingNo":[],
              "agendatopic":[]
            }
            console.log("--agenda--",objResult) ;   
            var i=3;
              for (x in a){
                          d=a[x]
                          yd=d[2]
                          md=d[3]
                          agnda=d[4]
                          kd=d[1]
                          yd1=d[5]
                          yd2=d[6]
                          // document.getElementById("mtng_1").style.display = '';
                          // document.getElementById('mtng_1').disabled = false; 
                          // document.getElementById("mtng_2").style.display = 'none';
                          // for( var j = year_1; j<= year_2; j++){      
                        if(agnda == agnt_2 || agnda == agnt_1){
                          if(mtng_1 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_1 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_1 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_1 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_2 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_2 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_2 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_2 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == 'ALL' || mtng_2 == 'ALL'){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == '' && mtng_2 == ''){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          
                          
                          

                          console.log("--agenda--",objResult) ;
                          //---------------------working ----------------------
                          document.getElementById("mtng_1").style.display = '';
                          document.getElementById('mtng_1').disabled = false; 
                          document.getElementById("mtng_2").style.display = 'none';
                          //---------------------working ----------------------

                          
                          
                          //---------------------working ----------------------
                          //------------append meeting-------------------
                            if (!array_agnt.includes(md)) {
                              // alert(array)
                                node = document.createElement("Option");
                                document.getElementById("mtng_1").appendChild(node);
                                textnode = document.createTextNode(md);
                                node.appendChild(textnode);
                                node.value=md;
                                node.name=i;
                                array_agnt.push(md);
                                document.getElementById("mtng_1").appendChild(node);
                                  
                                i++;
                            }
                          //------------append meeting------------------- 
                          //---------------------working ----------------------
                          

                            
                        }
                      // }
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                    }
                ///------------------------------ to year ----------------------------
              }
          }


      if(agnt_1 !='' && agnt_2 =='' && mtng_1 != '' && mtng_1 != 'ALL' ){
        //alert("Inside 3");
        //alert("-----")
          //#########2022-04-27#########

            //-------20220518-----
            
            //-------20220518-----
            // document.getElementById("agnda_1").options.length=0;
            // removeChild(node);
            //---------------------working ----------------------
            let element = document.getElementById("mtng_1");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
            //---------------------working ----------------------

            
            // ------------20220518-----------------
            // document.getElementById("mtng_1").style.display = 'none';
            // document.getElementById('mtng_1').disabled = true; 
            // document.getElementById("mtng_2").style.display = '';
            // ------------20220518-----------------
            //---------------------working ----------------------
            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != '' && mtng_1 != 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("1")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
              // for( var j = year_1; j<= year_2; j++){      
              if(agnda == agnt_2 || agnda == agnt_1){
                if(mtng_1 == md){
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                
                //----------pre select -------
                // var f_agenda = document.getElementsById("1");
                // alert(f_agenda);
                // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                //select.appendChild(node);

                //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                //node.option.selected='selected';
                  console.log(array_agnt);
                //alert("--mt1--",mtng_1);

                }
                          
              }
            }
            }

            if( mtng_1 == 'ALL' && agnt_1 != 'ALL'  ){
              //alert('inside2');

              var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
              var year_1 = document.getElementById("Years_1").value=year_1;
              var year_2 = document.getElementById("Years_2").value=year_2;

              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }

              if(!array_agnt.includes(md)) {
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode('ALL');
                node.appendChild(textnode);
                node.value=md; //mtng_2 //20220518
                array_agnt.push(md); //mtng_2 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                }
              //alert("2")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
                // for( var j = year_1; j<= year_2; j++){      
                if(agnda == agnt_2 || agnda == agnt_1){
                  // if(mtng_1 == md){
                  if(!array_agnt.includes(md)) {
                    node = document.createElement("Option");
                    document.getElementById("mtng_1").appendChild(node);
                    textnode = document.createTextNode(md);
                    node.appendChild(textnode);
                    node.value=md; //mtng_1 //20220518
                    array_agnt.push(md); //mtng_1 //20220518
                    node.name=1;
                    //node.selected = true;
                    document.getElementById("mtng_1").appendChild(node);
                  } 
                  
                  
                  //----------pre select -------
                  // var f_agenda = document.getElementsById("1");
                  // alert(f_agenda);
                  // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                  //select.appendChild(node);

                  //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                  //node.option.selected='selected';
                    console.log(array_agnt);
                  //alert("--mt1--",mtng_1);

                  // }
                  if (!objResult.FromYears.includes(yd) ) {
                    objResult.FromYears.push(yd);
                  }
                
                  //objResult.FromYears.push(yd);
                  if (!objResult.MeetingNo.includes(md)) {
                  objResult.MeetingNo.push(md);
                  }
                  if (!objResult.agendatopic.includes(agnda)) {
                  objResult.agendatopic.push(agnda);
                  }
                            
                }
                

            }
            objResult.FromYears.sort(function(a, b){return a - b});   
            //alert("Inside 2");

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
                // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                // for (let index = 0; index < objResult.FromYears.length; index++) {
                
                //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                //    //
                // }
                // $("#Years_1").html(Options);
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
              // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
              // for (let index = 0; index < objResult.FromYears.length; index++) {
              
              //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
              //    //
              // }
              // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
                }
                }
          ///------------------------------ to year ----------------------------
            }

            if(mtng_2 != '' ){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("mtng 2 here")
              //alert("2")
              //alert("At Meeting 2 "+mtng_2)
              //var mtng_2 = document.getElementById("mtng_2").value ;
              for (x in a){
                  d=a[x]
                  yd=d[2]
                  md=d[3]
                  agnda=d[4]
                  kd=d[1]
                  yd1=d[5]
                  yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                  // for( var j = year_1; j<= year_2; j++){      
                  if(agnda == agnt_2 || agnda == agnt_1){
                    if(mtng_2 == md){
                      //---------------------working ----------------------
                      document.getElementById("mtng_1").style.display = '';
                      document.getElementById('mtng_1').disabled = false; 
                      document.getElementById("mtng_2").style.display = 'none';
                      document.getElementById("mtng_2").value = '';
                      //---------------------working ----------------------
                      if(!array_agnt.includes(md)) {
                      node = document.createElement("Option");
                      document.getElementById("mtng_1").appendChild(node);
                      textnode = document.createTextNode(mtng_2);
                      node.appendChild(textnode);
                      node.value=md; //mtng_2 //20220518
                      array_agnt.push(md); //mtng_2 //20220518
                      node.name=1;
                      node.selected = true;
                      document.getElementById("mtng_1").appendChild(node);
                      }
                    
                    
                    //----------pre select -------
                    // var f_agenda = document.getElementsById("1");
                    // alert(f_agenda);
                    // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                    //select.appendChild(node);

                    //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                    //node.option.selected='selected';

                    console.log(array_agnt);
                    //alert("--mt2--",md);

                    }
                              
                  }
              }

              objResult.FromYears.sort(function(a, b){return a - b});   
              //alert("Inside 4");
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                // for (let index = 0; index < objResult.FromYears.length; index++) {
                
                //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                //    //
                // }
                // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
                  }
                  }
            ///------------------------------ to year ----------------------------


            }
            
            if( mtng_1 == 'ALL' &&  agnt_1 == 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("4")
              //--------------------------- from year --------------------------------
              //alert("Actual")
              //alert(mtng_1);
              //alert(year_1);
              //alert(year_2);
              var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
              var year_1 = document.getElementById("Years_1").value=year_1;
              var year_2 = document.getElementById("Years_2").value=year_2;


                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                var i =2;
                for (x in a){
                    d=a[x]
                    yd=d[2]
                    md=d[3]
                    agnda=d[4]
                    kd=d[1]
                    yd1=d[5]
                    yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                    // for( var j = year_1; j<= year_2; j++){      
                    // if(agnda == agnt_2 || agnda == agnt_1){
                      // if(mtng_1 == md){
                      if(!array_agnt.includes(md)) { 
                          node = document.createElement("Option");
                          document.getElementById("mtng_1").appendChild(node);
                          textnode = document.createTextNode(md);
                          node.appendChild(textnode);
                          node.value=md; //mtng_1 //20220518
                          array_agnt.push(md); //mtng_1 //20220518
                          node.name=1;
                          
                          document.getElementById("mtng_1").appendChild(node);
                      // }
                        }
                    // }
                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                    
                      //objResult.FromYears.push(yd);
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }
                    // }
                    i++;
                  }

                  //debugger;
                  //alert(year_1);
                  objResult.FromYears.sort(function(a, b){return a - b});   

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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                      }
                ///------------------------------ to year ----------------------------

            }

            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != 'ALL' &&  mtng_2 != 'ALL' && mtng_2 == ''){
              //alert("5")
          
            //------------append meeting-------------------
            node = document.createElement("Option");
            document.getElementById("mtng_1").appendChild(node);
            textnode = document.createTextNode("ALL");
            node.appendChild(textnode);
            node.value="ALL";
            array_agnt.push("ALL");
            node.name=2;
            document.getElementById("mtng_1").appendChild(node);
            //------------append meeting-------------------
            //---------------------working ----------------------
            var objResult={
              "FromYears":[],
              "MeetingNo":[],
              "agendatopic":[]
            }
            console.log("--agenda--",objResult) ;   
            var i=3;
              for (x in a){
                          d=a[x]
                          yd=d[2]
                          md=d[3]
                          agnda=d[4]
                          kd=d[1]
                          yd1=d[5]
                          yd2=d[6]
                          // document.getElementById("mtng_1").style.display = '';
                          // document.getElementById('mtng_1').disabled = false; 
                          // document.getElementById("mtng_2").style.display = 'none';
                          // for( var j = year_1; j<= year_2; j++){      
                        if(agnda == agnt_2 || agnda == agnt_1){
                          if(mtng_1 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_1 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_1 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_1 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_2 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_2 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_2 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_2 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == 'ALL' || mtng_2 == 'ALL'){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == '' && mtng_2 == ''){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          
                          
                          

                          console.log("--agenda--",objResult) ;
                          //---------------------working ----------------------
                          document.getElementById("mtng_1").style.display = '';
                          document.getElementById('mtng_1').disabled = false; 
                          document.getElementById("mtng_2").style.display = 'none';
                          //---------------------working ----------------------

                          
                          
                          //---------------------working ----------------------
                          //------------append meeting-------------------
                            if (!array_agnt.includes(md)) {
                              // alert(array)
                                node = document.createElement("Option");
                                document.getElementById("mtng_1").appendChild(node);
                                textnode = document.createTextNode(md);
                                node.appendChild(textnode);
                                node.value=md;
                                node.name=i;
                                array_agnt.push(md);
                                document.getElementById("mtng_1").appendChild(node);
                                  
                                i++;
                            }
                          //------------append meeting------------------- 
                          //---------------------working ----------------------
                          

                            
                        }
                      // }
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                    }
                ///------------------------------ to year ----------------------------
              }
          }  
          
          
      if(agnt_1 !='' && agnt_2 =='' && mtng_2 != '' && mtng_2 != 'ALL' ){
        //alert("Inside 4");

        mtng_1 = mtng_2;
        mtng_2='';
        //alert("-----")
          //#########2022-04-27#########

            //-------20220518-----
            
            //-------20220518-----
            // document.getElementById("agnda_1").options.length=0;
            // removeChild(node);
            //---------------------working ----------------------
            let element = document.getElementById("mtng_1");
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
            //---------------------working ----------------------

            
            // ------------20220518-----------------
            // document.getElementById("mtng_1").style.display = 'none';
            // document.getElementById('mtng_1').disabled = true; 
            // document.getElementById("mtng_2").style.display = '';
            // ------------20220518-----------------
            //---------------------working ----------------------
            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != '' && mtng_1 != 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("1")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
              // for( var j = year_1; j<= year_2; j++){      
              if(agnda == agnt_2 || agnda == agnt_1){
                if(mtng_1 == md){
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                
                //----------pre select -------
                // var f_agenda = document.getElementsById("1");
                // alert(f_agenda);
                // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                //select.appendChild(node);

                //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                //node.option.selected='selected';
                  console.log(array_agnt);
                //alert("--mt1--",mtng_1);

                }
                          
              }
            }
            }

            if( mtng_1 == 'ALL' && agnt_1 != 'ALL'  ){
              //alert('inside2');

              var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
              var year_1 = document.getElementById("Years_1").value=year_1;
              var year_2 = document.getElementById("Years_2").value=year_2;

              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }

              if(!array_agnt.includes(md)) {
                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode('ALL');
                node.appendChild(textnode);
                node.value=md; //mtng_2 //20220518
                array_agnt.push(md); //mtng_2 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                }
              //alert("2")
              var mtng_2 = document.getElementById("mtng_2").value = '';
              for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
                // for( var j = year_1; j<= year_2; j++){      
                if(agnda == agnt_2 || agnda == agnt_1){
                  // if(mtng_1 == md){
                  if(!array_agnt.includes(md)) {
                    node = document.createElement("Option");
                    document.getElementById("mtng_1").appendChild(node);
                    textnode = document.createTextNode(md);
                    node.appendChild(textnode);
                    node.value=md; //mtng_1 //20220518
                    array_agnt.push(md); //mtng_1 //20220518
                    node.name=1;
                    //node.selected = true;
                    document.getElementById("mtng_1").appendChild(node);
                  } 
                  
                  
                  //----------pre select -------
                  // var f_agenda = document.getElementsById("1");
                  // alert(f_agenda);
                  // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                  //select.appendChild(node);

                  //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                  //node.option.selected='selected';
                    console.log(array_agnt);
                  //alert("--mt1--",mtng_1);

                  // }
                  if (!objResult.FromYears.includes(yd) ) {
                    objResult.FromYears.push(yd);
                  }
                
                  //objResult.FromYears.push(yd);
                  if (!objResult.MeetingNo.includes(md)) {
                  objResult.MeetingNo.push(md);
                  }
                  if (!objResult.agendatopic.includes(agnda)) {
                  objResult.agendatopic.push(agnda);
                  }
                            
                }
                

            }
            objResult.FromYears.sort(function(a, b){return a - b});   
            //alert("Inside 2");

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
                // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                // for (let index = 0; index < objResult.FromYears.length; index++) {
                
                //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                //    //
                // }
                // $("#Years_1").html(Options);
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
              // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
              // for (let index = 0; index < objResult.FromYears.length; index++) {
              
              //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
              //    //
              // }
              // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
                }
                }
          ///------------------------------ to year ----------------------------
            }

            if(mtng_2 != '' ){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("mtng 2 here")
              //alert("2")
              //alert("At Meeting 2 "+mtng_2)
              //var mtng_2 = document.getElementById("mtng_2").value ;
              for (x in a){
                  d=a[x]
                  yd=d[2]
                  md=d[3]
                  agnda=d[4]
                  kd=d[1]
                  yd1=d[5]
                  yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                  // for( var j = year_1; j<= year_2; j++){      
                  if(agnda == agnt_2 || agnda == agnt_1){
                    if(mtng_2 == md){
                      //---------------------working ----------------------
                      document.getElementById("mtng_1").style.display = '';
                      document.getElementById('mtng_1').disabled = false; 
                      document.getElementById("mtng_2").style.display = 'none';
                      document.getElementById("mtng_2").value = '';
                      //---------------------working ----------------------
                      if(!array_agnt.includes(md)) {
                      node = document.createElement("Option");
                      document.getElementById("mtng_1").appendChild(node);
                      textnode = document.createTextNode(mtng_2);
                      node.appendChild(textnode);
                      node.value=md; //mtng_2 //20220518
                      array_agnt.push(md); //mtng_2 //20220518
                      node.name=1;
                      node.selected = true;
                      document.getElementById("mtng_1").appendChild(node);
                      }
                    
                    
                    //----------pre select -------
                    // var f_agenda = document.getElementsById("1");
                    // alert(f_agenda);
                    // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

                    //select.appendChild(node);

                    //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
                    //node.option.selected='selected';

                    console.log(array_agnt);
                    //alert("--mt2--",md);

                    }
                              
                  }
              }

              objResult.FromYears.sort(function(a, b){return a - b});   
              //alert("Inside 4");
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                // for (let index = 0; index < objResult.FromYears.length; index++) {
                
                //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                //    //
                // }
                // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
                  }
                  }
            ///------------------------------ to year ----------------------------


            }
            
            if( mtng_1 == 'ALL' &&  agnt_1 == 'ALL'){
              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }
              //alert("4")
              //--------------------------- from year --------------------------------
              //alert("Actual")
              //alert(mtng_1);
              //alert(year_1);
              //alert(year_2);
              var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
              var year_1 = document.getElementById("Years_1").value=year_1;
              var year_2 = document.getElementById("Years_2").value=year_2;


                node = document.createElement("Option");
                document.getElementById("mtng_1").appendChild(node);
                textnode = document.createTextNode(mtng_1);
                node.appendChild(textnode);
                node.value=md; //mtng_1 //20220518
                array_agnt.push(md); //mtng_1 //20220518
                node.name=1;
                node.selected = true;
                document.getElementById("mtng_1").appendChild(node);
                var i =2;
                for (x in a){
                    d=a[x]
                    yd=d[2]
                    md=d[3]
                    agnda=d[4]
                    kd=d[1]
                    yd1=d[5]
                    yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                    // for( var j = year_1; j<= year_2; j++){      
                    // if(agnda == agnt_2 || agnda == agnt_1){
                      // if(mtng_1 == md){
                      if(!array_agnt.includes(md)) { 
                          node = document.createElement("Option");
                          document.getElementById("mtng_1").appendChild(node);
                          textnode = document.createTextNode(md);
                          node.appendChild(textnode);
                          node.value=md; //mtng_1 //20220518
                          array_agnt.push(md); //mtng_1 //20220518
                          node.name=1;
                          
                          document.getElementById("mtng_1").appendChild(node);
                      // }
                        }
                    // }
                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                    
                      //objResult.FromYears.push(yd);
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }
                    // }
                    i++;
                  }

                  //debugger;
                  //alert(year_1);
                  objResult.FromYears.sort(function(a, b){return a - b});   

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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                      }
                ///------------------------------ to year ----------------------------

            }

            // ------------------ append previous selected meeting first ------------------
            if( mtng_1 != 'ALL' &&  mtng_2 != 'ALL' && mtng_2 == ''){
              //alert("5")
          
            //------------append meeting-------------------
            node = document.createElement("Option");
            document.getElementById("mtng_1").appendChild(node);
            textnode = document.createTextNode("ALL");
            node.appendChild(textnode);
            node.value="ALL";
            array_agnt.push("ALL");
            node.name=2;
            document.getElementById("mtng_1").appendChild(node);
            //------------append meeting-------------------
            //---------------------working ----------------------
            var objResult={
              "FromYears":[],
              "MeetingNo":[],
              "agendatopic":[]
            }
            console.log("--agenda--",objResult) ;   
            var i=3;
              for (x in a){
                          d=a[x]
                          yd=d[2]
                          md=d[3]
                          agnda=d[4]
                          kd=d[1]
                          yd1=d[5]
                          yd2=d[6]
                          // document.getElementById("mtng_1").style.display = '';
                          // document.getElementById('mtng_1').disabled = false; 
                          // document.getElementById("mtng_2").style.display = 'none';
                          // for( var j = year_1; j<= year_2; j++){      
                        if(agnda == agnt_2 || agnda == agnt_1){
                          if(mtng_1 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_1 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_1 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_1 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_2 == md){
                            if (!objResult.FromYears.includes(yd) && mtng_2 == md ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  && mtng_2 == md ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda)  && mtng_2 == md ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == 'ALL' || mtng_2 == 'ALL'){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          if(mtng_1 == '' && mtng_2 == ''){
                            if (!objResult.FromYears.includes(yd) ) {
                              objResult.FromYears.push(yd);
                            }
                          
                            //objResult.FromYears.push(yd);
                            if (!objResult.MeetingNo.includes(md)  ) {
                            objResult.MeetingNo.push(md);
                            }
                            if (!objResult.agendatopic.includes(agnda) ) {
                            objResult.agendatopic.push(agnda);
                            }

                          }
                          
                          
                          

                          console.log("--agenda--",objResult) ;
                          //---------------------working ----------------------
                          document.getElementById("mtng_1").style.display = '';
                          document.getElementById('mtng_1').disabled = false; 
                          document.getElementById("mtng_2").style.display = 'none';
                          //---------------------working ----------------------

                          
                          
                          //---------------------working ----------------------
                          //------------append meeting-------------------
                            if (!array_agnt.includes(md)) {
                              // alert(array)
                                node = document.createElement("Option");
                                document.getElementById("mtng_1").appendChild(node);
                                textnode = document.createTextNode(md);
                                node.appendChild(textnode);
                                node.value=md;
                                node.name=i;
                                array_agnt.push(md);
                                document.getElementById("mtng_1").appendChild(node);
                                  
                                i++;
                            }
                          //------------append meeting------------------- 
                          //---------------------working ----------------------
                          

                            
                        }
                      // }
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                    }
                ///------------------------------ to year ----------------------------
              }
          }  

      if((mtng_1 != '' && agnt_1 != '' ) && (mtng_1 != 'ALL' && agnt_1 != 'ALL' )){
        alert("mtng 3 all");

  
        var objResult={
          "FromYears":[],
          "MeetingNo":[],
          "agendatopic":[]
        }
  
        if( mtng_2 != ''){
          mtng_1 = mtng_2;
          mtng_2='';
        }
  
        if( agnt_2 != ''){
          agnt_1 = agnt_2
          agnt_2='';
        }
        console.log("BOTH MATCH");
        console.log(mtng_1);
        console.log(agnt_1);
        console.log(year_1);
        console.log(year_2);
  
            if( agnt_1 != '' && mtng_1 != ''  && mtng_1 != 'ALL'){
              for (x in a){
                  d=a[x]
                  yd=d[2]
                  md=d[3]
                  agnda=d[4]
                  kd=d[1]
                  yd1=d[5]
                  yd2=d[6]
                  // document.getElementById("mtng_1").style.display = '';
                  // document.getElementById('mtng_1').disabled = false; 
                  // document.getElementById("mtng_2").style.display = 'none';
                 // for( var j = year_1; j<= year_2; j++){      
                  if(md == mtng_1 && agnda == agnt_1 ){
                   //  if(agnt_1 == agnda){
                    if(!array1.includes(agnda)){
                      node = document.createElement("Option");
                      document.getElementById("agnda_1").appendChild(node);
                      textnode = document.createTextNode(agnda);
                      node.appendChild(textnode);
                      node.value=agnda;
                      array1.push(agnda);
                      node.name=1;
                      //node.selected = true;
                      document.getElementById("agnda_1").appendChild(node);
                    }
                    
                   //  }
                    // //----------pre select -------
                    // console.log(array1);
                    // //alert(agnt_1);
                    if(!array_agnt.includes(md)){
                      node = document.createElement("Option");
                      document.getElementById("mtng_1").appendChild(node); 
                      textnode = document.createTextNode(md);
                      node.appendChild(textnode);
                      node.value=md;
                      array_agnt.push(md);
                      node.name=1;
                      //node.selected = true;
                      document.getElementById("mtng_1").appendChild(node);
                      
                    }
                    
                    // //}
                    //count = count + 1;
                              
                  }

                  if(md == mtng_1 && agnda == agnt_1){
                  if (!objResult.FromYears.includes(yd)) {
                    objResult.FromYears.push(yd);
                  }
                
                  //objResult.FromYears.push(yd);
                  if (!objResult.MeetingNo.includes(md)) {
                  objResult.MeetingNo.push(md);
                  }
                  if (!objResult.agendatopic.includes(agnda)) {
                  objResult.agendatopic.push(agnda);
                  }
    
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                    }
                ///------------------------------ to year ----------------------------
            }

            if( agnt_1 != '' && mtng_1 != ''  && mtng_1 == 'ALL'){
              for (x in a){
                  d=a[x]
                  yd=d[2]
                  md=d[3]
                  agnda=d[4]
                  kd=d[1]
                  yd1=d[5]
                  yd2=d[6]
                  // document.getElementById("mtng_1").style.display = '';
                  // document.getElementById('mtng_1').disabled = false; 
                  // document.getElementById("mtng_2").style.display = 'none';
                 // for( var j = year_1; j<= year_2; j++){      
                  if( agnda == agnt_1 ){
                   //  if(agnt_1 == agnda){
                    if(!array1.includes(agnda)){
                      node = document.createElement("Option");
                      document.getElementById("agnda_1").appendChild(node);
                      textnode = document.createTextNode(agnda);
                      node.appendChild(textnode);
                      node.value=agnda;
                      array1.push(agnda);
                      node.name=1;
                      //node.selected = true;
                      document.getElementById("agnda_1").appendChild(node);
                    }
                    
                   //  }
                    // //----------pre select -------
                    // console.log(array1);
                    // //alert(agnt_1);
                    if(!array_agnt.includes(md)){
                      node = document.createElement("Option");
                      document.getElementById("mtng_1").appendChild(node); 
                      textnode = document.createTextNode(md);
                      node.appendChild(textnode);
                      node.value=md;
                      array_agnt.push(md);
                      node.name=1;
                      //node.selected = true;
                      document.getElementById("mtng_1").appendChild(node);
                      
                    }
                    
                    // //}
                    //count = count + 1;
                              
                  }

                  if( agnda == agnt_1){
                  if (!objResult.FromYears.includes(yd) && agnda == agnt_1) {
                    objResult.FromYears.push(yd);
                  }
                
                  //objResult.FromYears.push(yd);
                  if (!objResult.MeetingNo.includes(md) && agnda == agnt_1) {
                  objResult.MeetingNo.push(md);
                  }
                  if (!objResult.agendatopic.includes(agnda) && agnda == agnt_1) {
                  objResult.agendatopic.push(agnda);
                  }
    
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                    }
                ///------------------------------ to year ----------------------------
            }
  
          //   if(count == 0){
          //     alert("Agenda: "+agnt_1+" and Meeting No. is not present at Year: "+year_2);
          //   }
  
  
  
        console.log("BOTH MATCH");
        // alert(mtng_1);
        // alert(agnt_1);
        // alert(year_1);
        // alert(year_2);
  
      }    


      if( mtng_2 == 'ALL' ){
        
            document.getElementById("mtng_2").value = 'ALL';

            // if( mtng_1 == 'ALL' && agnt_1 != 'ALL'  ){
              alert('inside2');

              

              var objResult={
                "FromYears":[],
                "MeetingNo":[],
                "agendatopic":[]
              }

              
              for (x in a){
                      d=a[x]
                      yd=d[2]
                      md=d[3]
                      agnda=d[4]
                      kd=d[1]
                      yd1=d[5]
                      yd2=d[6]

                      console.log(array_agnt);
                        //alert("--mt1--",mtng_1);

                      // }
                      if (!objResult.FromYears.includes(yd) ) {
                        objResult.FromYears.push(yd);
                      }
                    
                      //objResult.FromYears.push(yd);
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }
                            
                }
                

            // }
            objResult.FromYears.sort(function(a, b){return a - b});   
            //alert("Inside 2");

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
                // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                // for (let index = 0; index < objResult.FromYears.length; index++) {
                
                //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                //    //
                // }
                // $("#Years_1").html(Options);
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
              // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
              // for (let index = 0; index < objResult.FromYears.length; index++) {
              
              //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
              //    //
              // }
              // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
                }
                }
          ///------------------------------ to year ----------------------------
            

            
      }     

            
      if(agnt_1 == "ALL" &&  mtng_1 != 'ALL') {
        //alert("6")
        //alert("Coming here")
              //alert(mtng_1);
              //alert(year_1);
              //alert(year_2);
              //alert(objResult);
              
              agnt_1; 
              agnt_2; 
              year_1;
              year_2; 
              mtng_1; 
              mtng_2; 
          

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
                                // document.getElementById("mtng_1").style.display = '';
                                // document.getElementById('mtng_1').disabled = false; 
                                // document.getElementById("mtng_2").style.display = 'none';
                            // for( var j = year_1; j<= year_2; j++){      
                              if(mtng_1 == md || mtng_2 == md){
                                
                                  if (!objResult.FromYears.includes(yd)) {
                                    objResult.FromYears.push(yd);
                                  }
                                
                                  //objResult.FromYears.push(yd);
                                  if (!objResult.MeetingNo.includes(md)) {
                                  objResult.MeetingNo.push(md);
                                  }
                                  if (!objResult.agendatopic.includes(agnda)) {
                                  objResult.agendatopic.push(agnda);
                                  }

          
                                  console.log("--agenda--",objResult);
                                  //---------------------working ----------------------
                                  document.getElementById("mtng_1").style.display = '';
                                  document.getElementById('mtng_1').disabled = false; 
                                  document.getElementById("mtng_2").style.display = 'none';
                                  //---------------------working ----------------------
          
                                
                                
                                //---------------------working ----------------------
                                //------------append meeting-------------------
                                if (!array_agnt.includes(md)) {
                                    // alert(array)
                                      node = document.createElement("Option");
                                      document.getElementById("mtng_1").appendChild(node);
                                      textnode = document.createTextNode(md);
                                      node.appendChild(textnode);
                                      node.value=md;
                                      node.name=i;
                                      array_agnt.push(md);
                                      node.selected = true;
                                      document.getElementById("mtng_1").appendChild(node);
                                        
                                }      
                                  
                                //------------append meeting------------------- 
                                //---------------------working ----------------------
                                
          
                                  
                              }
                            // }
                      }
          
                      //--------------------------- from year --------------------------------
                      //debugger;
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
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
                        // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                        // for (let index = 0; index < objResult.FromYears.length; index++) {
                        
                        //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                        //    //
                        // }
                        // $("#Years_1").html(Options);
                      }
                    }
                ///------------------------------ to year ----------------------------

          //---------------------working ----------------------

          console.log(document.getElementById("mtng_1").value);
          console.log(document.getElementById("mtng_2").value);
          console.log(document.getElementById("Years_1").value);
          console.log(document.getElementById("Years_2").value);
          
          
          var year_1 = document.getElementById("Years_1").value;
          var year_2 = document.getElementById("Years_2").value;
          //   
          //----------------20220518
          //---------------------working ----------------------
          // document.getElementById("mtng_1").style.display = 'none';
          // document.getElementById('mtng_1').disabled = true; 
          // document.getElementById("mtng_2").style.display = '';
          //---------------------working ----------------------
          //----------------20220518

        } 
        
        
      // if( mtng_1 == 'ALL' ){
      //   document.getElementById("agnda_1").value = 'ALL';  
      //   // document.getElementById("mtng_1").value = 'ALL';  
      
      //   // if( mtng_1 == 'ALL' && agnt_1 != 'ALL'  ){
      //     alert('inside2');
      
          
      
      //     var objResult={
      //       "FromYears":[],
      //       "MeetingNo":[],
      //       "agendatopic":[]
      //     }
      
          
      //     for (x in a){
      //             d=a[x]
      //             yd=d[2]
      //             md=d[3]
      //             agnda=d[4]
      //             kd=d[1]
      //             yd1=d[5]
      //             yd2=d[6]
      
      //             console.log(array_agnt);
      //               //alert("--mt1--",mtng_1);
      
      //             // }
      //             if (!objResult.FromYears.includes(yd) ) {
      //               objResult.FromYears.push(yd);
      //             }
                
      //             //objResult.FromYears.push(yd);
      //             if (!objResult.MeetingNo.includes(md)) {
      //             objResult.MeetingNo.push(md);
      //             }
      //             if (!objResult.agendatopic.includes(agnda)) {
      //             objResult.agendatopic.push(agnda);
      //             }
                        
      //       }
            
      
      //   // }
      //         objResult.FromYears.sort(function(a, b){return a - b});
      
      
      //       //debugger;
      //       //alert(year_1);
      //       if(year_1 == 'a1'){
      //         if(objResult.FromYears.length>0){
      //           $("#Years_1").html("");
      //           var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
      //           for (let index = 0; index < objResult.FromYears.length; index++) {
                
      //             Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //             //
      //           }
      //           $("#Years_1").html(Options);
      
      //         }else{
      //           $("#Years_1").html("");
      //           // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
      //           // for (let index = 0; index < objResult.FromYears.length; index++) {
                
      //           //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //           //    //
      //           // }
      //           // $("#Years_1").html(Options);
      //         }
      //         }
      
      
      //     if(year_1 != 'a1'){
      //       if(objResult.FromYears.length>0){
      //         $("#Years_1").html("");
      //         var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
      //         for (let index = 0; index < objResult.FromYears.length; index++) {
              
      //           if(objResult.FromYears[index] != year_1){
      //             Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //             }//
      //             if(objResult.FromYears[index] == year_1){
      //               Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //               }
      //         }
      //         $("#Years_1").html(Options);
      
      //       }else{
      //         $("#Years_1").html("");
      //         // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
      //         // for (let index = 0; index < objResult.FromYears.length; index++) {
              
      //         //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //         //    //
      //         // }
      //         // $("#Years_1").html(Options);
      //       }
      //       }
      //     ///----------------------------- from year ------------------------------
      
      //     ///------------------------------ to year ----------------------------
      //     //debugger;
      //     //alert(year_2);
      //     if(year_2 == 'a2'){
      //           if(objResult.FromYears.length>0){
      //             $("#Years_2").html("");
      //             var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
      //             for (let index = 0; index < objResult.FromYears.length; index++) {
                  
      //               Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //               //
      //             }
      //             $("#Years_2").html(Options);
      
      //           }else{
      //             $("#Years_2").html("");
      //             // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
      //             // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
      //             //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //             //    //
      //             // }
      //             // $("#Years_1").html(Options);
      //           }
      //       }
      
      
      //         if(year_2 != 'a2'){
      //           if(objResult.FromYears.length>0){
      //             $("#Years_2").html("");
      //             var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
      //             for (let index = 0; index < objResult.FromYears.length; index++) {
                  
      //               if(objResult.FromYears[index] != year_2){
      //                 Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //                 }//
      //                 if(objResult.FromYears[index] == year_2){
      //                   Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //                   }
      //             }
      //             $("#Years_2").html(Options);
      
      //           }else{
      //             $("#Years_2").html("");
      //             // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
      //             // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
      //             //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
      //             //    //
      //             // }
      //             // $("#Years_1").html(Options);
      //           }
      //           }
      //     ///------------------------------ to year ----------------------------
      
      // }  

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
  document.getElementById("agnda_2").value = '';
  // alert('-----1------'+mtng_2);
  // ///changed------------------
    if(mtng_2 != "ALL" && mtng_1 == ''){  //#########2022-04-27#########
          //alert('mtng_2 all');
          //alert("mtng 1 all");
          // ------------------------------------
          let element = document.getElementById("agnda_1");
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
          // -----------------------------
          // if(agnt_1 = "" && agnt_2 != ""){
          //   agnt_1 = agnt_2;
          //   //agnt_2='';
          // }

          // ------------------ append previous selected agenda first ------------------
          if( agnt_1 != '' && mtng_1 !='ALL'){
                for (x in a){
                    d=a[x]
                    yd=d[2]
                    md=d[3]
                    agnda=d[4]
                    kd=d[1]
                    yd1=d[5]
                    yd2=d[6]
                    // document.getElementById("mtng_1").style.display = '';
                    // document.getElementById('mtng_1').disabled = false; 
                    // document.getElementById("mtng_2").style.display = 'none';
                  // for( var j = year_1; j<= year_2; j++){      
                  if(md == mtng_2 || md == mtng_1){
                    if(agnt_1 == agnda){
                    node = document.createElement("Option");
                    document.getElementById("agnda_1").appendChild(node);
                    textnode = document.createTextNode(agnt_1);
                    node.appendChild(textnode);
                    node.value=agnda;
                    array1.push(agnda);
                    node.name=1;
                    node.selected = true;
                    document.getElementById("agnda_1").appendChild(node);
                    
                    //----------pre select -------
                    console.log(array1);
                    //alert(agnt_1);

                    }
                              
                  }
              }
          }
          if( agnt_2 != ''  && mtng_1 !='ALL'){ 
                  for (x in a){
                        d=a[x]
                        yd=d[2]
                        md=d[3]
                        agnda=d[4]
                        kd=d[1]
                        yd1=d[5]                         
                        yd2=d[6]
                        // document.getElementById("mtng_1").style.display = '';
                        // document.getElementById('mtng_1').disabled = false; 
                        // document.getElementById("mtng_2").style.display = 'none';
                      // for( var j = year_1; j<= year_2; j++){      
                      if(md == mtng_2 || md == mtng_1){

                        if(agnt_2 == agnda){
                        // //---------------------working ----------------------
                        document.getElementById("agnda_1").style.display = '';
                        document.getElementById('agnda_1').disabled = false; 
                        document.getElementById("agnda_2").style.display = 'none';
                        //---------------------working -------------------------
                        node = document.createElement("Option");
                        document.getElementById("agnda_1").appendChild(node);
                        textnode = document.createTextNode(agnt_2);
                        node.appendChild(textnode);
                        node.value=agnda;
                        array1.push(agnda);
                        node.name=1;
                        node.selected = true;
                        document.getElementById("agnda_1").appendChild(node);
                        
                        //----------pre select -------
                        console.log(array1);
                        //alert('-----2------'+agnda);

                        }
                        if(agnt_1 == agnda){
                          node = document.createElement("Option");
                          document.getElementById("agnt_1").appendChild(node);
                          textnode = document.createTextNode(agnt_1);
                          node.appendChild(textnode);
                          node.value=agnda;
                          array1.push(agnda);
                          node.name=1;
                          node.selected = true;
                          document.getElementById("agnt_1").appendChild(node);
                          
                          //----------pre select -------
                          console.log("---------",array1);
                          //alert('------1------',agnda);
    
                          }

                                  
                      }
                }
            }


          // ------------------ append previous selected agenda first ------------------

          //------------append agenda-------------------


          node = document.createElement("Option");
          document.getElementById("agnda_1").appendChild(node);
          textnode = document.createTextNode("ALL");
          node.appendChild(textnode);
          node.value="ALL";
          array1.push("ALL");
          node.name=1;
          document.getElementById("agnda_1").appendChild(node);

          //------------append agenda-------------------

          var objResult={
            "FromYears":[],
            "MeetingNo":[],
            "agendatopic":[]
          }

          let element2 = document.getElementById("Years_1");
          while (element2.firstChild) {
            element2.removeChild(element2.firstChild);
          }

          let element3 = document.getElementById("Years_2");
          while (element3.firstChild) {
            element3.removeChild(element3.firstChild);
          }
          
          console.log("previous list of year",objResult.FromYears);
        
          var i=3;
            for (x in a){
                        d=a[x]
                        yd=d[2]
                        md=d[3]
                        agnda=d[4]
                        kd=d[1]
                        yd1=d[5]
                        yd2=d[6]
      
                      if(md == mtng_2 || md == mtng_1){
                        if(agnt_1 == agnda){
                          //alert('-----1------'+agnda);
                          if (!objResult.FromYears.includes(yd) && agnt_1 == agnda) {
                            objResult.FromYears.push(yd);
                          }
                        
                          //objResult.FromYears.push(yd);
                          if (!objResult.MeetingNo.includes(md) && agnt_1 == agnda) {
                          objResult.MeetingNo.push(md);
                          }
                          if (!objResult.agendatopic.includes(agnda) && agnt_1 == agnda) {
                          objResult.agendatopic.push(agnda);
                          }
                        }
                        if(agnt_2 == agnda){
                          //alert('-----2------'+agnda);
                          if (!objResult.FromYears.includes(yd) && agnt_2 == agnda) {
                            objResult.FromYears.push(yd);
                          }
                        
                          //objResult.FromYears.push(yd);
                          if (!objResult.MeetingNo.includes(md) && agnt_2 == agnda) {
                          objResult.MeetingNo.push(md);
                          }
                          if (!objResult.agendatopic.includes(agnda) && agnt_2 == agnda) {
                          objResult.agendatopic.push(agnda);
                          }
                        }
                        if(agnt_1 == 'ALL' || agnt_2 == ''){
                          //alert('-----3------'+agnda);
                          //alert("Error")
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
                        }
                        //alert(yd);
                        
                        console.log("--meeting--",objResult) ; 
                        //---------------------working ----------------------
                        document.getElementById("agnda_1").style.display = '';
                        document.getElementById('agnda_1').disabled = false; 
                        document.getElementById("agnda_2").style.display = 'none';
                        //---------------------working ----------------------
                        
                        if(agnt_1 == agnda){
                        //------------append meeting-------------------
                          if (!array1.includes(agnda)) {
                            //alert('-----3------'+agnda);
                            // alert(array)
                              node = document.createElement("Option");
                              document.getElementById("agnda_1").appendChild(node);
                              textnode = document.createTextNode(agnda);
                              node.appendChild(textnode);
                              node.value=agnda;
                              node.name=i;
                              array1.push(agnda);
                              document.getElementById("agnda_1").appendChild(node);
                                
                              i++;
                          }
                        //------------append meeting------------------- 
                        }
                        if(agnt_2 == agnda){
                          //------------append meeting-------------------
                            if (!array1.includes(agnda)) {
                              //alert('-----4------'+agnda);
                              // alert(array)
                                node = document.createElement("Option");
                                document.getElementById("agnda_1").appendChild(node);
                                textnode = document.createTextNode(agnda);
                                node.appendChild(textnode);
                                node.value=agnda;
                                node.name=i;
                                array1.push(agnda);
                                document.getElementById("agnda_1").appendChild(node);
                                  
                                i++;
                            }
                          //------------append meeting------------------- 
                          }
                          if(agnt_2 == '' || agnt_1 == 'ALL' ){
                            //------------append meeting-------------------
                              if (!array1.includes(agnda)) {
                                //alert('-----4------'+agnda);
                                // alert(array)
                                  node = document.createElement("Option");
                                  document.getElementById("agnda_1").appendChild(node);
                                  textnode = document.createTextNode(agnda);
                                  node.appendChild(textnode);
                                  node.value=agnda;
                                  node.name=i;
                                  array1.push(agnda);
                                  document.getElementById("agnda_1").appendChild(node);
                                    
                                  i++;
                              }
                            //------------append meeting------------------- 
                            }

                          
                      }
                    // }
              }
              //--------------------------- from year --------------------------------
              //debugger;
              // if( agnt_1 != ''){
                // if(agnt_1 == agnda){
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
                        //alert(objResult.FromYears)
                        if(objResult.FromYears.length>0){
                            $("#Years_2").html("");
                            var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
                            for (let index = 0; index < objResult.FromYears.length; index++) {

                              if(objResult.FromYears[index] != year_2){
                                  Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                              }
                              if(objResult.FromYears[index] == year_2){
                                Options=Options+"<option selected='selected' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                            }
                              //
                            }
                            $("#Years_2").html(Options);

                        }else{
                          $("#Years_2").html("");
                        }
                      }
                        // }
                    // }
                  
      }
// ---------- 20220518 ---------

    if(mtng_1 == "ALL" && agnt_1 != 'ALL' ) {
      //alert("--mtng1 all--")
      //alert(agnt_1);
      //alert(year_1);
      //alert(year_2);
      //alert(objResult);
      //alert("mtng 2 all");
      agnt_1; 
      agnt_2; 
      year_1;
      year_2; 
      mtng_1; 
      mtng_2; 


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
                        // document.getElementById("mtng_1").style.display = '';
                        // document.getElementById('mtng_1').disabled = false; 
                        // document.getElementById("mtng_2").style.display = 'none';
                        // for( var j = year_1; j<= year_2; j++){      
                      if(agnt_1 == agnda || agnt_2 == agnda){
                        
                          if (!objResult.FromYears.includes(yd)) {
                            objResult.FromYears.push(yd);
                          }
                        
                          //objResult.FromYears.push(yd);
                          if (!objResult.MeetingNo.includes(md)) {
                          objResult.MeetingNo.push(md);
                          }
                          if (!objResult.agendatopic.includes(agnda)) {
                          objResult.agendatopic.push(agnda);
                          }


                          console.log("--agenda--",objResult);
                          //---------------------working ----------------------
                          document.getElementById("agnda_1").style.display = ''; 
                          document.getElementById('agnda_1').disabled = false; 
                          document.getElementById("agnda_2").style.display = 'none'; 
                          //---------------------working ----------------------

                        
                        
                        //---------------------working ----------------------
                        //------------append meeting-------------------
                        if (!array1.includes(agnda)) {
                              // alert(array)
                              node = document.createElement("Option");
                              document.getElementById("agnda_1").appendChild(node);
                              textnode = document.createTextNode(agnda);
                              node.appendChild(textnode);
                              node.value=agnda;
                              node.name=i;
                              array1.push(agnda);
                              node.selected = true;
                              document.getElementById("agnda_1").appendChild(node);
                                
                          }      
                      } 
                      //------------append meeting-------------------   agnda
                      //---------------------working ----------------------
                      if (!array1.includes(agnda)) {
                            node = document.createElement("Option");
                            document.getElementById("agnda_1").appendChild(node);
                            textnode = document.createTextNode(agnda);
                            node.appendChild(textnode);
                            node.value=agnda;
                            node.name=i;
                            array1.push(agnda);
                            
                            document.getElementById("agnda_1").appendChild(node);
                          }
                          
                      //}

                      // if(md == mtng_2 || md == mtng_1){
                      //   if(agnt_1 == agnda){
                      //     //alert('-----1------'+agnda);
                      //     if (!objResult.FromYears.includes(yd) ) {
                      //       objResult.FromYears.push(yd);
                      //     }
                        
                      //     //objResult.FromYears.push(yd);
                      //     if (!objResult.MeetingNo.includes(md) ) {
                      //     objResult.MeetingNo.push(md);
                      //     }
                      //     if (!objResult.agendatopic.includes(agnda) ) {
                      //     objResult.agendatopic.push(agnda);
                      //     }
                      //   }
                      //   if(agnt_2 == agnda){
                      //     //alert('-----2------'+agnda);
                      //     if (!objResult.FromYears.includes(yd) && agnt_2 == agnda) {
                      //       objResult.FromYears.push(yd);
                      //     }
                        
                      //     //objResult.FromYears.push(yd);
                      //     if (!objResult.MeetingNo.includes(md) ) {
                      //     objResult.MeetingNo.push(md);
                      //     }
                      //     if (!objResult.agendatopic.includes(agnda) ) {
                      //     objResult.agendatopic.push(agnda);
                      //     }
                      //   }
                      //   if(agnt_1 == 'ALL' || agnt_2 == ''){
                      //     //alert('-----3------'+agnda);
                      //     if (!objResult.FromYears.includes(yd) ) {
                      //       objResult.FromYears.push(yd);
                      //     }
                        
                      //     //objResult.FromYears.push(yd);
                      //     if (!objResult.MeetingNo.includes(md) ) {
                      //     objResult.MeetingNo.push(md);
                      //     }
                      //     if (!objResult.agendatopic.includes(agnda) ) {
                      //     objResult.agendatopic.push(agnda);
                      //     }
                      //   }
                      //   //alert(yd);
                        
                      //   console.log("--meeting--",objResult) ; 
                      //   //---------------------working ----------------------
                      //   document.getElementById("agnda_1").style.display = '';
                      //   document.getElementById('agnda_1').disabled = false; 
                      //   document.getElementById("agnda_2").style.display = 'none';
                      //   //---------------------working ----------------------
                        
                      //   if(agnt_1 == agnda){
                      //   //------------append meeting-------------------
                      //     if (!array1.includes(agnda)) {
                      //       //alert('-----3------'+agnda);
                      //       // alert(array)
                      //         node = document.createElement("Option");
                      //         document.getElementById("agnda_1").appendChild(node);
                      //         textnode = document.createTextNode(agnda);
                      //         node.appendChild(textnode);
                      //         node.value=agnda;
                      //         node.name=i;
                      //         array1.push(agnda);
                      //         document.getElementById("agnda_1").appendChild(node);
                                
                      //         i++;
                      //     }
                      //   //------------append meeting------------------- 
                      //   }
                      //   if(agnt_2 == agnda){
                      //     //------------append meeting-------------------
                      //       if (!array1.includes(agnda)) {
                      //         //alert('-----4------'+agnda);
                      //         // alert(array)
                      //           node = document.createElement("Option");
                      //           document.getElementById("agnda_1").appendChild(node);
                      //           textnode = document.createTextNode(agnda);
                      //           node.appendChild(textnode);
                      //           node.value=agnda;
                      //           node.name=i;
                      //           array1.push(agnda);
                      //           document.getElementById("agnda_1").appendChild(node);
                                  
                      //           i++;
                      //       }
                      //     //------------append meeting------------------- 
                      //     }
                      //     if(agnt_2 == '' || agnt_1 == 'ALL' ){
                      //       //------------append meeting-------------------
                      //         if (!array1.includes(agnda)) {
                      //           //alert('-----4------'+agnda);
                      //           // alert(array)
                      //             node = document.createElement("Option");
                      //             document.getElementById("agnda_1").appendChild(node);
                      //             textnode = document.createTextNode(agnda);
                      //             node.appendChild(textnode);
                      //             node.value=agnda;
                      //             node.name=i;
                      //             array1.push(agnda);
                      //             document.getElementById("agnda_1").appendChild(node);
                                    
                      //             i++;
                      //         }
                      //       //------------append meeting------------------- 
                      //       }

                          
                      // }
                    // }
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
                    }
                  }
              ///------------------------------ to year ----------------------------

    //---------------------working ----------------------

    console.log(document.getElementById("mtng_1").value);
    console.log(document.getElementById("mtng_2").value);
    console.log(document.getElementById("Years_1").value);
    console.log(document.getElementById("Years_2").value);


    var year_1 = document.getElementById("Years_1").value;
    var year_2 = document.getElementById("Years_2").value;
    //   
    //----------------20220518
    //---------------------working ----------------------
    // document.getElementById("mtng_1").style.display = 'none';
    // document.getElementById('mtng_1').disabled = true; 
    // document.getElementById("mtng_2").style.display = '';
    //---------------------working ----------------------
    //----------------20220518

    }

// -------- 20220518 --------

//--------20220521-----------

    if((mtng_1 != '' && agnt_1 != '' ) && (mtng_1 != 'ALL' && agnt_1 != 'ALL' )){
      alert("mtng 3 all");

      var objResult={
        "FromYears":[],
        "MeetingNo":[],
        "agendatopic":[]
      }

      if( mtng_2 != ''){
        mtng_1 = mtng_2;
        mtng_2='';
      }

      if( agnt_2 != ''){
        agnt_1 = agnt_2
        agnt_2='';
      }
      console.log("BOTH MATCH");
      console.log(mtng_1);
      console.log(agnt_1);
      console.log(year_1);
      console.log(year_2);

          if( agnt_1 != '' && mtng_1 != '' ){
            for (x in a){
                d=a[x]
                yd=d[2]
                md=d[3]
                agnda=d[4]
                kd=d[1]
                yd1=d[5]
                yd2=d[6]
                // document.getElementById("mtng_1").style.display = '';
                // document.getElementById('mtng_1').disabled = false; 
                // document.getElementById("mtng_2").style.display = 'none';
              // for( var j = year_1; j<= year_2; j++){      
              if(md == mtng_1 && agnt_1 == agnda){
                //  //if(agnt_1 == agnda){
                  // if(agnt_1 == agnda){
                  //   node = document.createElement("Option");
                  //   document.getElementById("agnda_1").appendChild(node);
                  //   textnode = document.createTextNode(agnt_1);
                  //   node.appendChild(textnode);
                  //   node.value=agnda;
                  //   array1.push(agnda);
                  //   node.name=1;
                  //   node.selected = true;
                  //   document.getElementById("agnda_1").appendChild(node);
                  // }
                
                
                  // //----------pre select -------
                  // console.log(array1);
                  // //alert(agnt_1);

                  // //}
                  if((agnda == agnt_1)){
                    if (!objResult.FromYears.includes(yd)) {
                      objResult.FromYears.push(yd);
                    }
                  
                    //objResult.FromYears.push(yd);
                    if (!objResult.MeetingNo.includes(md)) {
                    objResult.MeetingNo.push(md);
                    }
                    if (!objResult.agendatopic.includes(agnda)) {
                    objResult.agendatopic.push(agnda);
                    }

                }
                          
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
                    }
                  }
              ///------------------------------ to year ----------------------------
         }

        //   if(count == 0){
        //     alert("Agenda: "+agnt_1+" and Meeting No. is not present at Year: "+year_2);
        //   }



      console.log("BOTH MATCH");
      // alert(mtng_1);
      // alert(agnt_1);
      // alert(year_1);
      // alert(year_2);

    }


    if(mtng_1 != "" && agnt_2 != "" ) {
      alert("4")

      if(mtng_2 == '' && mtng_1 == ''){
        //pass
      }
      if(mtng_2 == '' && mtng_1 != ''){
        //pass
      }
      if(mtng_2 != '' && mtng_1 == ''){
        mtng_1 = mtng_2;
      }
    
      if(agnt_2 == '' && agnt_1 == ''){
        //pass
      }
      if(agnt_2 == '' && agnt_1 != ''){
        //pass
      }
      if(agnt_2 != '' && agnt_1 == ''){
        agnt_1 = agnt_2;
      }
      //alert("--mtng1 all--")
      //alert(agnt_1);
      //alert(year_1);
      //alert(year_2);
      //alert(objResult);
      //alert("mtng 2 all");
      agnt_1; 
      agnt_2; 
      year_1;
      year_2; 
      mtng_1; 
      mtng_2; 


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
                        // document.getElementById("mtng_1").style.display = '';
                        // document.getElementById('mtng_1').disabled = false; 
                        // document.getElementById("mtng_2").style.display = 'none';
                        // for( var j = year_1; j<= year_2; j++){      
                      if(agnt_1 == agnda || agnt_2 == agnda ){
                        
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
                          //---------------------working ----------------------
                          document.getElementById("agnda_1").style.display = ''; 
                          document.getElementById('agnda_1').disabled = false; 
                          document.getElementById("agnda_2").style.display = 'none'; 
                          //---------------------working ----------------------

                        
                        
                        //---------------------working ----------------------
                        //------------append meeting-------------------
                        if (!array1.includes(agnda)) {
                              // alert(array)
                              node = document.createElement("Option");
                              document.getElementById("agnda_1").appendChild(node);
                              textnode = document.createTextNode(agnda);
                              node.appendChild(textnode);
                              node.value=agnda;
                              node.name=i;
                              array1.push(agnda);
                              node.selected = true;
                              document.getElementById("agnda_1").appendChild(node);
                                
                          }      
                      } 
                      //------------append meeting-------------------   agnda
                      //---------------------working ----------------------
                      if (!array1.includes(agnda)) {
                            node = document.createElement("Option");
                            document.getElementById("agnda_1").appendChild(node);
                            textnode = document.createTextNode(agnda);
                            node.appendChild(textnode);
                            node.value=agnda;
                            node.name=i;
                            array1.push(agnda);
                            
                            document.getElementById("agnda_1").appendChild(node);
                          }
                          
                      //}

                      // if(md == mtng_2 || md == mtng_1){
                      //   if(agnt_1 == agnda){
                      //     //alert('-----1------'+agnda);
                      //     if (!objResult.FromYears.includes(yd) ) {
                      //       objResult.FromYears.push(yd);
                      //     }
                        
                      //     //objResult.FromYears.push(yd);
                      //     if (!objResult.MeetingNo.includes(md) ) {
                      //     objResult.MeetingNo.push(md);
                      //     }
                      //     if (!objResult.agendatopic.includes(agnda) ) {
                      //     objResult.agendatopic.push(agnda);
                      //     }
                      //   }
                      //   if(agnt_2 == agnda){
                      //     //alert('-----2------'+agnda);
                      //     if (!objResult.FromYears.includes(yd) && agnt_2 == agnda) {
                      //       objResult.FromYears.push(yd);
                      //     }
                        
                      //     //objResult.FromYears.push(yd);
                      //     if (!objResult.MeetingNo.includes(md) ) {
                      //     objResult.MeetingNo.push(md);
                      //     }
                      //     if (!objResult.agendatopic.includes(agnda) ) {
                      //     objResult.agendatopic.push(agnda);
                      //     }
                      //   }
                      //   if(agnt_1 == 'ALL' || agnt_2 == ''){
                      //     //alert('-----3------'+agnda);
                      //     if (!objResult.FromYears.includes(yd) ) {
                      //       objResult.FromYears.push(yd);
                      //     }
                        
                      //     //objResult.FromYears.push(yd);
                      //     if (!objResult.MeetingNo.includes(md) ) {
                      //     objResult.MeetingNo.push(md);
                      //     }
                      //     if (!objResult.agendatopic.includes(agnda) ) {
                      //     objResult.agendatopic.push(agnda);
                      //     }
                      //   }
                      //   //alert(yd);
                        
                      //   console.log("--meeting--",objResult) ; 
                      //   //---------------------working ----------------------
                      //   document.getElementById("agnda_1").style.display = '';
                      //   document.getElementById('agnda_1').disabled = false; 
                      //   document.getElementById("agnda_2").style.display = 'none';
                      //   //---------------------working ----------------------
                        
                      //   if(agnt_1 == agnda){
                      //   //------------append meeting-------------------
                      //     if (!array1.includes(agnda)) {
                      //       //alert('-----3------'+agnda);
                      //       // alert(array)
                      //         node = document.createElement("Option");
                      //         document.getElementById("agnda_1").appendChild(node);
                      //         textnode = document.createTextNode(agnda);
                      //         node.appendChild(textnode);
                      //         node.value=agnda;
                      //         node.name=i;
                      //         array1.push(agnda);
                      //         document.getElementById("agnda_1").appendChild(node);
                                
                      //         i++;
                      //     }
                      //   //------------append meeting------------------- 
                      //   }
                      //   if(agnt_2 == agnda){
                      //     //------------append meeting-------------------
                      //       if (!array1.includes(agnda)) {
                      //         //alert('-----4------'+agnda);
                      //         // alert(array)
                      //           node = document.createElement("Option");
                      //           document.getElementById("agnda_1").appendChild(node);
                      //           textnode = document.createTextNode(agnda);
                      //           node.appendChild(textnode);
                      //           node.value=agnda;
                      //           node.name=i;
                      //           array1.push(agnda);
                      //           document.getElementById("agnda_1").appendChild(node);
                                  
                      //           i++;
                      //       }
                      //     //------------append meeting------------------- 
                      //     }
                      //     if(agnt_2 == '' || agnt_1 == 'ALL' ){
                      //       //------------append meeting-------------------
                      //         if (!array1.includes(agnda)) {
                      //           //alert('-----4------'+agnda);
                      //           // alert(array)
                      //             node = document.createElement("Option");
                      //             document.getElementById("agnda_1").appendChild(node);
                      //             textnode = document.createTextNode(agnda);
                      //             node.appendChild(textnode);
                      //             node.value=agnda;
                      //             node.name=i;
                      //             array1.push(agnda);
                      //             document.getElementById("agnda_1").appendChild(node);
                                    
                      //             i++;
                      //         }
                      //       //------------append meeting------------------- 
                      //       }

                          
                      // }
                    // }
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
                    // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                    // for (let index = 0; index < objResult.FromYears.length; index++) {
                    
                    //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                    //    //
                    // }
                    // $("#Years_1").html(Options);
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
                  // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                  // for (let index = 0; index < objResult.FromYears.length; index++) {
                  
                  //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                  //    //
                  // }
                  // $("#Years_1").html(Options);
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
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
                      // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
                      // for (let index = 0; index < objResult.FromYears.length; index++) {
                      
                      //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
                      //    //
                      // }
                      // $("#Years_1").html(Options);
                    }
                  }
              ///------------------------------ to year ----------------------------

    //---------------------working ----------------------

    console.log(document.getElementById("mtng_1").value);
    console.log(document.getElementById("mtng_2").value);
    console.log(document.getElementById("Years_1").value);
    console.log(document.getElementById("Years_2").value);


    var year_1 = document.getElementById("Years_1").value;
    var year_2 = document.getElementById("Years_2").value;
    //   
    //----------------20220518
    //---------------------working ----------------------
    // document.getElementById("mtng_1").style.display = 'none';
    // document.getElementById('mtng_1').disabled = true; 
    // document.getElementById("mtng_2").style.display = '';
    //---------------------working ----------------------
    //----------------20220518

    }


// if( agnt_1 == 'ALL' ){
//   // document.getElementById("agnda_1").value = 'ALL';  
//   document.getElementById("mtng_1").value = 'ALL';  

//   // if( mtng_1 == 'ALL' && agnt_1 != 'ALL'  ){
//     alert('inside2');

    

//     var objResult={
//       "FromYears":[],
//       "MeetingNo":[],
//       "agendatopic":[]
//     }

    
//     for (x in a){
//             d=a[x]
//             yd=d[2]
//             md=d[3]
//             agnda=d[4]
//             kd=d[1]
//             yd1=d[5]
//             yd2=d[6]

//             console.log(array_agnt);
//               //alert("--mt1--",mtng_1);

//             // }
//             if (!objResult.FromYears.includes(yd) ) {
//               objResult.FromYears.push(yd);
//             }
          
//             //objResult.FromYears.push(yd);
//             if (!objResult.MeetingNo.includes(md)) {
//             objResult.MeetingNo.push(md);
//             }
//             if (!objResult.agendatopic.includes(agnda)) {
//             objResult.agendatopic.push(agnda);
//             }
                  
//       }
      

//   // }
//        objResult.FromYears.sort(function(a, b){return a - b});


//       //debugger;
//       //alert(year_1);
//       if(year_1 == 'a1'){
//         if(objResult.FromYears.length>0){
//           $("#Years_1").html("");
//           var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//           for (let index = 0; index < objResult.FromYears.length; index++) {
          
//             Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             //
//           }
//           $("#Years_1").html(Options);

//         }else{
//           $("#Years_1").html("");
//           // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//           // for (let index = 0; index < objResult.FromYears.length; index++) {
          
//           //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//           //    //
//           // }
//           // $("#Years_1").html(Options);
//         }
//         }


//     if(year_1 != 'a1'){
//       if(objResult.FromYears.length>0){
//         $("#Years_1").html("");
//         var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//         for (let index = 0; index < objResult.FromYears.length; index++) {
        
//           if(objResult.FromYears[index] != year_1){
//             Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             }//
//             if(objResult.FromYears[index] == year_1){
//               Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//               }
//         }
//         $("#Years_1").html(Options);

//       }else{
//         $("#Years_1").html("");
//         // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//         // for (let index = 0; index < objResult.FromYears.length; index++) {
        
//         //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//         //    //
//         // }
//         // $("#Years_1").html(Options);
//       }
//       }
//     ///----------------------------- from year ------------------------------

//     ///------------------------------ to year ----------------------------
//     //debugger;
//     //alert(year_2);
//     if(year_2 == 'a2'){
//           if(objResult.FromYears.length>0){
//             $("#Years_2").html("");
//             var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
//             for (let index = 0; index < objResult.FromYears.length; index++) {
            
//               Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//               //
//             }
//             $("#Years_2").html(Options);

//           }else{
//             $("#Years_2").html("");
//             // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//             // for (let index = 0; index < objResult.FromYears.length; index++) {
            
//             //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             //    //
//             // }
//             // $("#Years_1").html(Options);
//           }
//       }


//         if(year_2 != 'a2'){
//           if(objResult.FromYears.length>0){
//             $("#Years_2").html("");
//             var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
//             for (let index = 0; index < objResult.FromYears.length; index++) {
            
//               if(objResult.FromYears[index] != year_2){
//                 Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//                 }//
//                 if(objResult.FromYears[index] == year_2){
//                   Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//                   }
//             }
//             $("#Years_2").html(Options);

//           }else{
//             $("#Years_2").html("");
//             // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//             // for (let index = 0; index < objResult.FromYears.length; index++) {
            
//             //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             //    //
//             // }
//             // $("#Years_1").html(Options);
//           }
//           }
//     ///------------------------------ to year ----------------------------

// }
//----------------------------------------------------------------------------------------------

// if( agnt_2 == 'ALL' &&  mtng_2 == 'ALL'){
//   //--------------------------- from year --------------------------------
//   //alert("Actual")
//   //alert(mtng_1);
//   //alert(year_1);
//   //alert(year_2);
//   // var mtng_1 = document.getElementById("mtng_1").value=mtng_1;
//   // var year_1 = document.getElementById("Years_1").value=year_1;
//   // var year_2 = document.getElementById("Years_2").value=year_2;


//      node = document.createElement("Option");
//      document.getElementById("mtng_1").appendChild(node);
//      textnode = document.createTextNode(mtng_1);
//      node.appendChild(textnode);
//      node.value=md; //mtng_1 //20220518
//      array_agnt.push(md); //mtng_1 //20220518
//      node.name=1;
//      node.selected = true;
//      document.getElementById("mtng_1").appendChild(node);


//       //debugger;
//       //alert(year_1);
//       if(year_1 == 'a1'){
//         if(objResult.FromYears.length>0){
//           $("#Years_1").html("");
//           var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//           for (let index = 0; index < objResult.FromYears.length; index++) {
          
//             Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             //
//           }
//           $("#Years_1").html(Options);

//         }else{
//           $("#Years_1").html("");
//           // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//           // for (let index = 0; index < objResult.FromYears.length; index++) {
          
//           //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//           //    //
//           // }
//           // $("#Years_1").html(Options);
//         }
//         }


//     if(year_1 != 'a1'){
//       if(objResult.FromYears.length>0){
//         $("#Years_1").html("");
//         var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//         for (let index = 0; index < objResult.FromYears.length; index++) {
        
//           if(objResult.FromYears[index] != year_1){
//             Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             }//
//             if(objResult.FromYears[index] == year_1){
//               Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//               }
//         }
//         $("#Years_1").html(Options);

//       }else{
//         $("#Years_1").html("");
//         // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//         // for (let index = 0; index < objResult.FromYears.length; index++) {
        
//         //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//         //    //
//         // }
//         // $("#Years_1").html(Options);
//       }
//       }
//     ///----------------------------- from year ------------------------------

//     ///------------------------------ to year ----------------------------
//     //debugger;
//     //alert(year_2);
//     if(year_2 == 'a2'){
//           if(objResult.FromYears.length>0){
//             $("#Years_2").html("");
//             var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
//             for (let index = 0; index < objResult.FromYears.length; index++) {
            
//               Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//               //
//             }
//             $("#Years_2").html(Options);

//           }else{
//             $("#Years_2").html("");
//             // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//             // for (let index = 0; index < objResult.FromYears.length; index++) {
            
//             //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             //    //
//             // }
//             // $("#Years_1").html(Options);
//           }
//       }


//         if(year_2 != 'a2'){
//           if(objResult.FromYears.length>0){
//             $("#Years_2").html("");
//             var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
//             for (let index = 0; index < objResult.FromYears.length; index++) {
            
//               if(objResult.FromYears[index] != year_2){
//                 Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//                 }//
//                 if(objResult.FromYears[index] == year_2){
//                   Options=Options+"<option selected='selected' class='h-1/3' value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//                   }
//             }
//             $("#Years_2").html(Options);

//           }else{
//             $("#Years_2").html("");
//             // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//             // for (let index = 0; index < objResult.FromYears.length; index++) {
            
//             //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//             //    //
//             // }
//             // $("#Years_1").html(Options);
//           }
//           }
//     ///------------------------------ to year ----------------------------

// }

      if( agnt_2 == 'ALL' ){
              
        document.getElementById("agnda_2").value = 'ALL'; 

        // if( mtng_1 == 'ALL' && agnt_1 != 'ALL'  ){
          // alert('inside2');

          

          var objResult={
            "FromYears":[],
            "MeetingNo":[],
            "agendatopic":[]
          }

          
          for (x in a){
                  d=a[x]
                  yd=d[2]
                  md=d[3]
                  agnda=d[4]
                  kd=d[1]
                  yd1=d[5]
                  yd2=d[6]

                  console.log(array_agnt);
                    //alert("--mt1--",mtng_1);

                  // }
                  if (!objResult.FromYears.includes(yd) ) {
                    objResult.FromYears.push(yd);
                  }
                
                  //objResult.FromYears.push(yd);
                  if (!objResult.MeetingNo.includes(md)) {
                  objResult.MeetingNo.push(md);
                  }
                  if (!objResult.agendatopic.includes(agnda)) {
                  objResult.agendatopic.push(agnda);
                  }
                        
            }
            

        // }
        objResult.FromYears.sort(function(a, b){return a - b});   
        // alert("Inside 2");

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
            // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
            // for (let index = 0; index < objResult.FromYears.length; index++) {
            
            //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
            //    //
            // }
            // $("#Years_1").html(Options);
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
          // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
          // for (let index = 0; index < objResult.FromYears.length; index++) {
          
          //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
          //    //
          // }
          // $("#Years_1").html(Options);
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
              // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
              // for (let index = 0; index < objResult.FromYears.length; index++) {
              
              //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
              //    //
              // }
              // $("#Years_1").html(Options);
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
              // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
              // for (let index = 0; index < objResult.FromYears.length; index++) {
              
              //   Options=Options+"<option value='"+yd+"'>"+objResult.FromYears[index].toString()+" - "+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
              //    //
              // }
              // $("#Years_1").html(Options);
            }
            }
      ///------------------------------ to year ----------------------------
        

        
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

  // console.log(agnt_2);
  // console.log(agnt_1);
  // console.log(year_1);
  // console.log(year_2);
  // console.log(mtng_2);
  // console.log(mtng_1);
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

    // // ------------------------------------
    // let element = document.getElementById("agnda_1");
    // while (element.firstChild) {
    //   element.removeChild(element.firstChild);
    // }
    // // -----------------------------

    // // ------------------------------------
    // let element1 = document.getElementById("mtng_1");
    // while (element1.firstChild) {
    //   element1.removeChild(element1.firstChild);
    // }
    // // -----------------------------

      //--------- ONLY DATE MATCHING ---------------------
  if(((agnt_1 == '' ) && (mtng_1 == '' ))  ){
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
                                node = document.createElement("Option");
                                document.getElementById("agnda_1").appendChild(node);
                                textnode = document.createTextNode(agnda);
                                node.appendChild(textnode);
                                node.value=agnda;
                                node.name=i;
                                array2.push(agnda);
                                document.getElementById("agnda_1").appendChild(node);
                                  
                                
                            }
                          //------------append agenda------------------- 


                          //---------------------working ----------------------
                          document.getElementById("mtng_1").style.display = '';
                          document.getElementById('mtng_1').disabled = false; 
                          document.getElementById("mtng_2").style.display = 'none';
                          //---------------------working ----------------------
                          
                          
                          //------------append meeting-------------------
                            if (!array2.includes(md)) {
                              // alert(array)
                                node = document.createElement("Option");
                                document.getElementById("mtng_1").appendChild(node);
                                textnode = document.createTextNode(md);
                                node.appendChild(textnode);
                                node.value=md;
                                node.name=i;
                                array2.push(md);
                                document.getElementById("mtng_1").appendChild(node);
                                  
                                i++;
                            }
                          //------------append meeting-------------------
                          

                            
                        // }

                    }  

                    
                  // }
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


  // //--------- MEETING MATCHING ---------------------
  // if((agnt_2 == 'ALL' || agnt_1 == 'ALL') || (agnt_1 == '' || agnt_2 == '') ){
  //   // var array2 = [];
  //   // var array_agnt2 = [];
        

  //       if(mtng_2 == '' && mtng_1 == ''){
  //         //pass
  //       }
  //       if(mtng_2 == '' && mtng_1 != ''){
  //         //pass
  //       }
  //       if(mtng_2 != '' && mtng_1 == ''){
  //         mtng_1 = mtng_2;
  //         mtng2 = '';
  //       }

  //       var startyear = Math.max(...from_year_list);
  //       if(year_2 == 'a2'){
  //         year_2=startyear
  //       }

  //       if(year_1 == 'a1'){
  //         year_1=startyear
  //       }


  //       //------------ pre select meeting -------------------

  //       if(mtng_1 != ''  ){
  //         // //---------------------working ----------------------
  //           document.getElementById("mtng_1").style.display = '';
  //           document.getElementById('mtng_1').disabled = false; 
  //           document.getElementById("mtng_2").style.display = 'none';
  //         // //---------------------working ----------------------
  //         if(!array_agnt2.includes(mtng_1)){
  //           node = document.createElement("Option");
  //           document.getElementById("mtng_1").appendChild(node);
  //           textnode = document.createTextNode(mtng_1);
  //           node.appendChild(textnode);
  //           node.value=mtng_1;
  //           array_agnt2.push(mtng_1);
  //           node.name=1;
  //           document.getElementById("mtng_1").appendChild(node);
  //         }
          
  //       }


  //       if(mtng_2 != ''){
  //         if(!array_agnt2.includes(mtng_2)){
  //         node = document.createElement("Option");
  //         document.getElementById("mtng_1").appendChild(node);
  //         textnode = document.createTextNode(mtng_2);
  //         node.appendChild(textnode);
  //         node.value=mtng_2;
  //         array_agnt2.push(mtng_2);
  //         node.name=1;
  //         document.getElementById("mtng_1").appendChild(node);
  //         }
  //       }
        

  //       //------------ pre select meeting -------------------

  //       //------------append agenda-------------------

  //       if(!array2.includes("ALL")){
  //           node = document.createElement("Option");
  //           document.getElementById("agnda_1").appendChild(node);
  //           textnode = document.createTextNode("ALL");
  //           node.appendChild(textnode);
  //           node.value="ALL";
  //           array2.push("ALL");
  //           node.name=1;
  //           document.getElementById("agnda_1").appendChild(node);

  //       }
        

  //       //------------append agenda-------------------

  //     if(mtng_1 != '' && mtng_1 != 'ALL'){
  //       var objResult={
  //         "FromYears":[],
  //         "MeetingNo":[],
  //         "agendatopic":[]
  //       }
        
            
  //       var i=1;
  //          for (x in a){
  //           // console.log(agnt_2);
  //           // console.log(agnt_1);
  //           // console.log(year_1);
  //           // console.log(year_2);
  //           // console.log(mtng_2);
  //           // console.log(mtng_1);
  //           console.log("MEETING MATCH");
  //                     d=a[x]
  //                     yd=d[2]
  //                     md=d[3]
  //                     agnda=d[4]
  //                     kd=d[1]
  //                     yd1=d[5]
  //                     yd2=d[6]

  //                   if(yd >= year_1 && yd <= year_2 ){

  //                       if(md == mtng_2 || md == mtng_1){
                        
                        

                        
  //                         console.log("--meeting--",objResult) ; 
  //                         //---------------------working ----------------------
  //                         document.getElementById("agnda_1").style.display = '';
  //                         document.getElementById('agnda_1').disabled = false; 
  //                         document.getElementById("agnda_2").style.display = 'none';
  //                         //---------------------working ----------------------
                          
                          
  //                         //------------append agenda-------------------
  //                           if (!array2.includes(agnda)) {
  //                             // alert(array)
  //                               node = document.createElement("Option");
  //                               document.getElementById("agnda_1").appendChild(node);
  //                               textnode = document.createTextNode(agnda);
  //                               node.appendChild(textnode);
  //                               node.value=agnda;
  //                               node.name=i;
  //                               array2.push(agnda);
  //                               document.getElementById("agnda_1").appendChild(node);
                                  
  //                               i++;
  //                           }
  //                         //------------append agenda------------------- 

  //                             //-------------------- 20220519-----------------
  //                         // //---------------------working ----------------------
  //                         // document.getElementById("mtng_1").style.display = '';
  //                         // document.getElementById('mtng_1').disabled = false; 
  //                         // document.getElementById("mtng_2").style.display = 'none';
  //                         // //---------------------working ----------------------
                          
                          
  //                         // //------------append meeting-------------------
  //                         //   if (!array_agnt2.includes(md)) {
  //                         //     // alert(array)
  //                         //       node = document.createElement("Option");
  //                         //       document.getElementById("mtng_1").appendChild(node);
  //                         //       textnode = document.createTextNode(md);
  //                         //       node.appendChild(textnode);
  //                         //       node.value=md;
  //                         //       node.name=i;
  //                         //       array_agnt2.push(md);
  //                         //       document.getElementById("mtng_1").appendChild(node);
                                  
  //                         //       i++;
  //                         //   }
  //                         // //------------append meeting-------------------
                          
  //                         //-------------------- 20220519-----------------
                            
  //                       }

  //                   }  
    
                    
  //                 // }
  //           }

  //     }  

        
  //           //--------------------------- from year --------------------------------
  //           //debugger;
  //           // if( agnt_1 != ''){

  //                     ///----------------------------- from year ------------------------------

  //                     ///------------------------------ to year ----------------------------
  //                     //debugger;

  //               // }
  //   }
  //   // ---------- 20220518 ---------



  //        //--------- MEETING MATCHING ---------------------

  //        //--------- AGENDA MATCHING ---------------------
  // if((mtng_1 == 'ALL' || mtng_2 == 'ALL') || (mtng_1 == '' || mtng_2 == '')){

  //   if(mtng_2 == '' && mtng_1 == ''){
  //     //pass
  //   }
  //   if(mtng_2 == '' && mtng_1 != ''){
  //     //pass
  //   }
  //   if(mtng_2 != '' && mtng_1 == ''){
  //     mtng_1 = mtng_2;
  //   }

  //   if(agnt_2 == '' && agnt_1 == ''){
  //     //pass
  //   }
  //   if(agnt_2 == '' && agnt_1 != ''){
  //     //pass
  //   }
  //   if(agnt_2 != '' && agnt_1 == ''){
  //     agnt_1 = agnt_2;
  //   }

  //   var startyear = Math.max(...from_year_list);
  //   if(year_2 == 'a2'){
  //     year_2=startyear
  //   }

  //   if(year_1 == 'a1'){
  //     year_1=startyear
  //   }
  //   // var array2 = [];
  //   // var array_agnt2 = [];

    
  //       // console.log(agnt_2);
  //       // console.log(agnt_1);
  //       // console.log(year_1);
  //       // console.log(year_2);
  //       // console.log(mtng_2);
  //       // console.log(mtng_1);
  //       console.log("AGENDA MATCH");

  //       for (x in a){
  //       d=a[x]
  //       yd=d[2]
  //       md=d[3]
  //       agnda=d[4]
  //       kd=d[1]
  //       yd1=d[5]
  //       yd2=d[6]
    
  //       if(agnda == agnt_2 || agnda == agnt_1){
  //         if(mtng_1 == md && !array_agnt2.includes(md)){
  //          node = document.createElement("Option");
  //          document.getElementById("mtng_1").appendChild(node);
  //          textnode = document.createTextNode(mtng_1);
  //          node.appendChild(textnode);
  //          node.value=md; //mtng_1 //20220518
  //          array_agnt2.push(md); //mtng_1 //20220518
  //          node.name=1;
  //          node.selected = true;
  //          document.getElementById("mtng_1").appendChild(node);
           
  //           //----------pre select -------


  //           //--------------------------------------------------------------


  //           //------------append agenda-------------------

  //       if(agnt_1 != '' && agnt_1 != 'ALL'){
  //         var objResult={
  //           "FromYears":[],
  //           "MeetingNo":[],
  //           "agendatopic":[]
  //         }
          
              
  //         var i=1;
  //            for (x in a){
  //             console.log(agnt_2);
  //             console.log(agnt_1);
  //             console.log(year_1);
  //             console.log(year_2);
  //             console.log(mtng_2);
  //             console.log(mtng_1);
  //                       d=a[x]
  //                       yd=d[2]
  //                       md=d[3]
  //                       agnda=d[4]
  //                       kd=d[1]
  //                       yd1=d[5]
  //                       yd2=d[6]
  
  //                     if(yd >= year_1 && yd <= year_2 ){
  
  //                         if(agnda == agnt_2 || agnda == agnt_1){
                          
                          
  
                          
  //                           console.log("--meeting--",objResult) ; 
  //                           // //---------------------working ----------------------
  //                           // document.getElementById("agnda_1").style.display = '';
  //                           // document.getElementById('agnda_1').disabled = false; 
  //                           // document.getElementById("agnda_2").style.display = 'none';
  //                           // //---------------------working ----------------------
                            
                            
  //                           // //------------append agenda-------------------
  //                           //   if (!array2.includes(md)) {
  //                           //     // alert(array)
  //                           //       node = document.createElement("Option");
  //                           //       document.getElementById("agnda_1").appendChild(node);
  //                           //       textnode = document.createTextNode(agnda);
  //                           //       node.appendChild(textnode);
  //                           //       node.value=agnda;
  //                           //       node.name=i;
  //                           //       array2.push(agnda);
  //                           //       document.getElementById("agnda_1").appendChild(node);
                                    
  //                           //       i++;
  //                           //   }
  //                           // //------------append agenda------------------- 
  
  
  //                           //---------------------working ----------------------
  //                           document.getElementById("mtng_1").style.display = '';
  //                           document.getElementById('mtng_1').disabled = false; 
  //                           document.getElementById("mtng_2").style.display = 'none';
  //                           //---------------------working ----------------------
                            
                            
  //                           //------------append meeting-------------------
  //                             if (!array2.includes(agnda)) {
  //                               // alert(array)
  //                                 node = document.createElement("Option");
  //                                 document.getElementById("mtng_1").appendChild(node);
  //                                 textnode = document.createTextNode(agnda);
  //                                 node.appendChild(textnode);
  //                                 node.value=agnda;
  //                                 node.name=i;
  //                                 array2.push(agnda);
  //                                 document.getElementById("mtng_1").appendChild(node);
                                    
  //                                 i++;
  //                             }
  //                           //------------append meeting-------------------
                            
      
                              
  //                         }
  
  //                     }  
      
                      
  //                   // }
  //             }

  //          //--------------------------------------------------------------
  //           console.log(array_agnt);
  //          alert("--mt1--",mtng_1);

  //         }
                     
  //        }
  //      }
  //   }

  // }

  //        //--------- AGENDA MATCHING ---------------------

         //--------- BOTH MATCHING ---------------------
  if((mtng_1 != '' && agnt_1 != '' ) && (mtng_1 != 'ALL' && agnt_1 != 'ALL' ) ){   // 20220524  // && -> ||
   // alert("Inside From datecheck")

    if( mtng_2 != ''){
      mtng_1 = mtng_2;
      mtng_2='';
    }

    if( agnt_2 != ''){
      agnt_1 = agnt_2
      agnt_2='';
    }
    console.log("BOTH MATCH");
    console.log(mtng_1);
    console.log(agnt_1);
    console.log(year_1);
    console.log(year_2);
    // if( agnt_1 != '' && mtng_1 != ''){
    //   for (x in a){
    //       d=a[x]
    //       yd=d[2]
    //       md=d[3]
    //       agnda=d[4]
    //       kd=d[1]
    //       yd1=d[5]
    //       yd2=d[6]
    //       // document.getElementById("mtng_1").style.display = '';
    //       // document.getElementById('mtng_1').disabled = false; 
    //       // document.getElementById("mtng_2").style.display = 'none';
    //     // for( var j = year_1; j<= year_2; j++){      
    //     if(md == mtng_1 && agnda == agnt_1 && (yd == year_2)){
    //     //  //if(agnt_1 == agnda){
    //       // node = document.createElement("Option");
    //       // document.getElementById("agnda_1").appendChild(node);
    //       // textnode = document.createTextNode(agnt_1);
    //       // node.appendChild(textnode);
    //       // node.value=agnda;
    //       // array1.push(agnda);
    //       // node.name=1;
    //       // node.selected = true;
    //       // document.getElementById("agnda_1").appendChild(node);
          
    //       // //----------pre select -------
    //       // console.log(array1);
    //       // //alert(agnt_1);

    //       // //}
    //       count = count + 1;
                    
    //       }
    //   }
        
    // }

    // if(count == 0){
    //   alert("Inside Both MatchingAgenda: "+agnt_1+" and Meeting: is not present at Year: "+year_2);
    // }



    console.log("BOTH MATCH");
    // alert(mtng_1);
    // alert(agnt_1);
    // alert(year_1);
    // alert(year_2);

  }

         //--------- BOTH MATCHING ---------------------
}



// // ################################## ON CHANGE YEAR FIELD EFFECT ON AGENDA AND MEETING FIELD ###################################



function Submit_check(pdf_data){
  var a = pdf_data;
  console.log("DATE MATCH-------------");
  console.log(document.getElementById("Years_1").value);
  console.log(document.getElementById("Years_2").value);
  console.log(document.getElementById("agnda_1").value);
  console.log(document.getElementById("agnda_2").value);
  console.log(document.getElementById("mtng_1").value);
  console.log(document.getElementById("mtng_2").value);

  var agnt_2 = document.getElementById("agnda_2").value;
  var agnt_1 = document.getElementById("agnda_1").value;
  var year_1 = document.getElementById("Years_1").value;
  var year_2 = document.getElementById("Years_2").value;
  var mtng_2 = document.getElementById("mtng_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;

  if(mtng_2 == '' && mtng_1 == ''){
    //pass
  }
  if(mtng_2 == '' && mtng_1 != ''){
    //pass
  }
  if(mtng_2 != '' && mtng_1 == ''){
    mtng_1 = mtng_2;
  }

  if(agnt_2 == '' && agnt_1 == ''){
    //pass
  }
  if(agnt_2 == '' && agnt_1 != ''){
    //pass
  }
  if(agnt_2 != '' && agnt_1 == ''){
    agnt_1 = agnt_2;
  }

  var count = 0;

  var i=1;
  for (x in a){
          // console.log(agnt_2);
          // console.log(agnt_1);
          // console.log(year_1);
          // console.log(year_2);
          // console.log(mtng_2);
          // console.log(mtng_1);
          
                    d=a[x]
                    yd=d[2]
                    md=d[3]
                    agnda=d[4]
                    kd=d[1]
                    yd1=d[5]
                    yd2=d[6]

          if(agnt_2 == agnda && mtng_1 == md && year_1 == yd && year_2 == yd && year_1 >= year_2){
            count = 1;
          }

          if(agnt_1 == agnda && mtng_2 == md && year_1 == yd && year_2 == yd && year_1 >= year_2 ){
            count = 2;
          }
          if(agnt_1 == agnda && mtng_1 == md && year_1 == yd && year_2 == yd  && year_1 >= year_2){
            count = 3;
          }
          if(agnt_1 == 'ALL' && mtng_1 == 'ALL' && year_1 == yd && year_2 == yd  && year_1 >= year_2){
            count = 4;
          }
          if(agnt_1 == 'ALL' && mtng_1 == md && year_1 == yd && year_2 == yd  && year_1 >= year_2){
            count = 5;
          }
          if(agnt_1 == agnda && mtng_1 == 'ALL' && year_1 == yd && year_2 == yd  && year_1 >= year_2){
            count = 6;
          }
          i++;
     }
    if(count == 1 || count == 2 || count == 3 || count == 4 || count == 5 || count == 6){
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

  // var Years_1_1=console.log(document.getElementById("Years_1_1").value)
  // var Years_2_2=console.log(document.getElementById("Years_2_2").value)
  // if(Years_1=='a1' || Years_2=='a2'){
  //   Years_1=Years_1_1
  //   Years_2=Years_2_2
  // }
  // if(Years_1_1=='a1' || Years_2_2=='a2'){
  //   Years_1_1=Years_1
  //   Years_2_2=Years_2
  // }



// // ################# Reverse way 20220512 ################



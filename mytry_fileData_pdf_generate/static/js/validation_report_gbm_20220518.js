// // ################# Reverse way 20220512 ################


// // ################################## ON CHANGE AGENDA FIELD EFFECT ON MEETING FIELD ###################################



function fileValidation_to_agnt_select(pdf_data) {
        
  const arr = [];
  var a = pdf_data;
  var array_agnt = []
  var array1 = []
  var array_year1= []
  var array_year2= []
  var objResult={
    "FromYears":[],
    "MeetingNo":[],
    "agendatopic":[]
  }
   
  
  var agnt_2 = document.getElementById("agnda_2").value;
  var agnt_1 = document.getElementById("agnda_1").value;
  // var year_1 = document.getElementById("Years_1_1").value;
  // var year_2 = document.getElementById("Years_2_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;
  var mtng_2 = document.getElementById("mtng_2").value = '';
  

  // console.log('Agenda--',agnt_2,'--Agenda');
  // ///changed------------------
  if(agnt_2 != "ALL" || agnt_1 != "ALL" ){  //#########2022-04-27#########
    // document.getElementById("agnda_1").options.length=0;
        // removeChild(node);
        //---------------------working ----------------------
        let element = document.getElementById("mtng_1");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }

        let element1 = document.getElementById("agnda_1");
        while (element1.firstChild) {
          element1.removeChild(element1.firstChild);
        }
        //---------------------working ----------------------

        
        // -----------------------------
        document.getElementById("mtng_1").style.display = 'none';
        document.getElementById('mtng_1').disabled = true; 
        document.getElementById("mtng_2").style.display = '';



        
        //---------------------working ----------------------
        // ------------------ append previous selected meeting first ------------------
      //   if( mtng_1 != ''){
      //     for (x in a){
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
      //      // for( var j = year_1; j<= year_2; j++){      
      //     if(agnda == agnt_2 || agnda == agnt_1){
      //       if(mtng_1 == md){
      //        node = document.createElement("Option");
      //        document.getElementById("mtng_1").appendChild(node);
      //        textnode = document.createTextNode(mtng_1);
      //        node.appendChild(textnode);
      //        node.value=mtng_1;
      //        array_agnt.push(mtng_1);
      //        node.name=1;
      //        node.selected = true;
      //        document.getElementById("mtng_1").appendChild(node);
             
      //        //----------pre select -------
      //        // var f_agenda = document.getElementsById("1");
      //        // alert(f_agenda);
      //        // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

      //        //select.appendChild(node);

      //        //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
      //        //node.option.selected='selected';

      //        alert(mtng_1);

      //       }
                       
      //      }
      //    }

      // }
      // else{
      //   for (x in a){
      //     d=a[x]
      //     yd=d[2]
      //     md=d[3]
      //     agnda=d[4]
      //     kd=d[1]
      //     yd1=d[5]
      //     yd2=d[6]
      //     // document.getElementById("mtng_1").style.display = '';
      //     // document.getElementById('mtng_1').disabled = false; 
      //     // document.getElementById("mtng_2").style.display = 'none';
      //    // for( var j = year_1; j<= year_2; j++){      
      //   if(agnda == agnt_2 || agnda == agnt_1){
      //     if(mtng_2 == md){
      //      node = document.createElement("Option");
      //      document.getElementById("mtng_1").appendChild(node);
      //      textnode = document.createTextNode(mtng_1);
      //      node.appendChild(textnode);
      //      node.value=mtng_2;
      //      array_agnt.push(mtng_2);
      //      node.name=1;
      //      node.selected = true;
      //      document.getElementById("mtng_1").appendChild(node);
           
      //      //----------pre select -------
      //      // var f_agenda = document.getElementsById("1");
      //      // alert(f_agenda);
      //      // f_agenda.options[f_agenda.options.selectedIndex].selected = true;

      //      //select.appendChild(node);

      //      //document.getElementById("mtng_1").innerHTML="<option value='mtng_1'>"+md+"</option>";
      //      //node.option.selected='selected';

      //      alert(mtng_1);

      //     }
                     
      //    }
      //  }

      // }
        


        // ------------------ append previous selected meeting first ------------------

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
        //---------------------working ----------------------
    // var objResult={
    //   "FromYears":[],
    //   "MeetingNo":[],
    //   "agendatopic":[]
    // }
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
                    //----------------- Only Agenda Match --------------------- 
                    if(agnda == agnt_2 || agnda == agnt_1){

                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }
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
                    //----------------- Only Agenda Match ---------------------
                    //----------------- Only Meeting Match --------------------- 
                    if((md == mtng_2 || md == mtng_1) && (md == mtng_2 || md == mtng_1)) {

                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }

                      //---------------------working ----------------------
                      document.getElementById("agnda_1").style.display = '';
                      document.getElementById('agnda_1').disabled = false; 
                      document.getElementById("agnda_2").style.display = 'none';
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
                            document.getElementById("agnda_1").appendChild(node);
                              
                            i++;
                        }
                      //------------append meeting------------------- 
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
                          document.getElementById("agnda_1").appendChild(node);
                            
                          i++;
                      }
                     //------------append meeting-------------------
                    
                    }
                    //----------------- Only Meeting Match ---------------------
                    //----------------- Both Meeting and Agenda Match --------------------- 
                    if(md == mtng_2 || md == mtng_1) {

                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }

                      //---------------------working ----------------------
                      document.getElementById("agnda_1").style.display = '';
                      document.getElementById('agnda_1').disabled = false; 
                      document.getElementById("agnda_2").style.display = 'none';
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
                            document.getElementById("agnda_1").appendChild(node);
                              
                            i++;
                        }
                      //------------append meeting------------------- 
                    
                    }
                    //----------------- Both Meeting and Agenda Match ---------------------
                  // }
            }

            //--------------------------- from year --------------------------------
            //debugger;
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
            ///----------------------------- from year ------------------------------

            ///------------------------------ to year ----------------------------
            //debugger;
            if(objResult.FromYears.length>0){
              $("#Years_2").html("");
              var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>From Year</option>";
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
            ///------------------------------ to year ----------------------------

    }
  else{
    //---------------------working ----------------------
    document.getElementById("mtng_1").style.display = 'none';
    document.getElementById('mtng_1').disabled = true; 
    document.getElementById("mtng_2").style.display = '';
    //---------------------working ----------------------


    //---------------------working ----------------------
    document.getElementById("agnda_1").style.display = 'none';
    document.getElementById('agnda_1').disabled = true; 
    document.getElementById("agnda_2").style.display = '';
    //---------------------working ----------------------

  }   

}



// ################################## ON CHANGE AGENDA FIELD EFFECT ON MEETING FIELD ###################################

// // NEW ################################## ON CHANGE AGENDA FIELD EFFECT ON MEETING FIELD ###################################


function fileValidation_to_mtn_select(pdf_data) {
        
  const arr = [];
  var a = pdf_data;
  var array_agnt = []
  var array1 = []
  var array_year1= []
  var array_year2= []
  var objResult={
    "FromYears":[],
    "MeetingNo":[],
    "agendatopic":[]
  }
  
   
  
  var agnt_2 = document.getElementById("agnda_2").value;
  var agnt_1 = document.getElementById("agnda_1").value;
  // var year_1 = document.getElementById("Years_1_1").value;
  // var year_2 = document.getElementById("Years_2_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;
  var mtng_2 = document.getElementById("mtng_2").value = '';
  

  // console.log('Agenda--',agnt_2,'--Agenda');
  // ///changed------------------
  if(mtng_1 != "ALL" || mtng_2 != "ALL" ){  //#########2022-04-27#########
    // document.getElementById("agnda_1").options.length=0;
        // removeChild(node);
        //---------------------working ----------------------
        let element = document.getElementById("mtng_1");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }

        let element1 = document.getElementById("agnda_1");
        while (element1.firstChild) {
          element1.removeChild(element1.firstChild);
        }
        //---------------------working ----------------------

        
        // -----------------------------
        document.getElementById("agnda_1").style.display = 'none';
        document.getElementById('agnda_1').disabled = true; 
        document.getElementById("agnda_2").style.display = '';  // 20220518



        
        //---------------------working ----------------------


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
        //---------------------working ----------------------
    // var objResult={
    //   "FromYears":[],
    //   "MeetingNo":[],
    //   "agendatopic":[]
    // }
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
                    //----------------- Only Agenda Match --------------------- 
                    if(agnda == agnt_2 || agnda == agnt_1){

                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }
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
                    //----------------- Only Agenda Match ---------------------
                    //----------------- Only Meeting Match --------------------- 
                    if((md == mtng_2 || md == mtng_1) && (md == mtng_2 || md == mtng_1)) {

                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }

                      //---------------------working ----------------------
                      document.getElementById("agnda_1").style.display = '';
                      document.getElementById('agnda_1').disabled = false; 
                      document.getElementById("agnda_2").style.display = 'none';
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
                            document.getElementById("agnda_1").appendChild(node);
                              
                            i++;
                        }
                      //------------append meeting------------------- 
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
                          document.getElementById("agnda_1").appendChild(node);
                            
                          i++;
                      }
                     //------------append meeting-------------------
                    
                    }
                    //----------------- Only Meeting Match ---------------------
                    //----------------- Both Meeting and Agenda Match --------------------- 
                    if(md == mtng_2 || md == mtng_1) {

                      if (!objResult.FromYears.includes(yd)) {
                        objResult.FromYears.push(yd);
                      }
                      if (!objResult.MeetingNo.includes(md)) {
                      objResult.MeetingNo.push(md);
                      }
                      if (!objResult.agendatopic.includes(agnda)) {
                      objResult.agendatopic.push(agnda);
                      }

                      //---------------------working ----------------------
                      document.getElementById("agnda_1").style.display = '';
                      document.getElementById('agnda_1').disabled = false; 
                      document.getElementById("agnda_2").style.display = 'none';
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
                            document.getElementById("agnda_1").appendChild(node);
                              
                            i++;
                        }
                      //------------append meeting------------------- 
                    
                    }
                    //----------------- Both Meeting and Agenda Match ---------------------
                  // }
            }

            //--------------------------- from year --------------------------------
            //debugger;
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
            ///----------------------------- from year ------------------------------

            ///------------------------------ to year ----------------------------
            //debugger;
            if(objResult.FromYears.length>0){
              $("#Years_2").html("");
              var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>From Year</option>";
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
            ///------------------------------ to year ----------------------------

    }
  else{
    //---------------------working ----------------------
    document.getElementById("mtng_1").style.display = 'none';
    document.getElementById('mtng_1').disabled = true; 
    document.getElementById("mtng_2").style.display = '';
    //---------------------working ----------------------


    //---------------------working ----------------------
    document.getElementById("agnda_1").style.display = 'none';
    document.getElementById('agnda_1').disabled = true; 
    document.getElementById("agnda_2").style.display = '';
    //---------------------working ----------------------

  }   

}



// NEW ################################## ON CHANGE AGENDA FIELD EFFECT ON MEETING FIELD ###################################



// // // ################################## ON CHANGE MEETING FIELD EFFECT ON AGENDA FIELD ###################################

// function fileValidation_to_mtng_select(pdf_data) {
        
//   const arr = [];
//   var a = pdf_data;
//   var array1 = []
  
//   var agnt_2 = document.getElementById("agnda_2").value;
//   var agnt_1 = document.getElementById("agnda_1").value;
//   var year_1 = document.getElementById("Years_1").value;
//   var year_2 = document.getElementById("Years_2").value;
//   var mtng_2 = document.getElementById("mtng_2").value;
//   var mtng_1 = document.getElementById("mtng_1").value;
//   document.getElementById("agnda_2").value = '';

//   // ///changed------------------
//   if(mtng_2 != "ALL" ){  //#########2022-04-27#########

//         // ------------------------------------
//         let element = document.getElementById("agnda_1");
//         while (element.firstChild) {
//           element.removeChild(element.firstChild);
//         }
//         // -----------------------------

//         // ------------------ append previous selected agenda first ------------------
//       //   if( agnt_1 != ''){
//       //   for (x in a){
//       //     d=a[x]
//       //     yd=d[2]
//       //     md=d[3]
//       //     agnda=d[4]
//       //     kd=d[1]
//       //     yd1=d[5]
//       //     yd2=d[6]
//       //     // document.getElementById("mtng_1").style.display = '';
//       //     // document.getElementById('mtng_1').disabled = false; 
//       //     // document.getElementById("mtng_2").style.display = 'none';
//       //    // for( var j = year_1; j<= year_2; j++){      
//       //   if(md == mtng_2 || md == mtng_1){
//       //     if(agnt_1 == agnda){
//       //      node = document.createElement("Option");
//       //      document.getElementById("agnt_1").appendChild(node);
//       //      textnode = document.createTextNode(agnt_1);
//       //      node.appendChild(textnode);
//       //      node.value=agnt_1;
//       //      array_agnt.push(agnt_1);
//       //      node.name=1;
//       //      node.selected = true;
//       //      document.getElementById("agnt_1").appendChild(node);
           
//       //      //----------pre select -------

//       //      alert(agnt_1);

//       //     }
                     
//       //    }
//       //  }
//       // }
//       // else{
//       //   for (x in a){
//       //     d=a[x]
//       //     yd=d[2]
//       //     md=d[3]
//       //     agnda=d[4]
//       //     kd=d[1]
//       //     yd1=d[5]                         
//       //     yd2=d[6]
//       //     // document.getElementById("mtng_1").style.display = '';
//       //     // document.getElementById('mtng_1').disabled = false; 
//       //     // document.getElementById("mtng_2").style.display = 'none';
//       //    // for( var j = year_1; j<= year_2; j++){      
//       //   if(md == mtng_2 || md == mtng_1){
//       //     if(agnt_2 == agnda){
//       //      node = document.createElement("Option");
//       //      document.getElementById("agnt_1").appendChild(node);
//       //      textnode = document.createTextNode(agnt_1);
//       //      node.appendChild(textnode);
//       //      node.value=agnt_2;
//       //      array_agnt.push(agnt_2);
//       //      node.name=1;
//       //      node.selected = true;
//       //      document.getElementById("agnt_1").appendChild(node);
           
//       //      //----------pre select -------

//       //      alert(agnt_2);

//       //     }
                     
//       //    }
//       //  }
//       // }


//         // ------------------ append previous selected agenda first ------------------

//         //------------append agenda-------------------


//         node = document.createElement("Option");
//         document.getElementById("agnda_1").appendChild(node);
//         textnode = document.createTextNode("ALL");
//         node.appendChild(textnode);
//         node.value="ALL";
//         array1.push("ALL");
//         node.name=1;
//         document.getElementById("agnda_1").appendChild(node);

//         //------------append agenda-------------------

//         var objResult={
//           "FromYears":[],
//           "MeetingNo":[],
//           "agendatopic":[]
//         }
        
//         console.log("--meeting--",objResult) ;     
//         var i=3;
//            for (x in a){
//                       d=a[x]
//                       yd=d[2]
//                       md=d[3]
//                       agnda=d[4]
//                       kd=d[1]
//                       yd1=d[5]
//                       yd2=d[6]
    
//                     if(md == mtng_2 || md == mtng_1){

//                       if (!objResult.FromYears.includes(yd)) {
//                         objResult.FromYears.push(yd);
//                       }
//                       objResult.MeetingNo.push(md);
//                       objResult.agendatopic.push(agnda);

//                       //---------------------working ----------------------
//                       document.getElementById("agnda_1").style.display = '';
//                       document.getElementById('agnda_1').disabled = false; 
//                       document.getElementById("agnda_2").style.display = 'none';
//                       //---------------------working ----------------------
                      
                      
//                       //------------append meeting-------------------
//                         if (!array1.includes(agnda)) {
//                           // alert(array)
//                             node = document.createElement("Option");
//                             document.getElementById("agnda_1").appendChild(node);
//                             textnode = document.createTextNode(agnda);
//                             node.appendChild(textnode);
//                             node.value=agnda;
//                             node.name=i;
//                             array1.push(agnda);
//                             document.getElementById("agnda_1").appendChild(node);
                              
//                             i++;
//                         }
//                       //------------append meeting------------------- 
                      

                        
//                     }
//                   // }
//             }
//             //--------------------------- from year --------------------------------
//             //debugger;

//             if(objResult.FromYears.length>0){
//               $("#Years_1").html("");
//               var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
//               for (let index = 0; index < objResult.FromYears.length; index++) {
               
//                 Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//                  //
//               }
//               $("#Years_1").html(Options);

//             }else{
//               $("#Years_1").html("");

//             }
//             ///----------------------------- from year ------------------------------

//             ///------------------------------ to year ----------------------------
//             //debugger;
//             if(objResult.FromYears.length>0){
//               $("#Years_2").html("");
//               var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>From Year</option>";
//               for (let index = 0; index < objResult.FromYears.length; index++) {
               
//                 Options=Options+"<option value='"+objResult.FromYears[index]+"'>"+objResult.FromYears[index].toString()+"-"+(objResult.FromYears[index]+1).toString().slice(-2)+"</option> "
//                  //
//               }
//               $("#Years_2").html(Options);

//             }else{
//               $("#Years_2").html("");
//             }
//     }
//   else{
    
//     document.getElementById("agnda_1").style.display = 'none';
//     document.getElementById('agnda_1').disabled = true; 
//     document.getElementById("agnda_2").style.display = '';


    
//   } 
  
//   // if(mtng_2 == "ALL" ){
//     //---------- After pre select --------------
//     // document.getElementById("agnda_1").style.display = 'none';
//     // document.getElementById('agnda_1').disabled = true; 
//     // document.getElementById("agnda_2").style.display = '';
//     // document.getElementById("agnda_2").selected=
//     //---------- After pre select --------------
//   // }

// }



// // ################################## ON CHANGE MEETING FIELD EFFECT ON AGENDA FIELD ###################################


// function loadAgeSelector_1() {

//   var startyear = new Date().getFullYear();
//   var endyear = 1984;
//   var reminder;
//   for (var i = startyear; i >= endyear; i--) {
//       node = document.createElement("Option");
//       var next = i+1;
//       var year = i + '-' + next.toString().slice(-2);

//       textnode = document.createTextNode(year);
//       node.appendChild(textnode);
//       node.value=i;
//       document.getElementById("Years_1").appendChild(node);
      
//   }
// }


function Submit_check(){
  console.log(document.getElementById("Years_1").value)
  console.log(document.getElementById("Years_2").value)
  console.log(document.getElementById("agnda_1").value)
  console.log(document.getElementById("agnda_2").value)
  console.log(document.getElementById("mtng_1").value)
  console.log(document.getElementById("mtng_2").value)

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

}

// // ################# Reverse way 20220512 ################



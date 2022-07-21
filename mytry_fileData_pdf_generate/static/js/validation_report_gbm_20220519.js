// // // ################# FY validation ################

// function fileValidation_to_year() {
//   var year_1 = document.getElementById("Years_1").value
//   var year_2 = document.getElementById("Years_2").value
//   console.log("In fileValidation_to_year_select");
//   if((year_1 <= year_2)){
//     console.log("In fileValidation_to_year_select",year_1)
//     console.log("In fileValidation_to_year_select",year_2)
//   }
//   else{
//     alert("From Year can not have higher value that To Year");
//     document.getElementById("Years_1").value='a1';
//     document.getElementById("Years_2").value='a2';
//   }
// }

// // ################# FY validation ################
// // ################# onchange year ################

// function fileValidation_to_year_select(pdf_data) {
//     const arr = [];
//     var a = pdf_data;
//     var array_1 = []
//     var year_1 = document.getElementById("Years_1").value
//     var year_2 = document.getElementById("Years_2").value
//     document.getElementById("mtng_1").options.length=0;
//     console.log("Selected yaer: ",year_1);
//     console.log("Selected yaer: ",year_2);
//     ty= (year_2 - year_1) + 1;


    
//       node = document.createElement("Option");
//       document.getElementById("mtng_1").appendChild(node);
//       textnode = document.createTextNode("ALL");
//       node.appendChild(textnode);
//       node.value="ALL";
//       array_1.push("ALL");
//       node.name=1;
//       document.getElementById("mtng_1").appendChild(node);
      
//         var count =0;
//         var i=2;
//         for (x in a){ 
//               d=a[x]
//               yd=d[2]
//               md=d[3]
//               agnda=d[4]
//               kd=d[1]
//               yd1=d[5]
//               yd2=d[6]

//            for( var j = year_1; j<= year_2; j++){    
//               if(yd == j ){
//                 if (!array_1.includes(md)) {
//                   //count = count + 1;
//                   node = document.createElement("Option");
//                   document.getElementById("mtng_1").appendChild(node);
//                   textnode = document.createTextNode(md);
//                   node.appendChild(textnode);
//                   node.value=md;
//                   array_1.push(md);
//                   node.name=i;
//                   document.getElementById("mtng_1").appendChild(node);

//                   i++;
//                 }
//               }    
//           }
//         }

//         // if(count == 0 ){
//         //   document.getElementById("submit").disabled = true; 

//         // }
//         // else{
//         //   document.getElementById("submit").disabled = false; 
//         // }
//         // const uniqueMeeting = array_1.filter(unique)
//         // console.log("-------",uniqueAMeeting)
// }

// // ################# onchange year ################

// // ################# onchange meeting no ################


// function fileValidation_to_mtng_select(pdf_data) {
//     const arr = [];
//     var a = pdf_data;
//     var array = []
//     document.getElementById("agnda_1").options.length=0;
    
//     var year_1 = document.getElementById("Years_1").value
//     var year_2 = document.getElementById("Years_2").value
//     var mtng_1 = document.getElementById("mtng_1").value

//     //if(mtng_1=="ALL"){  //#########2022-04-27#########
//     node = document.createElement("Option");
//     document.getElementById("agnda_1").appendChild(node);
//     textnode = document.createTextNode("ALL");
//     node.appendChild(textnode);
//     node.value="ALL"; // ALL //ag1
//     array.push("ALL"); //ALL //ag1
//     node.name=1;
//     document.getElementById("agnda_1").appendChild(node);
//     //}//#########2022-04-27#########

//         var i=2;
//         for (x in a){
//                   d=a[x]
//                   yd=d[2]
//                   md=d[3]
//                   agnda=d[4]
//                   kd=d[1]
//                   yd1=d[5]
//                   yd2=d[6]

//               for( var j = year_1; j<= year_2; j++){      
//                 if(yd == j && (mtng_1== "ALL" || md == mtng_1)){

//                     if (!array.includes(agnda)) {
//                     node = document.createElement("Option");
//                     document.getElementById("agnda_1").appendChild(node);
//                     textnode = document.createTextNode(agnda);
//                     node.appendChild(textnode);
//                     node.value=agnda;
//                     node.name=i;
//                     array.push(agnda);
//                     document.getElementById("agnda_1").appendChild(node);
                      
//                     i++;
//                       }
//                     // }
//                 }
//               }
//          }   
//         // const uniqueAgenda = array.filter(unique)
//         // console.log("-------",uniqueAgenda)
//    }

// // ################# onchange meeting no ################



// const unique = (value, index, self) => {
//   return self.indexOf(value) === index
// }
// // ################# onchange meeting no ################

// // ################# Creating Buttons ###################



// function fileValidation_to_pdf_key_select(pdf_data) {
//   var a = pdf_data;
  
//   var onselsubmit = document.getElementById("update")
//   var onselkey = document.getElementById("pdf_key")

//   if (!onselsubmit.value.selected) {
//       for (x in a){
//         d=a[x]
//         console.log(d)
//         yd=d[2]
//         pd=d[0]
//         kd=d[1]
//         mtno=d[3]
//         tpc=d[4]
//         yd1=d[5]
//         yd2=d[6]
//         console.log("On Select ---------------------------------------------------------->")
//         console.log(yd1)
//         console.log(yd2)
//         console.log(kd)
//       if(kd==onselkey.value){

//         document.getElementById("txtCountry2").value = mtno;
//         document.getElementById("txtName").value = tpc;
//         document.getElementById("txtCountry").value = yd1;
//         document.getElementById("txtCountry1").value = yd2;

//         // AddRow(mtno, tpc, yd1,  yd2);
//       }
//     }
//     document.getElementById("pdf_key").disabled = false; 
//   }
//     else {
//       // document.getElementById("submit").disabled = true;
//       document.getElementById("pdf_key").disabled = true;
//     }
// // }  
// }

// // ################# Creating Buttons ################

// // ################# Submit button Activate ################

//  function submit_btn_active(pdf_data){
//     var count =0;
//       // //-------------------------------------
//       const arr = [];
//       var a = pdf_data;
//       var array_1 = []
//       var year_1 = document.getElementById("Years_1").value
//       var year_2 = document.getElementById("Years_2").value
//       document.getElementById("mtng_1").options.length=0;
//       console.log("Selected yaer: ",year_1);
//       console.log("Selected yaer: ",year_2);
//       ty= (year_2 - year_1) + 1;
  
  
      
//         node = document.createElement("Option");
//         document.getElementById("mtng_1").appendChild(node);
//         textnode = document.createTextNode("ALL");
//         node.appendChild(textnode);
//         node.value="ALL";
//         array_1.push("ALL");
//         node.name=1;
//         document.getElementById("mtng_1").appendChild(node);
//       var i=1;
//       for (x in a){ 
//         d=a[x]
//         yd=d[2]
//         md=d[3]
//         agnda=d[4]
//         kd=d[1]
//         yd1=d[5]
//         yd2=d[6]

//         for( var j = year_1; j<= year_2; j++){    
//           if(yd == j ){
//             count =1;
//             if (!array_1.includes(md)) {
//               //count = count + 1;
//               node = document.createElement("Option");
//               document.getElementById("mtng_1").appendChild(node);
//               textnode = document.createTextNode(md);
//               node.appendChild(textnode);
//               node.value=md;
//               array_1.push(md);
//               node.name=i;
//               document.getElementById("mtng_1").appendChild(node);

//               i++;
//             }
//           } 
//         }    
//     }  
      

      
//           //-------------------------------------

//           year_1 = document.getElementById("Years_1").value;
//           year_2 = document.getElementById("Years_2").value;
//           //alert('count    --'+count);

//           if((year_1 >= 1984) && (year_2 >= 1984) && count == 1){
//             document.getElementById('submit').disabled = false;
//             // document.getElementById('submit').classList.add('bg-indigo-500');
//             // document.getElementById('submit').classList.add('hover:bg-indigo-400');
//             // document.getElementById('submit').classList.remove('bg-indigo-500');
//             // document.getElementById('submit').classList.add('bg-indigo-500');
//             document.getElementById('submit').classList.replace('bg-slate-500', 'bg-indigo-500');
//             document.getElementById('submit').classList.replace('hover:bg-slate-400', 'hover:bg-indigo-400');


//             // document.getElementById("submit_1").style.display = '';
//             console.log("disabled = false");
//             document.getElementById("ftdt").style.display = 'none';
//           }
//           else{
//             // alert('You must choose FROM and To Year');
//             document.getElementById("ftdt").style.display = '';
//             document.getElementById('submit').disabled = true;
//             document.getElementById('submit').classList.replace( 'bg-indigo-500', 'bg-slate-500');
//             document.getElementById('submit').classList.replace( 'hover:bg-indigo-400','hover:bg-slate-400');

//           }
//  }



// // ################# Submit button Activate ################


// // #######2022-04-27########## SUBMIT: generate pdf button check ################

// function Submit_check(){
  
//   year_1 = document.getElementById("Years_1").value
//   year_2 = document.getElementById("Years_2").value
//   console.log("From year",year_1);
//   console.log("To year",year_2);
//     if((year_1 >= 1984) && (year_2 >= 1984)){
//       document.getElementById("ftdt").style.display = 'none';
//     }
//     else{
//       document.getElementById('submit').disabled = true;
      
//       document.getElementById("ftdt").style.display = '';
//       //alert('You must choose FROM and To Year');
      
//     }
//     //document.getElementById('submit').disabled = false; 

// }

// // ################# SUBMIT: generate pdf button check ################


// // ################# Reverse way 20220512 ################


// // ################################## ON CHANGE AGENDA FIELD EFFECT ON MEETING FIELD ###################################

function fileValidation_to_agnt_select(pdf_data) {
        
  const arr = [];
  var a = pdf_data;
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
  


  // console.log('Agenda--',agnt_2,'--Agenda');
  // ///changed------------------
  if(agnt_2 != "ALL" ){  //#########2022-04-27#########
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
        if( mtng_1 != ''){
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
             alert("--mt1--",mtng_1);

            }
                       
           }
         }
      }
      if(mtng_2 != ''){
        var mtng_2 = document.getElementById("mtng_2").value ;
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
              alert("--mt2--",md);

              }
                        
            }
         }

      }
        


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
 if(agnt_1 == "ALL") {
        alert(mtng_1);
        alert(year_1);
        alert(year_2);
        alert(objResult);
        
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

}



// // ################################## ON CHANGE AGENDA FIELD EFFECT ON MEETING FIELD ###################################



// // ################################## ON CHANGE MEETING FIELD EFFECT ON AGENDA FIELD ###################################

function fileValidation_to_mtng_select(pdf_data) {
        
  const arr = [];
  var a = pdf_data;
  var array1 = []
  var array_agnt = []
  
  var agnt_2 = document.getElementById("agnda_2").value;
  var agnt_1 = document.getElementById("agnda_1").value;
  var year_1 = document.getElementById("Years_1").value;
  var year_2 = document.getElementById("Years_2").value;
  var mtng_2 = document.getElementById("mtng_2").value;
  var mtng_1 = document.getElementById("mtng_1").value;
  document.getElementById("agnda_2").value = '';
  // alert('-----1------'+mtng_2);
  // ///changed------------------
  if(mtng_2 != "ALL" ){  //#########2022-04-27#########
        //alert('mtng_2 all');
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
        if( agnt_1 != ''){
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
         if( agnt_2 != ''){ 
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
                      if(agnt_2 == agnda){
                        //alert('-----2------'+agnda);
                        if (!objResult.FromYears.includes(yd) && agnt_2 == agnda) {
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
                      if(agnt_1 == 'ALL' || agnt_2 == ''){
                        //alert('-----3------'+agnda);
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
                          // var Options="<option selected='selected' class='h-1/3' value='a1' name='Years'>From Year</option>";
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
                      if(objResult.FromYears.length>0){
                          $("#Years_2").html("");
                          // var Options="<option selected='selected' class='h-1/3' value='a2' name='Years'>To Year</option>";
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


if(mtng_1 == "ALL") {
  //alert(agnt_1);
  //alert(year_1);
  //alert(year_2);
  //alert(objResult);
  alert("mtng 1 all");
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




        // ------------------ append previous selected agenda first ------------------

        //------------append agenda-------------------



  
  // if(mtng_2 == "ALL" ){
    //---------- After pre select --------------
    // document.getElementById("agnda_1").style.display = 'none';
    // document.getElementById('agnda_1').disabled = true; 
    // document.getElementById("agnda_2").style.display = '';
    // document.getElementById("agnda_2").selected=
    //---------- After pre select --------------
  // }

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
  if((mtng_1 != '' && agnt_1 != '' )){
    

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
    console.log("BOTH MATCH");
    // alert(mtng_1);
    // alert(agnt_1);
    // alert(year_1);
    // alert(year_2);

  }

         //--------- BOTH MATCHING ---------------------
}



// // ################################## ON CHANGE YEAR FIELD EFFECT ON AGENDA AND MEETING FIELD ###################################



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



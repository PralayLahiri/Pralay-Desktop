///--------Main

var array_2 = [];


function validate(){
  if (check_val.checked == 1){
    // alert("checked") ;
    // document.getElementById("submit").disabled = false;
    var cb = document.querySelector('check_val');
    var file =
    document.getElementById('myFile').value;
    var year =
    document.getElementById('Years_1').value;
    var mtn =
    document.getElementById('mtn_no').value;
    // alert(mtn);
    if(file != '' && year != 'a' && mtn != ''){
      document.getElementById("submit").disabled = false;
      document.getElementById('submit').classList.replace('bg-slate-500', 'bg-indigo-500');
      document.getElementById('submit').classList.replace('hover:bg-slate-400', 'hover:bg-indigo-400');
    }
  }
    else{
      document.getElementById("submit").disabled = true;
      document.getElementById('submit').classList.replace('bg-indigo-500' , 'bg-slate-500');
      document.getElementById('submit').classList.replace('hover:bg-indigo-400' , 'hover:bg-slate-400');
    }
  // } else {
  //   // alert("You didn't check it! Let me check it for you.")
  //   document.getElementById("submit").disabled = true;
  // }
}





// function submit_btn_validation(){
//    var cb = document.querySelector('check_val');
//     var file =
//     document.getElementById('myFile').value;
//     var year =
//     document.getElementById('Years_1').value;
//     var mtn =
//     document.getElementById('mtn_no').value;
//     if(file != '' && year != 'a' && mtn > 0){
//       document.getElementById("submit").disabled = false;
//     }
//     else{
//       document.getElementById("submit").disabled = true;
//     }
  
  
  
// }

function fileValidation() {
  var fileInput =
    document.getElementById('myFile');

  var filePath = fileInput.value;
  selected = false;
  // Allowing file type
  var allowedExtensions =
    /(\.pdf)$/i;

  if (!allowedExtensions.exec(filePath)) {
    alert('Invalid file type.\nFile type should be only pdf.');
    fileInput.value = '';
    document.getElementById("Years_1").disabled = true;
    // document.getElementById("Years_1").value='Select Year';
    return false;
  }

  var pdfyear = document.getElementById("Years_1");
  pdfyear.value="a"
  var pdfsubmit = document.getElementById("submit");
  pdfsubmit.value="submit"
  document.getElementById('submit').checked=true;
  // var pdfupdate = document.getElementById("update");
  // pdfupdate.value=""
  var pdfkey = document.getElementById("pdf_key");
  pdfkey.value="key_1"
  //pdfkey.disabled=true

 
  

}

function myFunction() {
  // const list = document.getElementById("pdf_key");
  // if (list.hasChildNodes()) {
  //   list.removeChild(list.children[1]);
  //   myFunction();
  // }

  // pdfkey.value="key_1";

}

function fileValidation_to_year() {
  var fileType = document.getElementById("myFile");
  console.log(fileType);
  var selected = true;
  if (!fileType.value.selected) {
    document.getElementById("Years_1").disabled = false;
  }
  else {
    document.getElementById("Years_1").disabled = true;
  }
}


//////////////////////////// Removed //////////////////////////////

function fileValidation_to_entry_type(val) {

   //---20220505
  var year_entry = document.getElementById("Years_1");  
  var selected = true;
  if (!year_entry.value.selected) {
    // document.getElementById("submit").disabled = false;
    document.getElementById("submit1").disabled = false; 
    document.getElementById("update").disabled = false; 

    
    
        
    
    // value="b"

    // year = year_entry.value;
    // alert(year)

    // var a=document.getElementById("pdf_key").value = year;
    // console.log(document.getElementById("pdf_key").value = year)
    // alert(a)


    // selectElement = document.querySelector('#Years_1').value;
    // output = selectElement.value;
    // document.querySelector('.selectElement').textContent = output;
    
    

  }
  else {
    // document.getElementById("submit").disabled = true;
    document.getElementById("submit1").disabled = true;
    document.getElementById("update").disabled = true;
  }   //---20220505
}


//////////////////////////// Removed //////////////////////////////

// ################################################################################################################


function fileValidation_to_mtng_no(pdf_data)
{
  var a = pdf_data;
  year=document.getElementById("Years_1").value;
  var year_entry = document.getElementById("Years_1");
  var selected = true;
  var i=1;
  mtng_val= 0;
  if (year != 'a' && !year_entry.value.selected) {
    for (x in a){
      d=a[x]
      console.log(d)
      yd=d[2]
      pd=d[0]
      kd=d[1]
      mtno=d[3]
      tpc=d[4]
      yd1=d[5]
      yd2=d[6]
      console.log("On Select ---------------------------------------------------------->")
      console.log(yd)
      console.log(yd1)
      console.log(yd2)
      console.log(kd)
    if(yd==year){
      //  document.getElementById("mtn_no").value = mtno; //---20220505

      document.getElementById("submit1").disabled = false; //---20220505
      document.getElementById("update").disabled = false;  //---20220505
      // document.getElementById("submit1").checked=false;  //---20220505
      
      node.appendChild(textnode);
      if(mtng_val > (mtno) ){
        mtng_val=mtno+1;
        node = document.createElement("Option");
        document.getElementById("mtn_no").appendChild(node);
        textnode = document.createTextNode(mtno+1);
        node.value=mtno+1;
        node.name=i;
        document.getElementById("mtn_no").appendChild(node);
        }
      
      
    }
    else{
      // document.getElementById("mtn_no").disabled = true; //---20220505
      // document.getElementById("update").disabled = true;  //---20220505
      document.getElementById("mtn_no").value = '';  //---20220505
      document.getElementById("step3test").style.display = 'none';  //---20220505
      document.getElementById("table").style.display = '';  //---20220505
      document.getElementById("tbody_1").style.display = '';  //---20220505
      document.getElementById("submit1").disabled = false;  //---20220505
      // document.getElementById("submit1").checked=true;  //---20220505
      // document.getElementById("pdf_key").style.display = 'none';
      
    }
   }
   document.getElementById("mtn_no").disabled = false;
  //  document.getElementById("update").disabled = false;  //---20220505----------
  //  document.getElementById("submit1").disabled = false;  //---20220505 ------
   
  }
  else{
    document.getElementById("mtn_no").disabled = true;
    document.getElementById("update").disabled = true;
    document.getElementById("submit1").disabled = false;
    
  }
  

}







// #################################################################################################################
function fileValidation_to_pdf_key_update(pdf_data) {
  var year_entry = document.getElementById("update");
  var selected = true;
  var pdf_entry = document.getElementById("Years_1");
  var pdf_key = document.getElementById("myFile");
  var a = pdf_data;
  


  
    
  
  if (year_entry.value=="update") {
    // document.getElementById("submit").disabled = false;
    // document.getElementById("table").style.display = 'none';
    document.getElementById("tblCustomers").style.display = ''; //reversed
    document.getElementById("tbody_1").style.display = 'none';
    document.getElementById("tfoot_1").style.display = '';
    document.getElementById("update_topic").style.display = '';  //20220505
    document.getElementById("submit_topic").style.display = 'none'; //20220505
    document.getElementById("update_topic").disabled = false; //20220505
    document.getElementById("submit_topic").disabled = true; //20220505 
    //document.getElementById("table_type").style.display = 'none';  //20220524
    document.getElementById("txtName_u").disabled = true;

    if (!year_entry.value.selected) {
      year_1 = pdf_entry.value;
      pdf_1 = pdf_key.value;
      console.log("year ",year_1);
      console.log("pdf ",pdf_1);


      var fullPath = document.getElementById('myFile').value;
      if (fullPath) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        //alert(filename);
      }
      // array.push("ag1");
      
      // array.push("ag1");
      var i=1;
      for (x in a){
            d=a[x]
            console.log(d)
            yd=d[2]
            pd=d[0]
            kd=d[1]
            yd1=d[5]
            yd2=d[6]
            console.log(yd1)
            console.log(yd2)
        if(yd == year_1 && pd == filename && yd1!='None'){
          document.getElementById('step3test').style.display = '';
          if (!array_2.includes(kd)) {
          
          node = document.createElement("Option");
            document.getElementById("pdf_key").appendChild(node);
            textnode = document.createTextNode(kd);
            node.appendChild(textnode);
            node.value=kd;
            array_2.push(kd);
            node.name=i;
            document.getElementById("pdf_key").appendChild(node);
            // console.log("Pralay====================");
            // console.log(node);
            i++;

        }
      }

      }
      var b_s_radio = document.getElementById("submit1").value;
    //alert("--------------------",b_s_radio)
    document.getElementById("pdf_key").disabled = false; 
    // document.getElementById("submit1").disabled = false; 
  }
    else {
      // document.getElementById("submit").disabled = true;
      document.getElementById("pdf_key").disabled = true;
      document.getElementById("update_topic").style.display = 'none'; //20220505
      document.getElementById("submit_topic").style.display = ''; //20220505
      document.getElementById("update_topic").disabled = true;  //20220505
      document.getElementById("submit_topic").disabled = false; //20220505
      document.getElementById("table_type").style.display = '';
      document.getElementById("txtName_u").disabled = false;
    }

  }

}


function fileValidation_to_pdf_key_select(pdf_data) {
    var a = pdf_data;
    
    var onselsubmit = document.getElementById("update")
    var onselkey = document.getElementById("pdf_key")
  // if (onselsubmit.value=="update") {
  //   // document.getElementById("submit").disabled = false;
  //   document.getElementById("table").style.display = 'none';
  //   document.getElementById("tblCustomers").style.display = 'none'; 
  // }
  // else {
      //if(onselkey.value!="key_1"){
    if (!onselsubmit.value.selected) {
        for (x in a){
          d=a[x]
          console.log(d)
          yd=d[2]
          pd=d[0]
          kd=d[1]
          mtno=d[3]
          tpc=d[4]
          yd1=d[5]
          yd2=d[6]
          console.log("On Select ---------------------------------------------------------->")
          console.log(yd)
          console.log(yd1)
          console.log(yd2)
          console.log(kd)
        if(kd==onselkey.value){
          // document.getElementById("s_pg2").value = yd1;
          // document.getElementById("e_pg2").value = yd2;
          document.getElementById("mtn_no").value = mtno;
          //document.getElementById("txtCnt2").value = mtno;
          document.getElementById("txtName_u").value = tpc; // 20220405--------- changed ----------------
          // document.getElementById("update_topic").value = tpc;
          document.getElementById("txtCnt").value = yd1;
          document.getElementById("txtCnt1").value = yd2;

          // document.getElementById("descName").style.display = 'none';
          // document.getElementById("txtName").style.selected="selected";

          // AddRow(mtno, tpc, yd1,  yd2);
        }
        if(document.getElementById("pdf_key").value =='key_1'){
          document.getElementById("mtn_no").value = '';
          //document.getElementById("txtCnt2").value = mtno;
          // document.getElementById("txtName_u").value = ''; // 20220405--------- changed ----------------
          // document.getElementById("update_topic").value = tpc;
          // document.getElementById("txtCnt").value = '';
          // document.getElementById("txtCnt1").value = '';
        }
      }
      document.getElementById("pdf_key").disabled = false; 

      // document.getElementById("descName").style.display = 'none';
    }
      else {

        // document.getElementById("submit").disabled = true;
        document.getElementById("pdf_key").disabled = true;
        
      }
  // }  
  }


  function fileValidation_othrs_to_desc(){
    var agndtpc_entry = document.getElementById("txtName");
    // var descName_entry = document.getElementById("descName");
    var selected = true;
    if(agndtpc_entry.value=="key_1"){
      alert("Please do select a valid option");
    }
    else{
        if (agndtpc_entry.value=="Others") {
          document.getElementById("descName").style.display = '';
          // if(descName_entry.value==""){
          //   alert("Please do Enter Agenda name");
          // }
        }
        else {
          document.getElementById("descName").style.display = 'none';
        }
      }
  }
  


          ///////////////////////////////////////////////////////////////////////////////////

      // if (!year_entry.value.selected) {

    // document.getElementById("submit").disabled = false;
    // document.getElementById("pdf_key").disabled = false; 
    // document.getElementById('step3test').style.display = ''
    
    // else {
    // // document.getElementById("submit").disabled = true;
    // document.getElementById("pdf_key").disabled = true;
    // // document.getElementById('step3test').style.display = 'none'
    // alert('Sorry. Entry Not Found.')
    // }

// }
////////////////////////////////////////////////////////////////////////////

// // ########################################## DYNAMIC STATIC TABLES #######################################################################

// // uppercase
// // tblCustomers

// function flip_table_static(){

//   var static =  document.getElementById('static');
//     if (static.value=="static") {
//     // document.getElementById("uppercase").disabled = false;
//     // document.getElementById("uppercase").disabled = false; 
//     document.getElementById('tbody_1').style.display = '';
//     document.getElementById('tblCustomers').style.display = 'none';
//     }
  
//   // document.getElementById("submit").disabled = false;
//   // document.getElementById("pdf_key").disabled = false; 
//   else{
//     document.getElementById('tbody_1').style.display = 'none';
//     document.getElementById('tblCustomers').style.display = '';
//   }
  
//   }


//   function flip_table_dynamic(){

//     var static_e =  document.getElementById('dynamic').value;
//       if (static_e == "dynamic") {
//       // document.getElementById("uppercase").disabled = false;
//       // document.getElementById("uppercase").disabled = false; 
      
//       document.getElementById('tblCustomers').style.display = '';
//       document.getElementById('tbody_1').style.display = 'none';
//       }
    
//     // document.getElementById("submit").disabled = false;
//     // document.getElementById("pdf_key").disabled = false; 
//     else{
//       document.getElementById('tblCustomers').style.display = 'none';
//       document.getElementById('tbody_1').style.display = '';
//     }
    
//     }


// // ########################################### DYNAMIC STATIC TABLES ######################################################################


// ####################### Removed #####################################

function fileValidation_to_pdf_key_submit() {
  var stc_tble = document.getElementById("table");
  var dyn_tble = document.getElementById("tblCustomers");
  var dyn_tble_body = document.getElementById("tbody_1");
  
  var frsh_entry= document.getElementById("submit1");
  var selected = true;
  if (frsh_entry.value=="submit") {
    // document.getElementById("submit").disabled = false;
    document.getElementById("table").style.display = '';
    document.getElementById("tblCustomers").style.display = ''; //reverse
    document.getElementById("tbody_1").style.display = '';
    document.getElementById("tfoot_1").style.display = '';
    document.getElementById("mtn_no").value = '';
    document.getElementById("pdf_key").value = 'key_1';
    document.getElementById("step3test").style.display = 'none';
    document.getElementById("update_topic").style.display = 'none';
    document.getElementById("submit_topic").style.display = '';
    document.getElementById("update_topic").disabled = true;
    document.getElementById("submit_topic").disabled = false;
    document.getElementById("table_type").style.display = '';
    
    // remove();
    // add();
    // entry = [];
  }
  else {
    // document.getElementById("submit").disabled = true;
    document.getElementById("update_topic").style.display = '';
    document.getElementById("submit_topic").style.display = 'none';
    document.getElementById("update_topic").disabled = false;
    document.getElementById("submit_topic").disabled = true;
    
    document.getElementById("table").style.display = 'none'; 
    document.getElementById("tblCustomers").style.display = 'none'; //reverse
    document.getElementById("tbody_1").style.display = 'none'; 
    document.getElementById("tfoot_1").style.display = 'none';
    // document.getElementById("submit1").checked=false;
    document.getElementById("table_type").style.display = 'none';
  }
}


// ####################### Removed #####################################

///////////////////////////000/////////////////////////////////////////



/////////////////////////////0000///////////////////////////////////

function fileValidation_to_s_page0() {
  var s_fileType = document.getElementById("s_pg0");
  var e_fileType = document.getElementById("e_pg0");

  var selected = true;
  e_fileType.setAttribute('min', s_fileType.value);
  e_fileType.value = "";
  // s_fileType.value = '';
  return false;

}

// ////////////////////////// Removed /////////////////////////////

function fileValidation_number0() {
  var s_fileType = document.getElementById("s_pg0");
  var e_fileType = document.getElementById("e_pg0");
  s_num=console.log(parseInt(s_fileType.value))
  e_num=console.log(parseInt(e_fileType.value))
  // if(isNaN(s_num)){
  //   var s_num=s_fileType.value
  // }
  // else{
  //   alert('Start page value is string');
  // }
  // if(isNaN(e_num)){
  //   var e_num=e_fileType.value
  // }
  // else{
  //   alert('End page value is string');
  // }
  var selected = true;
  if (s_num > e_num){
  // if (s_fileType.value > e_fileType.value){
    // e_fileType.value =  '';
    alert(s_fileType.value);
    alert(e_fileType.value);
    alert('Start Page Value of Balance Sheets is Greter Than End Page -0-.{%d}');
    e_fileType.value = "";
    // s_fileType.value = '';
    return false;

  }
  // e_fileType.value =  "";
}


////////////////////////// Removed /////////////////////////////
///////////////////////////////11111//////////////////////////////////////

function fileValidation_to_s_page1() {
  var s_fileType = document.getElementById("s_pg1");
  var e_fileType = document.getElementById("e_pg1");

  var selected = true;
  e_fileType.setAttribute('min', s_fileType.value);
  e_fileType.value = "";
  // s_fileType.value = '';
  return false;

}



function fileValidation_number1() {
  var s_fileType = document.getElementById("s_pg1");
  var e_fileType = document.getElementById("e_pg1");
  s_num=console.log(parseInt(s_fileType.value))
  e_num=console.log(parseInt(e_fileType.value))

  var selected = true;
  if (s_num > e_num){
    // e_fileType.value =  '';
    alert('Start Page Value of Change In Membership Greter Than End Page.');
    e_fileType.value = "";
    // s_fileType.value = '';
    return false;

  }
  // e_fileType.value =  "";
}
//////////////////////////////////22222//////////////////////////////////
/////////////////////////////////////////////////////////////////////

function fileValidation_to_s_page2() {
  var s_fileType = document.getElementById("s_pg2");
  var e_fileType = document.getElementById("e_pg2");

  var selected = true;
  e_fileType.setAttribute('min', s_fileType.value);
  e_fileType.value = "";
  // s_fileType.value = '';
  return false;

}



function fileValidation_number2() {
  var s_fileType = document.getElementById("s_pg2");
  var e_fileType = document.getElementById("e_pg2");

  s_num=console.log(parseInt(s_fileType.value))
  e_num=console.log(parseInt(e_fileType.value))

  var selected = true;
  if (s_num > e_num){
    // e_fileType.value =  '';
    alert('Start Page Value of Policies And StaffRules Greter Than End Page.');
    e_fileType.value = "";
    // s_fileType.value = '';
    return false;

  }
  // e_fileType.value =  "";
}
/////////////////////////////////333333///////////////////////////////////
/////////////////////////////////////////////////////////////////////

function fileValidation_to_s_page3() {
  var s_fileType = document.getElementById("s_pg3");
  var e_fileType = document.getElementById("e_pg3");

  var selected = true;
  e_fileType.setAttribute('min', s_fileType.value);
  e_fileType.value = "";
  // s_fileType.value = '';
  return false;

}



function fileValidation_number3() {
  var s_fileType = document.getElementById("s_pg3");
  var e_fileType = document.getElementById("e_pg3");

  s_num=console.log(parseInt(s_fileType.value))
  e_num=console.log(parseInt(e_fileType.value))

  var selected = true;
  if (s_num > e_num){
    // e_fileType.value =  '';
    alert('Start Page Value of Sanctioning Power Greter Than End Page.');
    e_fileType.value = "";
    // s_fileType.value = '';
    return false;

  }
  // e_fileType.value =  "";
}
////////////////////////////////////////////////////////////////////
/////////////////////////////////44444////////////////////////////////////

function fileValidation_to_s_page4() {
  var s_fileType = document.getElementById("s_pg4");
  var e_fileType = document.getElementById("e_pg4");

  var selected = true;
  e_fileType.setAttribute('min', s_fileType.value);
  e_fileType.value = "";
  // s_fileType.value = '';
  return false;

}



function fileValidation_number4() {
  var s_fileType = document.getElementById("s_pg4");
  var e_fileType = document.getElementById("e_pg4");

  s_num=console.log(parseInt(s_fileType.value))
  e_num=console.log(parseInt(e_fileType.value))

  var selected = true;
  if (s_num > e_num){
    // e_fileType.value =  '';
    alert('Start Page Value of Cheque Signing Power Greter Than End Page.');
    e_fileType.value = "";
    // s_fileType.value = '';
    return false;

  }
  // e_fileType.value =  "";
}

////////////////////////////////////////////////////////////////////
/////////////////////////////////dynamic////////////////////////////////////


function fileValidation_number_dynamic() {
  var s_fileType = document.getElementById("txtCnt");
  var e_fileType = document.getElementById("txtCnt1");
  var othr_fileType = document.getElementById("txtName");
  s_num=console.log(parseInt(s_fileType.value))
  e_num=console.log(parseInt(e_fileType.value))
  other_agnda=console.log(parseInt(othr_fileType.value))
  console.log(other_agnda," ",s_num," ",e_num);
  var selected = true;
  if (s_num > e_num){
    // e_fileType.value =  '';
    alert('Start Page Value of ',other_agnda,' Greter Than End Page.');
    e_fileType.value = "";
    // s_fileType.value = '';
    return false;

  }
  // e_fileType.value =  "";
}

















///////////////////////// Submit //////////////////////////////

function Submit_check() {
  var b_s_radio = document.getElementById("submit1").value;
  var b_s_fileType = document.getElementById("s_pg0");
  var b_e_fileType = document.getElementById("e_pg0");
  var c_s_fileType = document.getElementById("s_pg1");
  var c_e_fileType = document.getElementById("e_pg1");
  var p_s_fileType = document.getElementById("s_pg2");
  var p_e_fileType = document.getElementById("e_pg2");
  var s_s_fileType = document.getElementById("s_pg3");
  var s_e_fileType = document.getElementById("e_pg3");
  var cs_s_fileType = document.getElementById("s_pg4");
  var cs_e_fileType = document.getElementById("e_pg4");
  var b_s_radio = document.getElementById("submit1").value;
  console.log("--------------------",b_s_radio)

  var year_var = document.getElementById("Years_1");
  if (year_var.value == 'a') {
    alert('PLease do select year');

  }
  else {
    var fileInput =
      document.getElementById('myFile');

    var filePath = fileInput.value;
    if (filePath == false) {
      alert('PLease do select pdf file');
      document.getElementById("Years_1").disabled = true;
    }
    else {
      if ((b_s_fileType.value != '' && b_e_fileType.value == '') || (b_e_fileType.value != '' && b_s_fileType.value == '')) {

        if ((c_s_fileType.value != '' && c_e_fileType.value == '') || (c_e_fileType.value != '' && c_s_fileType.value == '')) {

          if ((p_s_fileType.value != '' && p_e_fileType.value == '') || (p_e_fileType.value != '' && p_s_fileType.value == '')) {

            if ((s_s_fileType.value != '' && s_e_fileType.value == '') || (s_e_fileType.value != '' && s_s_fileType.value == '')) {

              if ((cs_s_fileType.value != '' && cs_e_fileType.value == '') || (cs_e_fileType.value != '' && cs_s_fileType.value == '')) {
                alert('Start Page Value of Balance Sheets,Change In Membership,Policies And StaffRules, Cheque Signing Power,Sanctioning Power and should be less than End Page.');
              }
              else {
                alert('Start Page Value of Balance Sheets,Change In Membership,Policies And StaffRules and Sanctioning Power  should be less than End Page.');
              }

            }
            else {
              alert('Start Page Value of Balance Sheets,Change In Membership and Policies And StaffRules  should be less than End Page.');
            }
          }
          else {
            alert('Start Page Value of Balance Sheets and Change In Membership should be less than End Page.');
          }
        }
        else {
          alert('Start Page Value of Balance Sheets should be less than End Page.');
        }
        // e_fileType.value =  "";
        return false;
      }
    }
  }

}


var validation_count=0;
function fileValidation() {
  var fileInput = 
      document.getElementById('myFile');
    
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = 
          /(\.pdf)$/i;
    
  if (!allowedExtensions.exec(filePath)) {
      alert('Invalid file type.');
      fileInput.value = '';
      return false;
  }
  else 
  {
    
      // Image preview
      if (fileInput.files && fileInput.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              document.getElementById(
                  'imagePreview').innerHTML = 
                  '<img src="' + e.target.result
                  + '"/>';
          };
          validation_count +=1;

  reader.readAsDataURL(fileInput.files[0]);
  // document.getElementById("myFile").onchange = function () {
  // document.getElementById("Years_1").removeAttribute("disabled");
    // document.getElementById("Years_1").setAttribute("disabled", "disabled");
    // if (this.value !== '')
      // document.getElementById("Years_1").removeAttribute("disabled");
  // };
}
}
}


  function fileValidation_to_year()
  {
  var fileType=document.getElementById("myFile");
  var selected=true;
  if(!fileType.value.selected)
    {
     document.getElementById("Years_1").disabled=false;
    }
  }




  // function fileValidation_year_to_table()
  // {
  // var fileType=document.getElementById("Years_1");
  // var selected=true;
  // if(!fileType.value.selected)
  //   {
  //    //document.getElementById("check").disabled=false; 
  //    document.getElementById("bal_sht").disabled=false; 
  //    document.getElementById("chg_n_mem").disabled=false; 
  //    document.getElementById("pol_nd_stfrls").disabled=false;  
  //    document.getElementById("sac_pow").disabled=false;  
  //    document.getElementById("chq_sign_pow").disabled=false; 
  //   }
  // }
  



  // function fileValidation_year_to_check()
  // {
  // var fileType=document.getElementById("check");
  // var selected=true;
  // if(!fileType.value.selected)
  //   {
  //    document.getElementById("s_pg").disabled=false;
  //   }

  //   // var Number = document.getElementById("s_pg");
  //   //    Number.disabled = vehicle1.checked ? false : true;
  //   //     if (!Number.disabled) {
  //   //         Number.focus();
  //   //     }


  // }
  
 


  // function fileValidation_to_s_page()
  // {
  // var fileType=document.getElementById("s_pg");

  // var selected=true;
  // if(!fileType.value.selected)
  //   {
  //    document.getElementById("e_pg").disabled=false;
  //   }
  // if(fileType.value==0 || fileType.value=='') 
  // {
  //   document.getElementById("e_pg").disabled=true;
  //   e_pg.focus();
  // } 
  // }
/////////////////////////////0000///////////////////////////////////

  function fileValidation_to_s_page0()
  {
    var s_fileType=document.getElementById("s_pg0");
    var e_fileType=document.getElementById("e_pg0");
  
    var selected=true;
    e_fileType.setAttribute('min', s_fileType.value) ;
    e_fileType.value ="";
      // s_fileType.value = '';
    return false;

  }


  
  function fileValidation_number0()
  {
  var s_fileType=document.getElementById("s_pg0");
  var e_fileType=document.getElementById("e_pg0");

  var selected=true;
  if(s_fileType.value > e_fileType.value) 
  {
    // e_fileType.value =  '';
    alert('Start Page Value Greter Than End Page.');
    e_fileType.value =  "";
    // s_fileType.value = '';
    return false;

  } 
  // e_fileType.value =  "";
  }
///////////////////////////////11111//////////////////////////////////////

function fileValidation_to_s_page1()
{
  var s_fileType=document.getElementById("s_pg1");
  var e_fileType=document.getElementById("e_pg1");

  var selected=true;
  e_fileType.setAttribute('min', s_fileType.value) ;
  e_fileType.value ="";
    // s_fileType.value = '';
  return false;

}



function fileValidation_number1()
{
var s_fileType=document.getElementById("s_pg1");
var e_fileType=document.getElementById("e_pg1");

var selected=true;
if(s_fileType.value > e_fileType.value) 
{
  // e_fileType.value =  '';
  alert('Start Page Value Greter Than End Page.');
  e_fileType.value =  "";
  // s_fileType.value = '';
  return false;

} 
// e_fileType.value =  "";
}
//////////////////////////////////22222//////////////////////////////////
/////////////////////////////////////////////////////////////////////

function fileValidation_to_s_page2()
{
  var s_fileType=document.getElementById("s_pg2");
  var e_fileType=document.getElementById("e_pg2");

  var selected=true;
  e_fileType.setAttribute('min', s_fileType.value) ;
  e_fileType.value ="";
    // s_fileType.value = '';
  return false;

}



function fileValidation_number2()
{
var s_fileType=document.getElementById("s_pg2");
var e_fileType=document.getElementById("e_pg2");

var selected=true;
if(s_fileType.value > e_fileType.value) 
{
  // e_fileType.value =  '';
  alert('Start Page Value Greter Than End Page.');
  e_fileType.value =  "";
  // s_fileType.value = '';
  return false;

} 
// e_fileType.value =  "";
}
/////////////////////////////////333333///////////////////////////////////
/////////////////////////////////////////////////////////////////////

function fileValidation_to_s_page3()
{
  var s_fileType=document.getElementById("s_pg3");
  var e_fileType=document.getElementById("e_pg3");

  var selected=true;
  e_fileType.setAttribute('min', s_fileType.value) ;
  e_fileType.value ="";
    // s_fileType.value = '';
  return false;

}



function fileValidation_number3()
{
var s_fileType=document.getElementById("s_pg3");
var e_fileType=document.getElementById("e_pg3");

var selected=true;
if(s_fileType.value > e_fileType.value) 
{
  // e_fileType.value =  '';
  alert('Start Page Value Greter Than End Page.');
  e_fileType.value =  "";
  // s_fileType.value = '';
  return false;

} 
// e_fileType.value =  "";
}
////////////////////////////////////////////////////////////////////
/////////////////////////////////44444////////////////////////////////////

function fileValidation_to_s_page4()
{
  var s_fileType=document.getElementById("s_pg4");
  var e_fileType=document.getElementById("e_pg4");

  var selected=true;
  e_fileType.setAttribute('min', s_fileType.value) ;
  e_fileType.value ="";
    // s_fileType.value = '';
  return false;

}



function fileValidation_number4()
{
var s_fileType=document.getElementById("s_pg4");
var e_fileType=document.getElementById("e_pg4");

var selected=true;
if(s_fileType.value > e_fileType.value) 
{
  // e_fileType.value =  '';
  alert('Start Page Value Greter Than End Page.');
  e_fileType.value =  "";
  // s_fileType.value = '';
  return false;

} 
// e_fileType.value =  "";
}
////////////////////////////////////////////////////////////////////
///////////////////////////////5555//////////////////////////////////////

function fileValidation_to_s_page5()
{
  var s_fileType=document.getElementById("s_pg5");
  var e_fileType=document.getElementById("e_pg5");

  var selected=true;
  e_fileType.setAttribute('min', s_fileType.value) ;
  e_fileType.value ="";
    // s_fileType.value = '';
  return false;

}



function fileValidation_number5()
{
var s_fileType=document.getElementById("s_pg5");
var e_fileType=document.getElementById("e_pg5");

var selected=true;
if(s_fileType.value > e_fileType.value) 
{
  // e_fileType.value =  '';
  alert('Start Page Value Greter Than End Page.');
  e_fileType.value =  "";
  // s_fileType.value = '';
  return false;

} 
// e_fileType.value =  "";
}
////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
  // function fileValidation_number()
  // {
  // var s_fileType=document.getElementById("s_pg");
  // var e_fileType=document.getElementById("e_pg");

  // var selected=true;
  // if(s_fileType.value > e_fileType.value) 
  // {
  //   // e_fileType.value =  '';
  //   alert('Start Page Value Greter Than End Page.');
  //   e_fileType.value =  "";
  //   // s_fileType.value = '';
  //   return false;

  // } 
  // e_fileType.value =  "";
  // }


// ####################################

// function validate()
// { 
//   var Years= document.getElementById("Years");
//     //  Year Validation Done
//   if( document.GBM.Years.value == "a" )
  
//   {

//     alert( "Please select year" );
//     document.GBM.Years.focus() ;
//     return false;
//   }

//    if( document.Pdf_File.textnames.value == "" )
//    {
//      alert( "Please provide your Name!" );
//     //  document.Pdf_File.textnames.focus() ;
//      return false;
//    }
//    if( document.Pdf_File.fathername.value == "" )
//    {
//      alert( "Please provide your Father Name!" );
//      document.Pdf_File.fathername.focus() ;
//      return false;
//    }
   
//    if( document.Pdf_File.paddress.value == "" )
//    {
//      alert( "Please provide your Postal Address!" );
//      document.Pdf_File.paddress.focus() ;
//      return false;
//    }
//    if( document.Pdf_File.personaladdress.value == "" )
//    {
//      alert( "Please provide your Personal Address!" );
//      document.Pdf_File.personaladdress.focus() ;
//      return false;
//    }
//    if ( ( Pdf_File.sex[0].checked == false ) && ( Pdf_File.sex[1].checked == false ) )
//    {
//    alert ( "Please choose your Gender: Male or Female" );
//    return false;
//    }   



//    if( document.Pdf_File.year.value == "-1" )
//    {
//      alert( "Please provide your City!" );
//      document.Pdf_File.City.focus() ;
//      return false;
//    }   
//    if( document.Pdf_File.Course.value == "-1" )
//    {
//      alert( "Please provide your Course!" );
    
//      return false;
//    }   
//    if( document.Pdf_File.District.value == "-1" )
//    {
//      alert( "Please provide your Select District!" );
    
//      return false;
//    }   
//    if( document.Pdf_File.State.value == "-1" )
//    {
//      alert( "Please provide your Select State!" );
     
//      return false;
//    }

//    return( true );
// }

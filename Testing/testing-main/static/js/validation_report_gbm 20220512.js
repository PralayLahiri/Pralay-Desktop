// ################# FY validation ################

function fileValidation_to_year() {
  var year_1 = document.getElementById("Years_1").value
  var year_2 = document.getElementById("Years_2").value
  console.log("In fileValidation_to_year_select");
  if((year_1 <= year_2)){
    console.log("In fileValidation_to_year_select",year_1)
    console.log("In fileValidation_to_year_select",year_2)
  }
  else{
    alert("From Year can not have higher value that To Year");
    document.getElementById("Years_1").value='a1';
    document.getElementById("Years_2").value='a2';
  }
}

// ################# FY validation ################
// ################# onchange year ################

function fileValidation_to_year_select(pdf_data) {
    const arr = [];
    var a = pdf_data;
    var array_1 = []
    var year_1 = document.getElementById("Years_1").value
    var year_2 = document.getElementById("Years_2").value
    document.getElementById("mtng_1").options.length=0;
    console.log("Selected yaer: ",year_1);
    console.log("Selected yaer: ",year_2);
    ty= (year_2 - year_1) + 1;


    
      node = document.createElement("Option");
      document.getElementById("mtng_1").appendChild(node);
      textnode = document.createTextNode("ALL");
      node.appendChild(textnode);
      node.value="m1";
      array_1.push("m1");
      node.name=1;
      document.getElementById("mtng_1").appendChild(node);
      
        var count =0;
        var i=2;
        for (x in a){ 
              d=a[x]
              yd=d[2]
              md=d[3]
              agnda=d[4]
              kd=d[1]
              yd1=d[5]
              yd2=d[6]

           for( var j = year_1; j<= year_2; j++){    
              if(yd == j ){
                if (!array_1.includes(md)) {
                  //count = count + 1;
                  node = document.createElement("Option");
                  document.getElementById("mtng_1").appendChild(node);
                  textnode = document.createTextNode(md);
                  node.appendChild(textnode);
                  node.value=md;
                  array_1.push(md);
                  node.name=i;
                  document.getElementById("mtng_1").appendChild(node);

                  i++;
                }
              }    
          }
        }

        // if(count == 0 ){
        //   document.getElementById("submit").disabled = true; 

        // }
        // else{
        //   document.getElementById("submit").disabled = false; 
        // }
        // const uniqueMeeting = array_1.filter(unique)
        // console.log("-------",uniqueAMeeting)
}

// ################# onchange year ################

// ################# onchange meeting no ################


function fileValidation_to_mtng_select(pdf_data) {
    const arr = [];
    var a = pdf_data;
    var array = []
    document.getElementById("agnda_1").options.length=0;
    
    var year_1 = document.getElementById("Years_1").value
    var year_2 = document.getElementById("Years_2").value
    var mtng_1 = document.getElementById("mtng_1").value

    //if(mtng_1=="m1"){  //#########2022-04-27#########
    node = document.createElement("Option");
    document.getElementById("agnda_1").appendChild(node);
    textnode = document.createTextNode("ALL");
    node.appendChild(textnode);
    node.value="ag1";
    array.push("ag1");
    node.name=1;
    document.getElementById("agnda_1").appendChild(node);
    //}//#########2022-04-27#########

        var i=2;
        for (x in a){
              d=a[x]
              yd=d[2]
              md=d[3]
              agnda=d[4]
              kd=d[1]
              yd1=d[5]
              yd2=d[6]

          for( var j = year_1; j<= year_2; j++){      
            if(yd == j && (mtng_1== "m1" || md == mtng_1)){

                if (!array.includes(agnda)) {
                node = document.createElement("Option");
                document.getElementById("agnda_1").appendChild(node);
                textnode = document.createTextNode(agnda);
                node.appendChild(textnode);
                node.value=agnda;
                node.name=i;
                array.push(agnda);
                document.getElementById("agnda_1").appendChild(node);
                  
                i++;
                  }
                // }
            }
          }
        }  
        // const uniqueAgenda = array.filter(unique)
        // console.log("-------",uniqueAgenda)
}
// ################# onchange meeting no ################

// ########################################################
// ########################################################
// ################# datalist ################


// function fileValidation_to_mtng_select(pdf_data) {
//   const arr = [];
//   var a = pdf_data;
//   var array = []
//   document.getElementById("txtName_d").options.length=0;
  
//   var year_1 = document.getElementById("Years_1").value
//   var year_2 = document.getElementById("Years_2").value
//   var mtng_1 = document.getElementById("mtng_1").value

//   //if(mtng_1=="m1"){  //#########2022-04-27#########
//   node = document.createElement("Option");
//   document.getElementById("txtName_d").appendChild(node);
//   textnode = document.createTextNode("ALL");
//   node.appendChild(textnode);
//   node.value="ag1";
//   array.push("ag1");
//   node.name=1;
//   document.getElementById("txtName_d").appendChild(node);
//   //}//#########2022-04-27#########

//       var i=2;
//       for (x in a){
//             d=a[x]
//             yd=d[2]
//             md=d[3]
//             agnda=d[4]
//             kd=d[1]
//             yd1=d[5]
//             yd2=d[6]

//         for( var j = year_1; j<= year_2; j++){      
//           if(yd == j && (mtng_1== "m1" || md == mtng_1)){

//               if (!array.includes(agnda)) {
//               node = document.createElement("Option");
//               document.getElementById("txtName_d").appendChild(node);
//               textnode = document.createTextNode(agnda);
//               node.appendChild(textnode);
//               node.value=agnda;
//               node.name=i;
//               array.push(agnda);
//               document.getElementById("txtName_d").appendChild(node);
                
//               i++;
//                 }
//               // }
//           }
//         }
//       }  
//       // const uniqueAgenda = array.filter(unique)
//       // console.log("-------",uniqueAgenda)
// }
// ################# datalist ################
// ########################################################
// ########################################################






const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
// ################# onchange meeting no ################

// ################# Creating Buttons ###################



function fileValidation_to_pdf_key_select(pdf_data) {
  var a = pdf_data;
  
  var onselsubmit = document.getElementById("update")
  var onselkey = document.getElementById("pdf_key")

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
        console.log(yd1)
        console.log(yd2)
        console.log(kd)
      if(kd==onselkey.value){

        document.getElementById("txtCountry2").value = mtno;
        document.getElementById("txtName").value = tpc;
        document.getElementById("txtCountry").value = yd1;
        document.getElementById("txtCountry1").value = yd2;

        // AddRow(mtno, tpc, yd1,  yd2);
      }
    }
    document.getElementById("pdf_key").disabled = false; 
  }
    else {
      // document.getElementById("submit").disabled = true;
      document.getElementById("pdf_key").disabled = true;
    }
// }  
}

// ################# Creating Buttons ################

// ################# Submit button Activate ################

 function submit_btn_active(pdf_data){
    var count =0;
      // //-------------------------------------
      const arr = [];
      var a = pdf_data;
      var array_1 = []
      var year_1 = document.getElementById("Years_1").value
      var year_2 = document.getElementById("Years_2").value
      document.getElementById("mtng_1").options.length=0;
      console.log("Selected yaer: ",year_1);
      console.log("Selected yaer: ",year_2);
      ty= (year_2 - year_1) + 1;
  
  
      
        node = document.createElement("Option");
        document.getElementById("mtng_1").appendChild(node);
        textnode = document.createTextNode("ALL");
        node.appendChild(textnode);
        node.value="m1";
        array_1.push("m1");
        node.name=1;
        document.getElementById("mtng_1").appendChild(node);
      var i=1;
      for (x in a){ 
        d=a[x]
        yd=d[2]
        md=d[3]
        agnda=d[4]
        kd=d[1]
        yd1=d[5]
        yd2=d[6]

        for( var j = year_1; j<= year_2; j++){    
          if(yd == j ){
            count =1;
            if (!array_1.includes(md)) {
              //count = count + 1;
              node = document.createElement("Option");
              document.getElementById("mtng_1").appendChild(node);
              textnode = document.createTextNode(md);
              node.appendChild(textnode);
              node.value=md;
              array_1.push(md);
              node.name=i;
              document.getElementById("mtng_1").appendChild(node);

              i++;
            }
          } 
        }    
    }  
      

      
          //-------------------------------------

          year_1 = document.getElementById("Years_1").value;
          year_2 = document.getElementById("Years_2").value;
          //alert('count    --'+count);

          if((year_1 >= 1984) && (year_2 >= 1984) && count == 1){
            document.getElementById('submit').disabled = false;
            // document.getElementById('submit').classList.add('bg-indigo-500');
            // document.getElementById('submit').classList.add('hover:bg-indigo-400');
            // document.getElementById('submit').classList.remove('bg-indigo-500');
            // document.getElementById('submit').classList.add('bg-indigo-500');
            document.getElementById('submit').classList.replace('bg-slate-500', 'bg-indigo-500');
            document.getElementById('submit').classList.replace('hover:bg-slate-400', 'hover:bg-indigo-400');


            // document.getElementById("submit_1").style.display = '';
            console.log("disabled = false");
            document.getElementById("ftdt").style.display = 'none';
          }
          else{
            // alert('You must choose FROM and To Year');
            document.getElementById("ftdt").style.display = '';
            document.getElementById('submit').disabled = true;
            document.getElementById('submit').classList.replace( 'bg-indigo-500', 'bg-slate-500');
            document.getElementById('submit').classList.replace( 'hover:bg-indigo-400','hover:bg-slate-400');

          }
 }



// ################# Submit button Activate ################


// #######2022-04-27########## SUBMIT: generate pdf button check ################

function Submit_check(){
  
  year_1 = document.getElementById("Years_1").value
  year_2 = document.getElementById("Years_2").value
  console.log("From year",year_1);
  console.log("To year",year_2);
    if((year_1 >= 1984) && (year_2 >= 1984)){
      document.getElementById("ftdt").style.display = 'none';
    }
    else{
      document.getElementById('submit').disabled = true;
      
      document.getElementById("ftdt").style.display = '';
      //alert('You must choose FROM and To Year');
      
    }
    //document.getElementById('submit').disabled = false; 

}

// ################# SUBMIT: generate pdf button check ################



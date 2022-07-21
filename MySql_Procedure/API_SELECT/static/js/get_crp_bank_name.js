/* Filename: get_crp_bank_name.js*/


$(document).ready(function() {
/*    let modal = document.getElementById("my-modal");
    let btn = document.getElementById("open-btn");
    let button = document.getElementById("ok-btn");

    // We want the modal to open when the Open button is clicked
     btn.onclick = function() {
	modal.style.display = "block";
     }
	//                 // We want the modal to close when the OK button is clicked
     button.onclick = function() {
	modal.style.display = "none";
     }
	    // The modal will close when the user clicks anywhere outside the modal
     window.onclick = function(event) {
     	if (event.target == modal) {
		modal.style.display = "none";
	}
     }
*/

	//	let btn = document.getElementById("closePhaseButton");
	//btn.onclick(e) = function({
	
	//alert("bank_recent_phase_status:"+bank_recent_phase_status);
	//var bank_recent_phase_status_i=bank_recent_phase_status;
	var htmlstr='<div class="w-80 mx-auto mt-5 p-7"><p class="text-xl font-medium text-gray-800">Click here to Close this Phase </p>	<center><button id="closePhaseButton" class="bg-green-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">		Close Phase 	</button></center>	</div>'
	if (typeof bank_recent_phase_status !== 'undefined') {
		if (bank_recent_phase_status=="Open") {
			$("#closePhaseButton").prop("disabled",false);
			//alert("htmlstr:"+htmlstr);
			$("#closeButtonRequired").html(htmlstr);

		} else {
			$("#closePhaseButton").prop("disabled",true);
			//alert("htmlstr:"+htmlstr);
			
		}
	}
	$("#closePhaseButton").on("click", function() {
		swal({
			title: "Are you sure?",
			text: "This phase will be closed for the rest of the preriod! Project Name : "+project_name+" & Phase_name: "+recent_phase_inFormat,
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then((phaseClosed) => {
			if (phaseClosed) {
				$.ajax({
					method: 'POST',	
					data: {'toURL' : "closeProjectPhase", 'project_name':project_name, 'recent_phase_name':recent_phase_name},
					success: function(data) {
						swal("Phase is closed!", {
							icon: "success",
						}).then(()=>{
							location.reload();
						});
						//window.location='closeProjectPhase?project_name='+project_name+'&phase='+recent_phase_name;
					}
				});
			} else {
			  swal("Phase is not changed!");
			}
		  });
		  //location.reload();
	})
})


// document.querySelector(".first").addEventListener('click', function(){

function swtalrt(){
  Swal.fire({
    toast: true,
    icon: 'success',
    title: 'Posted successfully',
    animation: false,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

}  
  
  // });


 
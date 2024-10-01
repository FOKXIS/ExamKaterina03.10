document.addEventListener('DOMContentLoaded', ()=> {
      const showModal =  () => {
        const formRegestrationModal=document.getElementById('FormRegestrationModal')
        formRegestrationModal.style.display = 'block'; 
    };
    const FormRegestration = document.getElementById('FormRegestration')
    FormRegestration.addEventListener('click',showModal)

  



})
 


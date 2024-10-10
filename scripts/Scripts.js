// для окна регистрации
// document.addEventListener('DOMContentLoaded', () => {
//   const formRegestrationModal = document.getElementById('FormRegestrationModal');
//   const openModall=document.getElementById('Satellites');
//   const openModallTwo=document.getElementById('SafeHaven');
//   const closeButtonFormRegistrationModal = document.getElementById('closeButton');

//   let isModalShow = false;
//   // функиця отображения модалки
  
  
//   document.getElementById('FormRegestration').addEventListener('click',toggleModal);
  
//   // closeButtonFormRegistrationModal.addEventListener('click',toggleModal(formRegestrationModal));
  
// });


function toggleModal (formId)  {
   console.log('получение ', formId);
  const form = document.getElementById(formId);
  if(!form )return;
  if (form.style.display === 'block'){
    form.style.display = 'none';
  }else {
    form.style.display = 'block';
  }
};
  
  // document.addEventListener("DOMContentLoaded", function () {
  //   var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  //   console.log(scrollbar);
  //   document.querySelector('[href="#openModal"]').addEventListener('click', function () {
  //     document.body.style.overflow = 'hidden';
  //     document.querySelector('#openModal').style.marginLeft = scrollbar;
  //   });
  //   document.querySelector('[href="#close"]').addEventListener('click', function () {
  //     document.body.style.overflow = 'visible';
  //     document.querySelector('#openModal').style.marginLeft = '0px';
  //   });
  // });


  // document.addEventListener("DOMContentLoaded", function () {
  //   var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  //   console.log(scrollbar);
  //   document.querySelector('[href="#openModalTwo"]').addEventListener('click', function () {
  //     document.body.style.overflow = 'hidden';
  //     document.querySelector('#openModalTwo').style.marginLeft = scrollbar;
  //   });
  //   document.querySelector('[href="#close"]').addEventListener('click', function () {
  //     document.body.style.overflow = 'visible';
  //     document.querySelector('#openModalTwo').style.marginLeft = '0px';
  //   });
  // });

  

//https://learn.javascript.ru/bubbling-and-capturing

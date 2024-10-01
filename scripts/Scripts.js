document.addEventListener('DOMContentLoaded', () => {
    const formRegestrationModal = document.getElementById('FormRegestrationModal');
    const clouseButtonFormRegistrationModal = document.getElementById('clouseButtonFormRegistrationModal');
    let isModalShow = false;
    // функиця отображения модалки
    const toggleModal = () => {
        // переключалка 
        if (isModalShow) {
            formRegestrationModal.style.display = 'none';
            isModalShow = false;
        } else {
            formRegestrationModal.style.display = 'block';
            isModalShow = !isModalShow;
        }
    };
    const FormRegestration = document.getElementById('FormRegestration')
    FormRegestration.addEventListener('click', toggleModal);
    clouseButtonFormRegistrationModal.addEventListener('click', toggleModal)





})



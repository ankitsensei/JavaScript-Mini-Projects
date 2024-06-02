const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        nameError.style.color = 'red';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        nameError.style.color = 'red';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    nameError.style.color = 'green';
    return true;
}
function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone no is required';
        phoneError.style.color = 'red';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        phoneError.style.color = 'red';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        phoneError.style.color = 'red';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    phoneError.style.color = 'green';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        emailError.style.color = 'red';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        emailError.style.color = 'red';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    emailError.style.color = 'green';
    return true;
}

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

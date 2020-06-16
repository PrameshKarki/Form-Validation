const userName = document.getElementById('userName');
const email = document.getElementById('email');
const contactNumber = document.getElementById('contactNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitButton = document.getElementById('submit');
let validUserName = false;
let validEmail = false;
let validContactNumber = false;
let validPassword = false;
let validConfirmPassword = false;


userName.addEventListener('blur', (e) => {
    e.preventDefault();
    let regularExpression = /^[a-zA-z]([a-zA-Z0-9]){5,9}$/
    if (regularExpression.test(userName.value)) {
        userName.classList.remove('warning');
        userName.classList.add('sucess');
        userName.nextElementSibling.nextElementSibling.style.display = 'none';
        validUserName = true;
    }
    else {
        validUserName = false;
        userName.classList.remove('sucess');
        userName.classList.add('warning');
        userName.nextElementSibling.nextElementSibling.style.display = 'block';
    }
})



email.addEventListener('blur', (e) => {
    e.preventDefault();
    let regularExpression = /^([_\-\.0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regularExpression.test(email.value)) {
        email.classList.add('sucess');
        email.classList.remove('warning');
        email.nextElementSibling.nextElementSibling.style.display = "none";
        validEmail = true;
    } else {
        validEmail = false;
        email.classList.add('warning');
        email.classList.remove('sucess');
        email.nextElementSibling.nextElementSibling.style.display = "block";
    }


})
contactNumber.addEventListener('blur', (e) => {
    e.preventDefault();
    let regularExpression = /^([0-9]){10}$/;
    if (regularExpression.test(contactNumber.value)) {
        contactNumber.classList.add('sucess');
        contactNumber.classList.remove('warning');
        contactNumber.nextElementSibling.nextElementSibling.style.display = 'none';
        validContactNumber = true;

    } else {
        validContactNumber = false;
        contactNumber.classList.remove('sucess');
        contactNumber.classList.add('warning');
        contactNumber.nextElementSibling.nextElementSibling.style.display = "block";
    }

})
password.addEventListener('blur', (e) => {
    e.preventDefault();
    let regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (regularExpression.test(password.value)) {
        password.classList.remove('warning');
        password.classList.add('sucess');
        password.nextElementSibling.nextElementSibling.style.display = "none";
        validPassword = true;
    } else {
        validPassword = false;
        password.classList.remove('sucess');
        password.classList.add('warning')
        password.nextElementSibling.nextElementSibling.style.display = 'block';
    }

})
confirmPassword.addEventListener('blur', (e) => {
    e.preventDefault();
    if (password.value === confirmPassword.value) {
        confirmPassword.classList.remove('failure');
        confirmPassword.classList.add('sucess');
        confirmPassword.nextElementSibling.nextElementSibling.style.display = "none";
        validConfirmPassword = true;

    } else {
        validConfirmPassword = false;
        confirmPassword.classList.remove('sucess');
        confirmPassword.classList.add('warning');
        confirmPassword.nextElementSibling.nextElementSibling.style.display = "block";
    }

})
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validUserName && validEmail && validContactNumber && validPassword && validConfirmPassword) {
        alert('The Form is Validated');
    }
    else {
        alert('Invalid Form');
    }
})
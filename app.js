const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show input success message

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//check valid email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(String(email).toLowerCase());

    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}


//Event listener

/*form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (username.value === "") {
        showError(username, 'Username is Required');
    } else {
        showSuccess(username);
    }

    if (username.value === "") {
        showError(username, 'Username is Required');
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, 'email is Required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }
    if (password.value === "") {
        showError(password, 'password is Required');
    } else {
        showSuccess(password);
    }
    if (password2.value === "") {
        showError(password2, 'Password do match');
    } else {
        showSuccess(password2);
    }

});*/

//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);

        }
    });
}


//check lenght input
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} character`);
    } else if (input.value.lenght > max) {
        showError(input, `${getFieldName(input)} must less than or eaqual to ${max} character`);
    } else {
        showSuccess(input);
    }
}


//password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not Match');
    } else {
        showSuccess
    }
}


//get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 20);
    checkLength(password, 8, 30);
    checkEmail(email);
    checkPasswordMatch(password, password2);

});
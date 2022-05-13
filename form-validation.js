const form = document.getElementById('form');
const contentContainer = document.getElementById('content-container');
const header = document.getElementById('header-text')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();

    contentContainer.remove();
    header.innerText = "Successfully Submitted!";
});

function checkInputs() {
    const email = document.getElementById('email');
    const county = document.getElementById('county');
    const zipCode = document.getElementById('zip-code');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    if (email.value == "") {
        showErrorFor(email, "Email cannot be blank");
    } else if (!isEmail.test(String(email).toLowerCase())) {
        showErrorFor(email, "Please enter a valid email");
    } else {
        showSuccessFor(email);
    }
    if (county.value == "") {
        showErrorFor(county, "County cannot be blank");
    } else if (!isLetter.test(county.value)) {
        showErrorFor(county, "County must contain A-Z");
    } else {
        showSuccessFor(county);
    }
    if (zipCode.value == "") {
        showErrorFor(zipCode, "Zip Code cannot be blank");
    } else if (!isNumber.test(zipCode.value)) {
        showErrorFor(zipCode, "Zip Code must be a number");
    } else if (!isZipCode.test(zipCode.value)) {
        showErrorFor(zipCode, "Please enter a valid zip code");
    }else {
        showSuccessFor(zipCode);
    }
    if (password.value == "") {
        showErrorFor(password, "Password cannot be blank");
    } else if (password.value.length < 8) {
        showErrorFor(password, "Password must be at least 8 characters");
    } else {
        showSuccessFor(password);
    }
    if (password2.value == "") {
        showErrorFor(password2, "Password cannot be blank");
    } else if (password2.value !== password.value) {
        showErrorFor(password2, "Passwords must match");
    } else {
        showSuccessFor(password2);
    }
}

function showErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    input.className = "error";
}

function showSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    input.className = "success";
    small.innerText = "";
}

// Remove error and success class after submission
function removeErrorSuccessClass() {
    let allInputs = document.querySelectorAll("input");
    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].classList.remove("success", "error");
    }
}
  
function checkForErrors() {
    let allInputs = document.querySelectorAll("input");
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].classList.contains("error")) {
            return false;
        } else {
            return true;
        }
    }
}

// Regex Validation
const isLetter = /^[a-zA-Z]+$/;
const isNumber = /^[0-9]+$/;
const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isZipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
// return isEmail.test(String(email).toLowerCase());


// 1. Select Form Elements

const registrationForm = document.getElementById("registrationForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


// 2. Handle Form Submission

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Form Submitted");

    });

}


// 3. Get Input Values

function getFormData() {

    if (!username || !email || !password) {
        return;
    }

    console.log("Username:", username.value);
    console.log("Email:", email.value);
    console.log("Password:", password.value);

}


// 4. Check Empty Fields

function validateEmptyFields() {

    if (!username || !email || !password) {
        return false;
    }

    if (
        username.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === ""
    ) {
        console.log("All fields are required");
        return false;
    }

    console.log("All fields are filled");

    return true;

}


// 5. Validate Email

function validateEmail() {

    if (!email) {
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        console.log("Please enter a valid email");
        return false;
    }

    console.log("Email is valid");

    return true;

}


// 6. Validate Password Length

function validatePassword() {

    if (!password) {
        return false;
    }

    if (password.value.length < 8) {
        console.log("Password must contain at least 8 characters");
        return false;
    }

    console.log("Password is valid");

    return true;

}


// 7. Confirm Password

function validateConfirmPassword() {

    if (!password || !confirmPassword) {
        return false;
    }

    if (password.value !== confirmPassword.value) {
        console.log("Passwords do not match");
        return false;
    }

    console.log("Passwords matched");

    return true;

}


// 8. Complete Form Validation

function validateForm() {

    const isFilled = validateEmptyFields();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPasswordMatched = validateConfirmPassword();

    if (
        isFilled &&
        isEmailValid &&
        isPasswordValid &&
        isPasswordMatched
    ) {
        console.log("Form Validation Successful!");

        return true;
    }

    console.log("Please fix the errors");

    return false;

}


// 9. Submit Form After Validation

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (validateForm()) {

            getFormData();

            console.log("Registration Successful!");

        }

    });

}


// 10. Show and Hide Password

const togglePassword = document.getElementById("togglePassword");

if (togglePassword && password) {

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent = "Hide Password";

        } else {

            password.type = "password";

            togglePassword.textContent = "Show Password";

        }

    });

}


// 11. Reset Form

if (registrationForm) {

    registrationForm.addEventListener("reset", function () {

        console.log("Form Reset Successfully");

    });

}


// 12. Input Event

if (username) {

    username.addEventListener("input", function () {

        console.log("Username:", username.value);

    });

}


// 13. Email Input Validation

if (email) {

    email.addEventListener("input", function () {

        if (email.validity.typeMismatch) {

            console.log("Invalid Email Format");

        } else {

            console.log("Email Format Looks Correct");

        }

    });

}

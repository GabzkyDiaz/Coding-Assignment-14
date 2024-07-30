function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    clearErrors();

    if (name.trim() === '') {
        displayError('name', 'Please enter your Name');
        return;
    }

    if (email.trim() === '' || !isValidEmail(email)) {
        displayError('email', 'Please enter a valid email address');
        return;
    }

    if (phone.trim() === '' || !isValidPhone(phone)) {
        displayError('phone', 'Please enter a valid phone number (minimum 10 digits)');
        return;
    }

    // If all validations pass, submit the form
    document.getElementById('contact-form').submit();
}

function isValidEmail(email) {
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    var phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(phone);
}

function displayError(field, message) {
    var errorElement = document.getElementById(field + 'Error');
    errorElement.textContent = message;

    // Set focus on the field in error
    var errorField = document.getElementById(field);
    errorField.focus();

    // Highlight the text in the field
    errorField.select();
}

function clearErrors() {
    var errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var clearButton = document.getElementById('clearButton');
    if (clearButton) {
        clearButton.addEventListener('click', function () {
            document.getElementById('contact-form').reset();
            clearErrors();
        });
    }
});
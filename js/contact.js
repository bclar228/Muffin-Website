document.addEventListener('DOMContentLoaded', function() {
    /* The method getElementsByClassName returns a live HTMLCollection
    of all elements with this class name. Since HTMLCollection is array-like,
    [0] is used to access the first element of the collection, which is 
    the form we want to interact with. */
    var form = document.getElementsByClassName('contact-form')[0];
    /* We check that form actually contains an element, or else form
    will be undefined and .*/
    if (form) {
        form.addEventListener('submit', function(event) {
            let nameInput = document.getElementById("name").value;
            let nameErrorText = document.getElementById("error-message-name");
            let nameErrorBox = document.getElementById("name");

            let emailInput = document.getElementById("email").value;
            let emailErrorText = document.getElementById("error-message-email");
            let emailErrorBox = document.getElementById("email");

            let phoneInput = document.getElementById("phone").value;
            let phoneErrorText = document.getElementById("error-message-phone");
            let phoneErrorBox = document.getElementById("phone");

            let messageInput = document.getElementById("message").value;
            let messageErrorText = document.getElementById("error-message-message");
            let messageErrorBox = document.getElementById("message");

            let hasError = false;
            
            /* We essentially check if the input fields are valid, and if they
            are we keep our error message hidden and red outline of the input box 
            the normal colour. And we leave our flag hasError as false. However, if
            one of the inputs is invalid, then we display our error message and make the
            border of the input box red. Then we set the variable hasError as true, which
            will prevent the form from submitting through event.preventDefault();. */
            if (nameInput.length < 1) {
                nameErrorText.textContent = "Please enter a value.";
                nameErrorText.style.display = "block";
                nameErrorBox.style.borderColor = "red";
                hasError = true;
                console.log("Name validation failed: Name must contain at least 1 character.");
            } else if (!/^[A-Za-z ]+$/.test(nameInput)) {
                nameErrorText.textContent = "Name must contain only letters and spaces.";
                nameErrorText.style.display = "block";
                nameErrorBox.style.borderColor = "red";
                hasError = true;
                console.log("Name validation failed: Name must contain only letters and spaces.");
            } else {
                nameErrorText.style.display = "none";
                nameErrorBox.style.borderColor = "green";
            }

            if (emailInput.length < 1) {
                emailErrorText.textContent = "Please enter a valid email address.";
                emailErrorText.style.display = "block";
                emailErrorBox.style.borderColor = "red";
                hasError = true;
                console.log("Email validation failed.");
            } else {
                emailErrorText.style.display = "none";
                emailErrorBox.style.borderColor = "green";
            }

            // First, check if both length and character conditions are violated
            if (phoneInput.length !== 10 && !/^\d*$/.test(phoneInput)) {
                phoneErrorText.textContent = "Phone number must be exactly 10 digits and contain only numbers.";
                phoneErrorText.style.display = "block";
                phoneErrorBox.style.borderColor = "red";
                hasError = true;
                console.log("Phone validation failed: Number must be 10 digits long and only contain numbers.");
            }
            // Then check for just the length
            else if (phoneInput.length !== 10) {
                phoneErrorText.textContent = "Please enter a valid 10-digit phone number.";
                phoneErrorText.style.display = "block";
                phoneErrorBox.style.borderColor = "red";
                hasError = true;
                console.log("Phone validation failed: Phone number must be 10 digits long.");
            }
            // Then check for non-numeric characters
            else if (!/^\d*$/.test(phoneInput)) {
                phoneErrorText.textContent = "Phone number must contain only numbers.";
                phoneErrorText.style.display = "block";
                phoneErrorBox.style.borderColor = "red";
                hasError = true;
                console.log("Phone validation failed: Phone number must contain only numbers.");
            } else {
                phoneErrorText.style.display = "none";
                phoneErrorBox.style.borderColor = "green";
            }

            if (!(messageInput.length >= 15)) {
                messageErrorText.textContent = "Please enter a message at least 15 characters long!";
                messageErrorText.style.display = "block";
                messageErrorBox.style.borderColor = "red";
                hasError = true;
                console.log("Message validation failed.");
            } else {
                messageErrorText.style.display = "none";
                messageErrorBox.style.borderColor = "green";
            }

            if (hasError) {
                event.preventDefault();
                console.log("Form submission prevented due to validation errors.");
            } else {
                console.log("Form is valid. Submitting...");
            }
        });
    } else {
        console.error("Form with class 'contact-form' not found.");
    }
});



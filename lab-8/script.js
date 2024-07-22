document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.form__input').forEach(function(input) {
        input.addEventListener('input', function() {
            input.classList.remove('form__input--error');
            const errorElement = document.getElementById(input.id + '__error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });
});

document.getElementById("secureForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("fname").value; // Correct ID reference
    const lastName = document.getElementById("lname").value; // Correct ID reference
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value; // Correct ID reference
    
    let isValid = true;
    
    // Reset errors
    document.getElementById("fname__error").textContent = "";
    document.getElementById("lname__error").textContent = "";
    document.getElementById("email__error").textContent = "";
    document.getElementById("password__error").textContent = "";
    document.getElementById("confirmpassword__error").textContent = ""; // Correct ID reference

    // Validate first name
    if (firstName.trim() === "") {
        document.getElementById("fname__error").textContent = "First name is required.";
        document.getElementById("fname").classList.add('form__input--error');
        isValid = false;
    }

    // Validate last name
    if (lastName.trim() === "") {
        document.getElementById("lname__error").textContent = "Last name is required.";
        document.getElementById("lname").classList.add('form__input--error');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email__error").textContent = "Enter a valid email.";
        document.getElementById("email").classList.add('form__input--error');
        isValid = false;
    }

    // Validate password match
    if (password !== confirmPassword) {
        document.getElementById("confirmpassword__error").textContent = "Passwords do not match.";
        document.getElementById("confirmpassword").classList.add('form__input--error');
        isValid = false;
    }

    if (isValid) {
        // Display success message
        document.getElementById("formResult").textContent = "Form submitted successfully!";
        
        // Clear form fields
        document.getElementById("secureForm").reset();
        
        // Remove error styles
        document.querySelectorAll('.form__input').forEach(function(input) {
            input.classList.remove('form__input--error');
        });
        
        // Clear result message after a few seconds (optional)
        setTimeout(function() {
            document.getElementById("formResult").textContent = '';
        }, 3000); // Clear after 3 seconds

    }
});

// Function to sanitize input
function sanitizeInput(input) {
    const element = document.createElement('div');
    element.textContent = input;
    return element.innerHTML;
}

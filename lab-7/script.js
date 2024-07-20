document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');

    // Select the form and add an event listener for submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting
        event.preventDefault();

        // Check if all fields are filled out
        const inputs = form.querySelectorAll('input, textarea');
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
                input.classList.add('error'); // Add a class for styling purposes
            } else {
                input.classList.remove('error');
            }
        });

        if (allFilled) {
            // If all fields are filled out, submit the form
            form.submit();
        } else {
            // Display an error message
            const errorMessage = document.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.textContent = 'Please fill out all fields.';
                errorMessage.style.display = 'block';
            } else {
                const errorDiv = document.createElement('div');
                errorDiv.classList.add('error-message');
                errorDiv.textContent = 'Please fill out all fields.';
                form.prepend(errorDiv);
            }
        }
    });

    // Clear error message when user starts typing
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('error');
            const errorMessage = document.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        });
    });
});



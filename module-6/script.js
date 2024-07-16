// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Rollover effects for images
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.opacity = '0.8'; // Decrease opacity on mouseover
        });
        image.addEventListener('mouseout', function() {
            this.style.opacity = '1'; // Restore opacity on mouseout
        });
    });

    // Dynamic content change example (can be adapted for other interactions)
    const aboutSection = document.getElementById('about');
    const aboutImage = document.getElementById('aboutImage');
    aboutSection.addEventListener('click', function() {
        aboutImage.src = 'images/about-hover.jpg'; // Change image on click
    });

    // Form validation example (validateForm function)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demonstration
        validateForm(); // Call your validation function
    });

    function validateForm() {
        // Example: Validate form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
            form.reset(); // Reset form after successful submission
        }
    }
});

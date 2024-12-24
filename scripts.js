// scripts.js

// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting immediately

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    // If form is valid, show a confirmation message
    alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
    this.reset(); // Reset the form after submission
});

// Confirm booking functionality
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        let vehicle = document.querySelector('input[name="vehicle"]:checked');
        let payment = document.querySelector('input[name="payment"]:checked');

        if (!vehicle || !payment) {
            alert('Please select both a vehicle and a payment method.');
            return;
        }

        alert('Booking confirmed! You have selected: ' + vehicle.value + ' and ' + payment.value);
    });
});

// Dynamic Content Display for Service Sections
const serviceSections = document.querySelectorAll('.service');

serviceSections.forEach(section => {
    section.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });

    section.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

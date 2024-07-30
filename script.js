document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop - 70;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Change Navbar on Scroll
    const header = document.getElementById('header');
    window.onscroll = function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email');
        } else {
            // If everything is fine, you can send the form data
            alert('Form submitted successfully');
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

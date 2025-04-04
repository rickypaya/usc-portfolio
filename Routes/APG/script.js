document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Toggle hamburger to X
            const spans = this.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Form validation and submission
    const appointmentForm = document.getElementById('appointmentForm');
    const formMessage = document.getElementById('formMessage');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = appointmentForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--error-color)';
                } else {
                    field.style.borderColor = 'var(--border-color)';
                }
            });
            
            // Email validation
            const emailField = document.getElementById('email');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.style.borderColor = 'var(--error-color)';
                }
            }
            
            // Phone validation
            const phoneField = document.getElementById('phone');
            if (phoneField && phoneField.value) {
                const phonePattern = /^$$?\d{3}$$?[-.\s]?\d{3}[-.\s]?\d{4}$/;
                if (!phonePattern.test(phoneField.value)) {
                    isValid = false;
                    phoneField.style.borderColor = 'var(--error-color)';
                }
            }
            
            // Date validation
            const dateOfBirthField = document.getElementById('dateOfBirth');
            if (dateOfBirthField && dateOfBirthField.value) {
                const selectedDate = new Date(dateOfBirthField.value);
                const today = new Date();
                if (selectedDate > today) {
                    isValid = false;
                    dateOfBirthField.style.borderColor = 'var(--error-color)';
                }
            }
            
            const preferredDateField = document.getElementById('preferredDate');
            if (preferredDateField && preferredDateField.value) {
                const selectedDate = new Date(preferredDateField.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    isValid = false;
                    preferredDateField.style.borderColor = 'var(--error-color)';
                }
            }
            
            if (isValid) {
                // Simulate form submission
                const submitButton = appointmentForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
                
                setTimeout(() => {
                    formMessage.textContent = 'Appointment request submitted successfully! We\'ll contact you within 1-2 business days to confirm your appointment.';
                    formMessage.className = 'form-message success';
                    appointmentForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit Appointment Request';
                    
                    // Scroll to message
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1500);
            } else {
                formMessage.textContent = 'Please fill in all required fields correctly.';
                formMessage.className = 'form-message error';
            }
        });
        
        // Clear validation styling on input
        const formInputs = appointmentForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = 'var(--border-color)';
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            });
        });
    }
    
    // Set minimum date for appointment date picker
    const preferredDateField = document.getElementById('preferredDate');
    if (preferredDateField) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        preferredDateField.min = tomorrow.toISOString().split('T')[0];
    }
    
    // Set maximum date for date of birth picker
    const dateOfBirthField = document.getElementById('dateOfBirth');
    if (dateOfBirthField) {
        const today = new Date();
        dateOfBirthField.max = today.toISOString().split('T')[0];
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
});
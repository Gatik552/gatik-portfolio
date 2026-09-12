// ==========================================================================
// Mobile Menu Toggle
// ==========================================================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

// Toggle menu when hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and times (close)
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when a navigation link is clicked
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==========================================================================
// Scroll Reveal Animations
// ==========================================================================
// We use Intersection Observer to detect when elements enter the screen
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If element is in view, add the 'show' class to animate it
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: Stop observing once it's shown if you don't want it to hide again
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Select all elements with the 'hidden' class and observe them
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));


// ==========================================================================
// Mock Form Submission
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Prevent the page from actually reloading/submitting
        e.preventDefault();
        
        // Hide the form inputs by clearing them (optional)
        this.reset();
        
        // Show the success message
        formMessage.style.display = 'block';
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

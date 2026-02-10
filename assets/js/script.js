// Smooth scroll untuk navigation links
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll untuk semua nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        scrollToSection(href);
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validasi
        if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            alert('Harap isi semua field!');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Harap masukkan email yang valid!');
            return;
        }
        
        // Show success message
        alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');
        
        // Reset form
        contactForm.reset();
    });
}

// Active nav link indicator based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section, .hero');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add interactivity to project cards
document.querySelectorAll('.work-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// Create scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.id = 'scrollToTop';
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #1a1a1a;
        color: #ffffff;
        border: 2px solid #1a1a1a;
        border-radius: 4px;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 99;
        transition: all 0.3s ease;
        font-weight: bold;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    // Scroll to top on button click
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Hover effects
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#333333';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#1a1a1a';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createScrollToTopButton();
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #1a1a1a;
        border-bottom: 2px solid #1a1a1a;
    }
    
    .work-item {
        animation: fadeIn 0.6s ease forwards;
    }
`;
document.head.appendChild(style);

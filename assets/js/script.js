init();

function init() {
    renderCopyrightYear();
    renderAge();
    renderSection();
    initializeScrollAnimations();
}

function renderCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const $year = document.querySelector('#copyrightYear');
    $year.textContent = currentYear;
}

function renderAge() {
    const birthDate = new Date(2005, 10, 8);
    const currentDate = new Date();
    
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    const $age = document.querySelector('#ageYear');
    if ($age) {
        $age.textContent = age;
    }
}

function renderSection() {
    document.querySelectorAll('section:not(#home)').forEach((section) => {
        section.classList.add('hidden');
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
            observer.unobserve(section);
          }
        });
        observer.observe(section);
      });
}

function initializeScrollAnimations() {
    // Animate elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Hide home section elements initially
function hideHomeElements() {
    const headings = document.querySelectorAll('#home h1, #home h2');
    const paragraph = document.querySelector('#home p');
    
    headings.forEach(heading => {
        heading.classList.add('hidden');
    });
    
    if (paragraph) {
        paragraph.classList.add('hidden');
    }
}

// Add typing effect for the main heading
function addTypingEffect() {
    const headings = document.querySelectorAll('#home h1, #home h2');
    const paragraph = document.querySelector('#home p');
    
    // Make headings visible before starting typing
    headings.forEach(heading => {
        heading.classList.remove('hidden');
        heading.classList.add('visible');
    });
    
    let completedHeadings = 0;
    
    headings.forEach((heading, index) => {
        const text = heading.textContent.trim();
        heading.textContent = '';
        heading.style.borderRight = '2px solid var(--text-color)';
        heading.style.animation = 'none'; // Disable CSS animations that might interfere
        
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            heading.textContent += text[charIndex];
            charIndex++;
            
            if (charIndex === text.length) {
                clearInterval(typeInterval);
                completedHeadings++;
                
                if (index === headings.length - 1) {
                    setTimeout(() => {
                        heading.style.borderRight = 'none';
                        // Show the paragraph after all headings are done
                        showParagraph();
                    }, 1000);
                }
            }
        }, 80); // Slightly faster typing
    });
    
    function showParagraph() {
        if (paragraph) {
            paragraph.classList.remove('hidden');
            paragraph.classList.add('visible');
        }
    }
}

// Enhanced initialization with proper timing
document.addEventListener('DOMContentLoaded', () => {
    // Hide home elements immediately when DOM is ready
    hideHomeElements();
    // Start typing effect after a short delay
    setTimeout(addTypingEffect, 800);
});
// 1. SCROLL ANIMATION (Existing Logic)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// 2. MOBILE MENU TOGGLE
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation (Optional: Switch icon to X)
        burger.classList.toggle('toggle');
        if(burger.classList.contains('toggle')){
            burger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            burger.innerHTML = '<i class="fas fa-bars"></i>';
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            burger.innerHTML = '<i class="fas fa-bars"></i>';
            navLinks.forEach(link => link.style.animation = '');
        });
    });
}
navSlide();


// 3. BACK TO TOP BUTTON LOGIC
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // Smooth scroll
    window.scrollTo({top: 0, behavior: 'smooth'});
}
document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Scroll Animations
    // This looks for any element with class 'hidden' and adds 'show' when in view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 2. Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Dynamic Title update (Fun little touch)
    let docTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "Come back soon! 🌸";
    });
    window.addEventListener("focus", () => {
        document.title = docTitle;
    });

});
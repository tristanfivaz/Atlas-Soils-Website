// Select the toggle button and the navbar menu
const menuToggle = document.querySelector('.navbar-menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle the active class when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Image comparison slider functionality
const container = document.querySelector('.comparison-image-container');
const slider = document.querySelector('.slider');

if (container && slider) { // Check if elements exist to avoid errors
    slider.addEventListener('input', (e) => {
        container.style.setProperty('--position', `${e.target.value}%`);
    });
}

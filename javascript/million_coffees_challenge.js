// Select the toggle button and the navbar menu
const menuToggle = document.querySelector('.navbar-menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle the active class when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

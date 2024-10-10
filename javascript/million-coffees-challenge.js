// Select the toggle button and the navbar menu
const menuToggle = document.querySelector('.navbar-menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle the active class when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Tab Switching Functionality
const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        // Remove the "active" class from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add "active" class to the clicked tab and show corresponding content
        event.currentTarget.classList.add('active');
        const tabId = event.currentTarget.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

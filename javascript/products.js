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

//// Product card click event
//const productCards = document.querySelectorAll('.section-2-products-card-container');
//const popup = document.getElementById('product-popup');
//const popupClose = document.getElementById('popup-close');
//const popupTitle = document.getElementById('popup-product-title');
//const popupDescription = document.getElementById('popup-product-description'); // New line to reference the product description
//const popupImage = document.getElementById('popup-product-image'); // New line to reference the product image
//const popupForm = document.getElementById('popup-form');
//
//// Open the popup when a product card is clicked
//productCards.forEach(card => {
//    card.addEventListener('click', () => {
//        const productTitle = card.querySelector('.section-2-products-card-title').innerText;
//        const productDescription = card.querySelector('.section-2-products-card-description').innerText;
//        const productImage = card.querySelector('.section-2-products-card-image').src;
//
//        popupTitle.innerText = productTitle;
//        popupDescription.innerText = productDescription;
//        popupImage.src = productImage;
//        popup.style.display = 'flex';
//    });
//});
//
//// Close the popup when the close button is clicked
//popupClose.addEventListener('click', () => {
//    popup.style.display = 'none';
//});
//
//// Close the popup when clicking outside of the popup content
//window.addEventListener('click', (event) => {
//    if (event.target === popup) {
//        popup.style.display = 'none';
//    }
//});
//
//// Form submission logic
//popupForm.addEventListener('submit', (e) => {
//    e.preventDefault();
//    const userEmail = document.getElementById('user-email').value;
//    const quantity = document.getElementById('quantity').value;
//    const furtherQueries = document.getElementById('further-queries').value;
//    const productName = popupTitle.innerText;
//
//    const emailBody = `
//        Product: ${productName}
//        Email: ${userEmail}
//        Quantity: ${quantity}
//        Further Queries: ${furtherQueries}
//    `;
//
//    // Replace with your email-sending function or API call here
//    alert(`Submitting the following information:\n${emailBody}`);
//    popup.style.display = 'none';
//});

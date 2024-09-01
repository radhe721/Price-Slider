// Get references to the slider, price display, and min/max price elements
const slider = document.getElementById('priceSlider');
const priceValue = document.getElementById('priceValue');
const minPrice = document.getElementById('minPrice').querySelector('h3');
const maxPrice = document.getElementById('maxPrice').querySelector('h3');

// Initialize the display values
function initializeSlider() {
    minPrice.textContent = slider.min;
    maxPrice.textContent = slider.max;
    priceValue.textContent = slider.value;
}

// Function to update the display value
function updatePrice() {
    priceValue.textContent = slider.value;
}

// Initialize the display when the page loads
initializeSlider();

// Add an event listener to update the display when the slider value changes
slider.addEventListener('input', updatePrice);

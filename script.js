const imagesContainer = document.getElementById('carousel-images');
const totalImages = imagesContainer.children.length;
let currentIndex = 0;

// Update the carousel display
function updateCarousel() {
  const offset = -currentIndex * 100; // Adjust the translation based on the current index
  imagesContainer.style.transform = `translateX(${offset}%)`;
}

// Show the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to the last image
  updateCarousel();
}

// Show the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
  updateCarousel();
}

// Auto-rotate images every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000); // Adjust the time (in milliseconds) if needed

const carouselContent = document.getElementById('carousel-content') as HTMLElement;
const prevButton = document.getElementById('prev') as HTMLElement;
const nextButton = document.getElementById('next') as HTMLElement;

let currentIndex = 0;
const totalItems = carouselContent.children.length;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselContent.style.transform = `translateX(${offset}%)`;
}

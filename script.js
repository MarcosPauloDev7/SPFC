document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const carouselItems = document.querySelector('.carousel-items');
    const items = document.querySelectorAll('.carousel-items li');
    let currentIndex = 0;
    const totalItems = items.length;
    const visibleItems = Math.floor(carouselItems.clientWidth / items[0].clientWidth);

    function updateCarousel() {
        const offset = -currentIndex * (100 / visibleItems);
        carouselItems.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex <= 0) ? totalItems - visibleItems : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex >= totalItems - visibleItems) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

document.getElementById('prev').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

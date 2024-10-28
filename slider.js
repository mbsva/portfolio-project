document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial__slide');
    const prevButton = document.querySelector('.testimonial__nav-button--prev');
    const nextButton = document.querySelector('.testimonial__nav-button--next');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    prevButton.addEventListener('click', function () {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(currentSlide + 1);
    });
});

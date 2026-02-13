// Swiper js Activation
const swiper = new Swiper(".award__slider", {
  slidesPerView: 1.4,
  spaceBetween: 20,
  loop: true,
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Desktop: Show roughly 4.5 cards to show there is more to slide
    1200: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
});

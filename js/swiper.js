var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      // when window width is <= 320px
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1
      }
    }
  });
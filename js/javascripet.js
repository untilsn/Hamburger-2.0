// banner
var swiper = new Swiper(".banner-slider", {
    grabCursor: true,
    loop:true,
    // autoplay: {
    //   loop: true,
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//review
var swiper = new Swiper(".review-slider", {
  spaceBetween: 100,
  loop:true,
  grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // blog
  var swiper = new Swiper(".blog-box", {
    grabCursor:true,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      loop: true,
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
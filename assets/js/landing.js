const landingCategorySlide = new Swiper(
  "#landing-category .category-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
      },

      1199: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  }
);

const landingThemeSlide = new Swiper("#landing-themes .themes-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const landingPriceSlide = new Swiper("#landing-price .price-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 37,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 37,
    },
  },
});

const landingPartnerSlide = new Swiper(
  "#landing-partner .partner-slider .swiper",
  {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  }
);

const landingBlogSlide = new Swiper("#landing-blog .blog-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
  },
});

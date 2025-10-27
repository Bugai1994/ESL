import "/src/scss/style.scss";

const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

// swiper element
  const swiperEl = document.querySelector('swiper-container');

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // убрать активный класс со всех кнопок и контента
    buttons.forEach((b) => b.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // добавить активный класс выбранной кнопке и контенту
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
//slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper__next",
    prevEl: ".swiper__prev",
  },
});



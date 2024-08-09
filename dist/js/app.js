(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector("html").classList.add("webp");
      } else {
         document.querySelector("html").classList.add("no-webp");
      }
   });
})();

document.addEventListener("DOMContentLoaded", () => {
   burgerWork();
   logoAnimation();
   initBrendsSwiper();
   tabs(".place-card__list input", ".place-card__content");
});
const body = document.body;

function burgerWork() {
   const burger = document.querySelector(".header__burger");
   const menu = document.querySelector(".header__menu");
   burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      body.classList.toggle("lock");
   });
}
function logoAnimation() {
   const logo = document.querySelector(".header__logo");
   setInterval(() => {
      logo.classList.toggle("active");
   }, 2000);
}

function initBrendsSwiper() {
   if (!document.querySelector(".home-brends .swiper")) return;
   let slider = new Swiper(".home-brends .swiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 24,
      initialSlide: 2,
      speed: 500,
      autoplay: {
         delay: 1000,
      },
      loop: true,
   });
}

function tabs(linkSelector, contentSelector) {
   const inputs = document.querySelectorAll(linkSelector);
   const contents = document.querySelectorAll(contentSelector);
   let value;
   if (inputs.length) {
      inputs.forEach((item) => {
         item.addEventListener("change", () => {
            if (item.checked) {
               value = item.value;
            }
            contents.forEach((item) => {
               item.classList.remove("active");
               if (item.getAttribute("data-tab") == value) {
                  item.classList.add("active");
               }
            });
         });
      });
   }
}

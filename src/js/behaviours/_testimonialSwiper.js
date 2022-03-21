/*
  Dependencies + Imports
*/
import Swiper, { Navigation, Pagination } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => ({
  /*
    Variables
  */
  name: "testimonialSwiper",
  swiper: null,

  /*
    Functions
  */
  initSwiper() {
    const nextBtn = document.querySelector(".swiper-button-next"),
      prevBtn = document.querySelector(".swiper-button-prev"),
      testimonialSwiper = document.querySelector(".c-testimonial-swiper");

    this.swiper = new Swiper(
      this.$root.querySelector(".c-testimonial-swiper"),
      {
        modules: [Navigation, Pagination],
        grabCursor: true,
        preloadImages: true,
        preventClicks: true,
        preventClicksPropagation: true,
        slidesPerView: "auto",
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerGroupAuto: false
          },
          // when window width is >= 766px
          766: {
            slidesPerGroupAuto: true,
            slidesPerGroup: 1
          }
        }
      }
    );
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    this.initSwiper();
  }
});

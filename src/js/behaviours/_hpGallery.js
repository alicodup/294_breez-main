/*
  Dependencies + Imports
*/
import Swiper from "swiper";

export default () => ({
  /*
    Variables
  */
  name: "hpGallery",
  swiper: null,

  /*
    Functions
  */
  initSwiper() {
    this.swiper = new Swiper(".g-swiper", {
      // grabCursor: true,
      preloadImages: true,
      preventClicks: true,
      preventClicksPropagation: true,
      spaceBetween: 40,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      // autoplay: true,
      // speed: 10000,
      loadPrevNextAmount: 3,
      // freeMode: true
      allowTouchMove: false
    });
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    this.initSwiper();
  }
});

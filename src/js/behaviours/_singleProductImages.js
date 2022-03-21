/*
  Dependencies + Imports
*/
import autoprefixer from "autoprefixer";
import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination]);

export default () => ({
  /*
    Variables
  */
  name: "singleProductImages",

  /*
    Functions
  */

  /*
    Init (automatically called on DOM load)
  */
  init() {
    const swiper = new Swiper(this.$refs.slider, {
      // Optional parameters
      grabCursor: true,
      preloadImages: true,
      preventClicks: true,
      preventClicksPropagation: true,
      slidesPerView: "auto",
      pagination: {
        el: this.$refs.navigation,
        clickable: true
      },

      // breakpoints: {
      //   // when window width is >= 320px
      //   320: {
      //   }
      // }
    });
  }
});

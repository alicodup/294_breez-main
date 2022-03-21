/*
  Dependencies + Imports
*/
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => ({
  /*
    Variables
  */
  name: "Store Locator",
  zipcode: "",
  radius: 10,

  /*
    Init (automatically called on DOM load)
  */
  init() {
    // Set x-title for dev tools
    // this.$el.setAttribute("x-id", this.name);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has("zipcode")) {
      this.zipcode = urlParams.get("zipcode");
    } else {
      this.$nextTick(() => Alpine.store("global").toggleFindModal());
    }
  }
});

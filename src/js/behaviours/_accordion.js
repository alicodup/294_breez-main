/*
  Dependencies + Imports
*/
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => ({
  /*
    Variables
  */
  name: "accordion",
  open: null,

  /*
    Functions
  */
  toggle(state) {
    if (this.open === state) {
      this.open = "";
    } else {
      this.open = state;
    }
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {}
});

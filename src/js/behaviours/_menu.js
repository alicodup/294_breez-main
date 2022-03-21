/*
  Dependencies + Imports
*/
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default () => ({
  /*
    Variables
  */
  name: "menu",
  open: false,
  links: [],

  /*
    Functions
  */
  toggleMenu() {
    this.open = !this.open;
    const menu = document.querySelector(".c-menu");

    if (this.open) {
      this.linkReveal();

      // open - disable body scroll
      disableBodyScroll(menu);
    } else {
      // Close - allow site access
      enableBodyScroll(menu);
    }
  },

  linkEnter() {
    const src = this.$el.getAttribute("data-image");

    this.$refs.menuImage.src = src;
  },
  linkReveal() {
    this.links = this.$refs.nav.querySelectorAll("li");

    gsap.fromTo(
      this.links,
      { opacity: 0, y: 40 },
      { duration: 0.4, opacity: 1, stagger: 0.1, y: 0 }
    );
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {}
});

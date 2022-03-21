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
  name: "formatsParallax",

  /*
    Functions
  */
  initParallax() {
    const section = document.querySelectorAll(".formats__category");

    ScrollTrigger.matchMedia({
      "(min-width:821px)": function () {
        // these triggers will only happen at the right screen size
        section.forEach((el) => {
          const image = el.querySelector(".formats__category-top"),
            content = el.querySelector(".formats__category-bottom");

          gsap.to(content, {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true
            }
          });

          gsap.to(image, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true
            }
          });
        });
      }
    });
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    this.initParallax();
  }
});

/*
  Dependencies + Imports
*/
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default () => ({
  /*
    Variables
  */
  name: "ageGate",
  open: false,

  /*
    Functions
  */
  close() {
    sessionStorage.ageGate = "true";

    if (sessionStorage.ageGate) {
      this.open = false;
    }
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    const bsOptions = {
      reserveScrollBarGap: true
    };

    this.$watch("open", (value) => {
      if (value === true) {
        // Age gate is open - disable scrolling
        disableBodyScroll(this.$el, bsOptions);
      } else {
        // Closed age gate - allow site access 😎
        enableBodyScroll(this.$el, bsOptions);
      }
    });

    if (!sessionStorage.ageGate) {
      this.open = true;
    }
  }
});

/*
  Dependencies + Imports
*/
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default () => ({
  /*
    Variables
  */
  name: "Find Popup",
  open: false,
  step: 1,
  zipcode: "",

  close() {
    if (sessionStorage.ageGate) {
      Alpine.store("global").findModal = false;
    }
  },

  submit() {
    let zip = this.zipcode.replace(/\s/g, "");
    window.location.href = "/stores.html?zipcode=" + zip;
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    // Set x-title for dev tools
    // this.$el.setAttribute("x-id", this.name);

    this.$watch("$store.global.findModal", (value) => {
      this.open = value;
      if (value === true) {
        // Age gate is open - disable scrolling
        disableBodyScroll(this.$el);
      } else {
        // Closed age gate - allow site access 😎
        enableBodyScroll(this.$el);
      }
    });
  }
});

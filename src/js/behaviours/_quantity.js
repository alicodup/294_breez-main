/*
  A dynamic quantity selector, uses a facade to update the input[name="quantity"]
*/

export default (input = null) => ({
  /*
    Variables
  */
  name: "Quantity selector",
  quantity: input,

  increase() {
    this.$nextTick(() => {
      this.quantity++;
    });
  },

  decrease() {
    this.$nextTick(() => {
      if (this.quantity > 0) {
        this.quantity--;
      }
    });
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    // Set x-title for dev tools
    // this.$el.setAttribute("x-id", this.name);
  }
});

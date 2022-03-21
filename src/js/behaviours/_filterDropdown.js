/*
  Dependencies + Imports
*/

export default () => ({
  /*
    Variables
  */
  name: "filterDropdown",
  open: false,
  options: [],
  selected: null,
  text: null,

  /*
    Functions
  */
  change(state) {
    this.open = false;
    this.selected = state.value;
    this.text = state.text;
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    const options = this.$refs.select.options;

    for (let i = 0; i < options.length; i++) {
      if (options[i].disabled === true) {
        this.text = options[i].text;
      } else {
        const obj = {
          value: options[i].value,
          text: options[i].text
        };
        this.options.push(obj);
      }
    }
  }
});

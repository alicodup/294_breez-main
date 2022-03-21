const {
  Setup,
  Container,
  Layout,
  Typography,
  RatioBox,
  FullBleedScroller,
  Scrollbar
} = require("@area17/a17-tailwind-plugins");

const tailwindGridOverlay = require("./src/js/utilities/_tailwind-grid-overlay.js");

module.exports = {
  corePlugins: {
    container: false
  },
  plugins: [
    tailwindGridOverlay,
    Setup,
    Container,
    Layout,
    Typography,
    RatioBox,
    FullBleedScroller,
    Scrollbar
  ],
  mode: "jit",
  content: ["./*.html", "./partials/**/*.html"],
  theme: {
    // *Breez theme colours (overwrites base Tailwind values)
    colors: {
      white: "#ffffff",
      black: "#000000",
      "shade-black": "#2D2A26",
      "shade-grey-100": "#FBF9F6",
      "shade-grey-200": "#F5F5F5",
      "shade-grey-300": "#E9E9E9",
      "shade-grey-400": "#efede8",
      "shade-grey-500": "#F4EFE6",
      primary: "#EBCC86",
      "shade-primary-200": "#756643",
      mint: "#5BB2BA",
      "shade-mint": "#A5D5D9",
      pink: "#B03B74",
      "shade-pink": "#DE9CBC"
    },

    // *Fonts - we use Area17 typography plugin for our most fonts used site-wide
    typesets: {
      "display-xlg": {
        base: {
          // h1 / h2
          "font-family": "Arboria",
          "font-size": "40px",
          "font-weight": "700",
          "line-height": "40px"
        },
        md: {
          // h1 / h2
          "font-family": "Arboria",
          "font-size": "80px",
          "font-weight": "700",
          "line-height": "80px"
        },
        lg: {
          "font-family": "Arboria",
          "font-size": "108px",
          "font-weight": "700",
          "line-height": "110px"
        }
      },
      "display-lg": {
        base: {
          // h1 / h2
          "font-family": "Arboria",
          "font-size": "40px",
          "font-weight": "700",
          "line-height": "40px"
        },
        lg: {
          "font-family": "Arboria",
          "font-size": "60px",
          "font-weight": "700",
          "line-height": "80px"
        }
      },
      display: {
        // h3
        base: {
          "font-family": "Arboria",
          "font-size": "32px",
          "font-weight": "700",
          "line-height": "36px"
        },
        lg: {
          "font-family": "Arboria",
          "font-size": "40px",
          "font-weight": "700",
          "line-height": "48px"
        }
      },
      "display-sm": {
        // h4
        base: {
          "font-family": "Arboria",
          "font-size": "19px",
          "font-weight": "900",
          "line-height": "36px"
        },
        lg: {
          "font-family": "Arboria",
          "font-size": "22px",
          "font-weight": "700",
          "line-height": "33px"
        }
      },
      "display-xsm": {
        base: {
          "font-family": "Arboria",
          "font-size": "14px",
          "font-weight": "700",
          "line-height": "26px"
        }
      },
      "body-lg": {
        base: {
          "font-family": "Arboria",
          "font-size": "22px",
          "font-weight": "400",
          "line-height": "28px"
        }
      },
      body: {
        base: {
          "font-family": "Arboria",
          "font-size": "16px",
          "font-weight": "400",
          "line-height": "22px"
        },
        lg: {
          "font-family": "Arboria",
          "font-size": "20px",
          "font-weight": "400",
          "line-height": "30px"
        }
      },
      detail: {
        base: {
          "font-family": "Arboria",
          "font-size": "14px",
          "font-weight": "400",
          "line-height": "17px",
          "text-transform": "uppercase"
        }
      }
    },
    // Stand alone font sizes
    fontSize: {
      base: ["12px", "16px"]
    },

    // *Responsive breakpoints
    screens: {
      base: { max: "375px" },
      sm: "375px",
      md: "766px",
      lg: "1023px",
      xl: "1440px",
      xxl: "1900px"
    },
    grid: {
      // Grid columns count
      columns: {
        base: "2",
        sm: "6",
        md: "8",
        lg: "12",
        xl: "12",
        xxl: "12"
      },

      // Container width - full width until XXL screen size
      width: {
        base: "auto",
        sm: "auto",
        md: "auto",
        lg: "auto",
        xl: "auto",
        xxl: "1770px"
      },

      // Container outer margin
      margin: {
        base: "20px",
        sm: "20px",
        md: "20px",
        lg: "60px",
        xl: "100px",
        xxl: "0px"
      },

      // Column gutter width
      gutter: {
        base: "20px",
        sm: "20px",
        md: "20px",
        lg: "40px",
        xl: "40px",
        xxl: "40px"
      },

      // Selectors for tailwind grid overlay plugin
      activeSelector: ".has-grid-active",
      toolbarSelector: ".grid-toggles"
    },

    // Alias Grid variables for A17 Plugins
    mainColWidths: (theme) => theme("grid.width"),
    columnCount: (theme) => theme("grid.columns"),
    outerGutters: (theme) => theme("grid.margin"),
    innerGutters: (theme) => theme("grid.gutter"),

    // *Aspect ratio
    ratios: {
      "1x1": 1,
      "1x2": 1.4 / 1,
      "3x2": 2 / 3,
      "16x9": 9 / 16,
      "16x7": 7 / 16,
      post: 1.36 / 1,
      mail: 1 / 2
    },

    extend: {
      spacing: {
        header: "72px"
      }
    }
  }
};

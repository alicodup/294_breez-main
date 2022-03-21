module.exports = function ({ addComponents, config }) {
  const screens = config("theme.screens");

  // Set Global CSS Variables
  const components = {
    ":root": {
      "--_grid-d_": "GRID DEFAULTS ⬇",
      "--grid-margin": `${config("theme.grid.margin.base")}`,
      "--grid-width": `${config("theme.grid.width.base")}`,
      "--grid-columns": `${config("theme.grid.columns.base")}`,
      "--grid-gutter": `${config("theme.grid.gutter.base")}`,
      /*   Match figma grid colour */
      "--grid-color": "hsla(198, 100%, 70%, 0.10)",
      "--grid-screen": "base",
      "--_grid-m_": "GRID MIXINS ⬇",
      "--repeating-width": "calc(100% / var(--grid-columns))",
      "--column-width":
        "calc((100% / var(--grid-columns)) - var(--grid-gutter))",
      "--background-width": "calc(100% + var(--grid-gutter))",
      "--background-columns": `repeating-linear-gradient(
            to right,
            var(--grid-color),
            var(--grid-color) var(--column-width),
            transparent var(--column-width),
            transparent var(--repeating-width)
          )`
    },
    // Set Grid overlay
    [`${config("theme.grid.activeSelector")}::before`]: {
      content: "''",
      position: "fixed",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      marginRight: "auto",
      marginLeft: "auto",
      width: "calc(100% - (2 * var(--grid-margin)))",
      maxWidth: "var(--grid-width)",
      minHeight: "100vh",
      backgroundImage: "var(--background-columns)",
      backgroundSize: "var(--background-width) 100%",
      zIndex: 49,
      pointerEvents: "none"
    },
    // Set Breakpoint indicator
    [`${config("theme.grid.toolbarSelector")}::before`]: {
      content: `'size: base'`,
      position: "fixed",
      transform: "translateY(-100%)",
      color: "cyan",
      padding: "0.5em",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "1.1",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
    },
    [`${config("theme.grid.activeSelector")} .grid-toggle`]: {
      backgroundColor: "#64d1ff",
      color: "#000"
    }
  };

  Object.entries(screens).forEach(([screen]) => {
    components[`@screen ${screen}`] = {
      ":root": {
        "--grid-screen": `'${screen}' ⬇`,
        "--grid-margin": config(`theme.grid.margin.${screen}`),
        "--grid-width": config(`theme.grid.width.${screen}`),
        "--grid-gutter": config(`theme.grid.gutter.${screen}`),
        "--grid-columns": config(`theme.grid.columns.${screen}`)
      },
      [`${config("theme.grid.toolbarSelector")}::before`]: {
        content: `'size: ${screen}'`
      }
    };
  });
  addComponents(components);
};

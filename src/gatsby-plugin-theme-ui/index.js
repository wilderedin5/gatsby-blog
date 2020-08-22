const space = [0, 0.25, 0.5, 1, 2, 3, 8, 16, 32].map(n => n + "rem")

const fontSizes = [0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4, 4.5].map(n => n + "rem")

const sizes = {
  lg: "1240px",
}

const baseColors = {
  text: "#000",
  background: "#fff",
  primary: "#639",
  secondary: "yellow",
  white: "#fff",
}

const colors = {
  ...baseColors,
}

const styles = {}

const layout = {
  container: {
    maxWidth: sizes.lg,
    padding: `0 ${space[4]}`,
  },
}

const links = {
  nav: {
    color: "white",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },

  primary: {
    color: "black",
    textDecoration: "underline",
    ":hover": {
      textDecoration: "none",
    },
  },
}

export { space, fontSizes, colors, sizes, styles, layout, links }

export const theme = {
  space,
  fontSizes,
  colors,
  sizes,
  styles,
  layout,
  links,
}

export default theme

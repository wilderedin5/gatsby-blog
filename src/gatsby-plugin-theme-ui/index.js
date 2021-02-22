const space = [0, 0.25, 0.5, 1, 2, 3, 8, 16, 32].map((n) => n + "rem");

const fontSizes = [0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4, 4.5].map(
  (n) => n + "rem"
);

const sizes = {
  xs: "440px",
  sm: "540px",
  md: "768px",
  lg: "1240px",
};

export const mediaQueries = Object.keys(sizes).reduce(
  (mediaQueries, breakpointValue) => ({
    ...mediaQueries,
    [breakpointValue]: `@media (min-width: ${sizes[breakpointValue]})`,
  }),
  {}
);

const baseColors = {
  text: "#000",
  black: "#000",
  background: "#fff",
  primary: "#639",
  secondary: "yellow",
  white: "#fff",
};

const colors = {
  ...baseColors,
};

const styles = {
  h1: {
    fontSize: 8,
    mt: 4,
    mb: 3,
  },
  h3: {
    fontSize: 5,
    mt: 0,
    mb: 3,
  },
  a: {
    textDecoration: "none",
  },
};

const layout = {
  container: {
    maxWidth: sizes.lg,
    padding: `0 ${space[4]}`,
  },
};

const links = {
  nav: {
    color: "white",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },

  fill: {
    color: baseColors.text,
    textDecoration: "underline",
    padding: 1,
    ":hover": {
      textDecoration: "none",
      padding: "0.1875rem",
      color: baseColors.white,
      background: baseColors.primary,
      border: "1px dashed white",
    },
  },
};

export { space, fontSizes, colors, sizes, styles, layout, links };

export const theme = {
  space,
  fontSizes,
  colors,
  sizes,
  styles,
  layout,
  links,
};

export default theme;

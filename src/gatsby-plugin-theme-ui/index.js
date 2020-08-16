export default {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#639",
    secondary: "yellow",
    white: "#fff",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [0.75, 0.875, 1, 1.25, 1.5, 2, 3, 4, 4.5].map(
    size => size + "rem"
  ),
  space: [0, 0.25, 0.5, 1, 2, 3, 8, 16, 32].map(space => space + "rem"),
  sizes: [1240],
  layout: {
    container: {
      width: `1240px`,
    },
  },
}

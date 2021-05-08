const space = [
  0.25, // 0
  0.5, // 1
  0.75, // 2
  1, // 3
  1.25, // 4
  1.5, // 5
  1.75, // 6
  2, // 7
  2, // 8
  2.5, // 9
  2.75, // 10
  3, // 11
  3.25, // 12
  3.5, // 13
  3.75, // 14
  4, // 15
  4.25, // 16
  4.5, // 17
  4.75, // 18
  5, // 19
  5.25, // 20
  5.5, // 21
  5.75, // 22
  6, // 23
].map(n => n + 'rem')

const fontSizes = [
  0.5, // 0
  0.825, // 1
  1, // 2
  1.25, // 3
  1.5, // 4
  1.75, // 5
  2, // 6
  2.25, // 7
  2.5, // 8
  2.75, // 9
  3, // 10
  3.25, // 11
  3.5, // 12
  3.75, // 13
  4, // 14
  4.25, // 15
  4.5, // 16
  4.75, // 17
  5, // 18
  5.25, // 19
  5.5, // 20
  5.75, // 21
  6, // 22
  6.5, // 23
  7, // 24
].map(n => n + 'rem')

const lineHeights = {
  body: 1.75,
  heading: 1.25,
}

const fontWeights = {
  bold: 600,
  normal: 400,
}

const sizes = {
  xs: '440px',
  sm: '540px',
  md: '768px',
  lg: '1000px',
  xl: '1240px',
}

export const mediaQueries = Object.keys(sizes).reduce(
  (mediaQueries, breakpointValue) => ({
    ...mediaQueries,
    [breakpointValue]: `@media (min-width: ${sizes[breakpointValue]})`,
  }),
  {},
)

const baseColors = {
  text: '#000',
  black: '#000',
  background: '#fff',
  primary: '#639',
  secondary: 'yellow',
  white: '#fff',
}

const colors = {
  ...baseColors,
}

const styles = {
  h1: {
    lineHeight: 'heading',
    fontSize: 6,
    mt: 4,
    mb: 3,
    [mediaQueries.lg]: {
      fontSize: 8,
    },
  },
  h3: {
    lineHeight: 'heading',
    fontSize: 3,
    mt: 0,
    mb: 3,
    [mediaQueries.lg]: {
      fontSize: 5,
    },
  },
  a: {
    textDecoration: 'none',
  },
}

const layout = {
  container: {
    maxWidth: sizes.xl,
    padding: `0 ${space[4]}`,
  },
}

const fontFamily = {
  body: 'Montserrat, sans-serif',
}

const shadows = {
  primary: `0 0 12px 0 ${colors.primary}`,
  secondary: `0 0 12px 0 ${colors.secondary}`,
}

const links = {
  nav: {
    color: baseColors.white,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },

  fill: {
    color: baseColors.text,
    textDecoration: 'underline',
    padding: 0,
    ':hover': {
      textDecoration: 'none',
      color: baseColors.white,
      background: baseColors.primary,
      border: `1px dashed ${baseColors.white}`,
    },
  },
}

const buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,

    ':hover': {
      backgroundColor: 'transparent',
      color: colors.black,
      borderColor: colors.black,
    },
  },
}

const forms = {
  input: {
    fontSize: 0,
    borderWidth: '2px',
    borderColor: colors.primary,

    ':focus': {
      outline: 'none',
    },
  },
}

export const theme = {
  fontWeights,
  forms,
  buttons,
  space,
  fontSizes,
  fontFamily,
  lineHeights,
  colors,
  sizes,
  styles,
  layout,
  links,
  shadows,
}

export default theme

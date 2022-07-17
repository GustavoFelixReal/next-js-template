import { createStitches } from "@stitches/react";

const breakpoints = {
  xs: 0,
  sm: 414,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
      black: "#121212",
      white: "#fff",
      superLightGrey: "#f8f8f8",
      mediumGrey: "#b3b3b3",
      darkGrey: "#737373",
      lightGrey: "#ebebeb",
      superDarkGrey: "#333",
      green: "#10ce9f",
      red: "#ff365c",
      orange: "#fdab02",
      blue: "#33d6ef",
      purple: "#7850ba",
      yellow: "#fed580",
      subscription: "#30ccbf",
    },
  },
  media: {
    xs: `(min-width: ${breakpoints.xs}px)`,
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
  },
  // utils: {
  //   marginX: (value) => ({ marginLeft: value, marginRight: value }),
  // },
});

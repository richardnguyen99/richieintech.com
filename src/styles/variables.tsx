import { css, ThemedCssFunction, DefaultTheme } from "styled-components";

export const StyledVariables = () => css`
  --color-white: #fff;
  --color-black: #000;
`;

export const breakpoints: { [key: string]: number } = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 376,
};

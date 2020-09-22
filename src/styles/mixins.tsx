/**
 * Custom mixins for styled components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  Interpolation,
  InterpolationFunction,
  DefaultTheme,
} from "styled-components";

import { breakpoints } from "./variables";

export const container = (): FlattenSimpleInterpolation => css`
  width: 100%;
  max-width: 1040px;

  margin: 0 auto;
`;

export default container;

export const media = Object.keys(breakpoints).reduce(
  (
    accumulator: {
      [key: string]: <U>(
        styles: CSSObject | TemplateStringsArray,
        ...interpolations: Array<Interpolation<DefaultTheme & U>>
      ) => FlattenSimpleInterpolation;
    },
    label: string
  ) => {
    const size = breakpoints[label];

    Object.assign(accumulator, {
      [label]: (
        styles:
          | CSSObject
          | TemplateStringsArray
          | InterpolationFunction<DefaultTheme>,
        ...interpolation: Array<Interpolation<DefaultTheme>>
      ) => css`
        @media screen and (min-width: ${size}px) {
          ${css(styles, ...interpolation)}
        }
      `,
    });

    return accumulator;
  },
  {}
);

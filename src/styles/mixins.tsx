/**
 * Custom mixins for styled components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  Interpolation,
  InterpolationFunction,
  DefaultTheme,
} from "styled-components";

import { breakpoints } from "./variables";

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

export const container = (): FlattenSimpleInterpolation => css`
  width: 100%;

  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${media.sm`max-width: 540px;`}
  ${media.md`max-width: 720px;`}
  ${media.lg`max-width: 968px;`}
  ${media.xl`max-width: 1040px; padding-right: 0; padding-left: 0;`}
`;

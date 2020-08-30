/**
 * Custom mixins for styled components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { css, FlattenSimpleInterpolation } from "styled-components";

export const container = (): FlattenSimpleInterpolation => css`
  width: 100%;
  max-width: 1040px;

  margin: 0 auto;
`;

export default container;

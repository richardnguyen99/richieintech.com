/* eslint-disable react/no-array-index-key */
/**
 * Arrow component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";
import { animated, useTrail } from "react-spring";

const d = [
  "M0.75 6H11.25 M6 0.75L11.25 6L6 11.25",
  "M15 10L19.5 5.5L15 1",
  "M23 10L27.5 5.5L23 1",
  "M31 10L35.5 5.5L31 1",
];

const strokeOpacity = [1, 1, 0.66, 0.35];

const config = { mass: 5, tension: 4000, friction: 200 };

const StyledArrowWrapper = styled.div`
  position: relative;
`;

const StyledAnimatedSvg = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translateY(-6px);
`;

interface ArrowProps {
  onHovered: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ onHovered }) => {
  const trail = useTrail(4, {
    config,
    x: onHovered ? 1 : 0,
  });

  return (
    <StyledArrowWrapper>
      <StyledAnimatedSvg width="36" height="12" viewBox="0 0 36 12" fill="none">
        {trail.map(({ x }, index) => (
          <animated.path
            key={index}
            d={d[index]}
            stroke="var(--color-text)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={strokeOpacity[index]}
            style={{ opacity: x, transition: "opacity 125ms ease 0s" }}
          />
        ))}
      </StyledAnimatedSvg>
    </StyledArrowWrapper>
  );
};

export default Arrow;

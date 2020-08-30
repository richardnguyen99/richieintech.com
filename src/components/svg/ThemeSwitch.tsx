/* eslint-disable no-shadow */
/**
 * Theme switch component for toggle Dark/Light mode
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";
import { animated, useTrail, useSpring } from "react-spring";

interface ThemeSwitchProps {
  toggle: boolean;
}

const StyledAnimatedSVG = styled(animated.svg)`
  overflow: visible;
  position: relative;
`;

const config = { mass: 5, tension: 2000, friction: 200 };
const cx = [17, 13, 5, 1, 4, 13];
const cy = [9, 15.9282, 15.9282, 9, 2.0717, 2.0717];

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ toggle }) => {
  const moonProps = useSpring({
    x: toggle ? 1 : 0,
  });
  const { x } = useSpring({
    x: toggle ? 1 : 0,
  });
  const trail = useTrail(6, {
    config,
    x: toggle ? 1 : 0,
  });

  return (
    <StyledAnimatedSVG
      width={18}
      height={18}
      viewBox="0 0 18 18"
      style={{
        transformOrigin: "center center",
        transform: moonProps.x
          .interpolate({
            range: [0, 0.5, 1],
            output: [40, 31.678, 90],
          })
          .interpolate(x1 => `rotate(${x1}deg)`),
      }}
    >
      <mask id="moon-mask">
        <rect x={0} y={0} width={18} height={18} fill="#fff" />
        <animated.circle
          cx={x
            .interpolate({
              range: [0, 0.8, 1],
              output: [10, 50, 100],
            })
            .interpolate(x1 => x1)}
          cy={x
            .interpolate({
              range: [0, 1],
              output: [2, 0],
            })
            .interpolate(x1 => x1)}
          r={8}
          fill="black"
        />
      </mask>
      <animated.circle
        cx={9}
        cy={9}
        fill="#fff"
        mask="url(#moon-mask)"
        r={x
          .interpolate({
            range: [0, 0.8, 1],
            output: [8, 4, 5],
          })
          .interpolate(x1 => x1)}
      />
      <g>
        {trail.map(({ x, ...rest }, index) => (
          <animated.circle
            key={cx[index]}
            cx={cx[index]}
            cy={cy[index]}
            r="1.5"
            fill="var(--color-bg)"
            style={{
              ...rest,
              transformOrigin: "center center",
              transform: x
                .interpolate({
                  range: [0, 0.85, 1],
                  output: [0, 1.26, 1],
                })
                .interpolate(x2 => `scale(${x2})`),
            }}
          />
        ))}
      </g>
    </StyledAnimatedSVG>
  );
};

export default ThemeSwitch;

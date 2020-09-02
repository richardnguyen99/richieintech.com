/**
 * Parallax component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";

interface ParallaxProps {
  height: number;
}

const StyledParallax = styled.div<ParallaxProps>`
  position: relative;
  @media screen and (min-width: 1200px) {
    transform: translateY(${(props): number => props.height / 10}px);
    backface-visibility: hidden;
    perspective: 1000;
    will-change: transform;
  }
`;

const Parallax: React.FC = ({ children }) => {
  const [height, setHeight] = React.useState<number>(0);

  const handleHeight = React.useCallback((): void => {
    setHeight(window.pageYOffset || document.documentElement.scrollTop);
  }, []);

  React.useEffect(() => {
    // componentDidMount()
    window.addEventListener("scroll", handleHeight);

    // componentDidUpdate()
    return (): void => {
      window.removeEventListener("scroll", handleHeight);
    };
  }, [height, handleHeight]);

  return <StyledParallax height={height}>{children}</StyledParallax>;
};

export default Parallax;

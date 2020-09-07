/**
 * Custom cursor with Styled-components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import styled from "styled-components";

const StyledCursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  mix-blend-mode: difference;
  backface-visibility: hidden;
`;

interface CursorProps {
  hovered: boolean;
}

const StyledCursor = styled.div<CursorProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  mix-blend-mode: difference;
  width: ${props => (props.hovered ? `20px` : `8px`)};
  height: ${props => (props.hovered ? `20px` : `8px`)};
  border-radius: 20px;
  border: 1px solid #cfcbc6;
  transform: translate(-50%, -50%);
  background: ${props => !props.hovered && `#cfcbc6`};
  pointer-events: none;

  transition: all 200ms ease;
  transition-property: width, height, background;
`;

const Cursor: React.FC = () => {
  const location = useLocation();
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    setPos({ top: e.clientY, left: e.clientX });
  };

  useEffect(() => {
    setHovered(false);
    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("a")?.forEach(element => {
      element.addEventListener("mouseover", () => setHovered(true));
      element.addEventListener("mouseout", () => setHovered(false));
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);

      document.querySelectorAll("a")?.forEach(element => {
        element.removeEventListener("mouseover", () => setHovered(true));
        element.removeEventListener("mouseout", () => setHovered(false));
      });
    };
  }, [location]);

  return (
    <StyledCursor style={{ top: pos.top, left: pos.left }} hovered={hovered} />
  );
};

export default Cursor;

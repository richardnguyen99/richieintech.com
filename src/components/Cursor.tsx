/**
 * Custom cursor with Styled-components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

interface CursorProps {
  hovered: boolean;
}

const StyledCursor = styled.div<CursorProps>`
  width: 10px;
  height: 10px;
  border: 0.5px solid var(--color-text);
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%) ${props => props.hovered && `scale(2.5)`};
  pointer-events: none !important;
  z-index: 999;
  mix-blend-mode: difference;
  transition: all 150ms ease;
  transition-property: transform, mix-blend-mode, background-color;

  background-color: ${props => !props.hovered && `#fff`};
`;

const Cursor: React.FC = () => {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    setPos({ top: e.clientY, left: e.clientX });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("a")?.forEach(element => {
      element.addEventListener("mouseover", () => setHovered(true));
      element.addEventListener("mouseout", () => setHovered(false));
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <StyledCursor style={{ top: pos.top, left: pos.left }} hovered={hovered} />
  );
};

export default Cursor;

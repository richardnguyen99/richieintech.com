/**
 * Custom link component for displaying links
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.a`
  position: relative;
  font-family: var(--font-heading);
  font-weight: 700;
  background: transparent;

  &::after {
    content: "";
    position: absolute;
    top: 17px;
    left: -1px;
    width: 105%;
    height: 10%;
    background: #f5f5f5;
    mix-blend-mode: difference;
    transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
  }

  &:hover::after {
    top: 0;
    height: 100%;
  }
`;

const StyledNormalLink = styled.a``;

const CustomizedLink = React.forwardRef<HTMLAnchorElement>((props, ref) => {
  return React.Children.count(props.children) === 1 ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledAnchor ref={ref} {...props}>
      {props.children}
    </StyledAnchor>
  ) : (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledNormalLink ref={ref} {...props}>
      {props.children}
    </StyledNormalLink>
  );
});

CustomizedLink.displayName = "CustomizedLink";

export default CustomizedLink;

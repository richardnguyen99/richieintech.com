/**
 * Header component from my Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { useState, useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "@context/ThemeContext";
import { container } from "@styles/mixins";
import { ThemeSwitch, Logo } from "./svg";

const StyledNavbarWrapper = styled.div`
  /* Use fixed to create a transparent navbar */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  mix-blend-mode: difference;

  z-index: 100;
  opacity: 1;
`;

const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Allow navbar align in center */
  ${container()}
  padding: 3rem 0 0 0;
`;

const StyledNavbarBrand = styled.a`
  display: flex;

  padding: 0px;
  margin-right: 16px;

  font-size: 24px;
  font-family: var(--font-heading);
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -1px;
  color: var(--color-text);

  &:hover {
    color: var(--color-heading);
  }
`;

const StyledLeftNavbarMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRightNavbarMenu = styled.div`
  display: block;
  align-items: center;
`;

const StyledNavbarNavigation = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  list-style: none;
`;

const StyledLeftNavbarNavigation = styled(StyledNavbarNavigation)`
  margin-left: 2rem;
`;

const StyledNavbarNavigationItem = styled.li`
  margin: 8px;
`;

const StyledNavbarNavigationWrapper = styled.div`
  display: flex;
`;

const StyledNavbarNavigationLink = styled.a`
  color: var(--color-text);
  font-family: var(--font-sans);
  font-weight: 500;

  padding: 8px;

  &:hover {
    color: var(--color-text);
  }
`;

const StyledNavbarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 32px;
  margin: 0;
  padding: 0;

  opacity: 0.7;
  border: none;
  background: transparent;

  &:hover {
    opacity: 1;
  }
`;

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const [toggle, setToggle] = useState(false);

  const onToggleHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setToggle(!toggle);
    themeContext.toggle();
  };

  return (
    <StyledNavbarWrapper>
      <StyledNavbar>
        <StyledLeftNavbarMenu>
          <StyledNavbarBrand href="/">
            <Logo />
          </StyledNavbarBrand>
          <StyledLeftNavbarNavigation>
            <StyledNavbarNavigationItem>
              <StyledNavbarNavigationWrapper>
                <StyledNavbarNavigationLink href="/post">
                  Posts
                </StyledNavbarNavigationLink>
              </StyledNavbarNavigationWrapper>
            </StyledNavbarNavigationItem>
            <StyledNavbarNavigationItem>
              <StyledNavbarNavigationWrapper>
                <StyledNavbarNavigationLink href="/snippets">
                  Snippets
                </StyledNavbarNavigationLink>
              </StyledNavbarNavigationWrapper>
            </StyledNavbarNavigationItem>
            <StyledNavbarNavigationItem>
              <StyledNavbarNavigationWrapper>
                <StyledNavbarNavigationLink href="/">
                  Newsletter
                </StyledNavbarNavigationLink>
              </StyledNavbarNavigationWrapper>
            </StyledNavbarNavigationItem>
          </StyledLeftNavbarNavigation>
        </StyledLeftNavbarMenu>
        <StyledRightNavbarMenu>
          <StyledNavbarNavigation id="right">
            <StyledNavbarNavigationItem>
              <StyledNavbarNavigationWrapper>
                <StyledNavbarButton onClick={onToggleHandle}>
                  <ThemeSwitch toggle={toggle} />
                </StyledNavbarButton>
              </StyledNavbarNavigationWrapper>
            </StyledNavbarNavigationItem>
          </StyledNavbarNavigation>
        </StyledRightNavbarMenu>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};

export default Header;

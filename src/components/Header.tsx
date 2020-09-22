/**
 * Header component from my Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { ThemeContext } from "@context/ThemeContext";
import { container, media } from "@styles/mixins";
import { ThemeSwitch, Logo } from "./svg";

const StyledNavbarWrapper = styled.div`
  /* Use fixed to create a transparent navbar */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: var(--color-bg);

  z-index: 1000;
`;

interface StyledNavbarProps {
  scrolled: boolean;
}

const StyledNavbar = styled.header<StyledNavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Allow navbar align in center */
  ${container()}
  padding-top: ${props => (props.scrolled ? `3rem` : `0.5rem`)};
  border-bottom: ${props => !props.scrolled && `1px solid var(--color-border)`};

  transition: all 200ms ease;
`;

const StyledNavbarBrand = styled(Link)`
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
  display: none;

  ${media.lg`display: flex;`}
`;

const StyledNavbarNavigationItem = styled.li`
  margin: 8px;
`;

const StyledNavbarNavigationWrapper = styled.div`
  display: flex;
`;

const StyledNavbarNavigationLink = styled(Link)`
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

  border: none;
  background: transparent;
`;

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const [toggle, setToggle] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const onToggleHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setToggle(!toggle);
    themeContext.toggle();
  };

  const handleScroll = (): void => {
    const currentHeight =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentHeight > 30) {
      setTransparent(false);
    }

    if (currentHeight < 10) {
      setTransparent(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return (): void => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, [transparent]);

  return (
    <StyledNavbarWrapper>
      <StyledNavbar scrolled={transparent}>
        <StyledLeftNavbarMenu>
          <StyledNavbarBrand to="/">
            <Logo />
          </StyledNavbarBrand>
          <StyledLeftNavbarNavigation>
            <StyledNavbarNavigationItem>
              <StyledNavbarNavigationWrapper>
                <StyledNavbarNavigationLink to="/post">
                  Posts
                </StyledNavbarNavigationLink>
              </StyledNavbarNavigationWrapper>
            </StyledNavbarNavigationItem>
            <StyledNavbarNavigationItem>
              <StyledNavbarNavigationWrapper>
                <StyledNavbarNavigationLink to="/snippets">
                  Snippets
                </StyledNavbarNavigationLink>
              </StyledNavbarNavigationWrapper>
            </StyledNavbarNavigationItem>
            <StyledNavbarNavigationItem>
              <StyledNavbarNavigationWrapper>
                <StyledNavbarNavigationLink to="/">
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

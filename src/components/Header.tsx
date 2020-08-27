/**
 * Header component from my Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { useState } from "react";
import styled from "styled-components";

import { ThemeSwitch } from "./svg";
import Container from "./Container";

const StyledNavbarContainer = styled(Container)`
  position: sticky;
`;

const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px;
  height: 60px;
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
  color: var(--color-heading);

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

const StyledNavbarNavigationItem = styled.li`
  margin: 8px;
`;

const StyledNavbarNavigationWrapper = styled.div`
  display: flex;
`;

const StyledNavbarNavigationLink = styled.a`
  color: var(--color-text);
  font-family: var(--font-heading);
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
  const [toggle, setToggle] = useState(false);

  const onToggleHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <StyledLeftNavbarMenu>
          <StyledNavbarBrand href="/">
            <span>Richie</span>
            <span> Tech</span>
          </StyledNavbarBrand>
          <StyledNavbarNavigation>
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
          </StyledNavbarNavigation>
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
    </StyledNavbarContainer>
  );
};

export default Header;

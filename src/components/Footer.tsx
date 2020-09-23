/**
 * Footer component for Gatsby app
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { container, media } from "@styles/mixins";

const StyledFooterWrapper = styled.footer`
  background: var(--color-footer);
  position: relative;
`;

const StyledFooter = styled.div`
  ${container()};

  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 1px solid var(--color-border);

  ${media.xl`
    justify-content: space-between;
    flex-direction: initial;
  `}
`;

const StyledFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 2rem;
  align-items: center;

  ${media.xl`
    text-align: initial;
    padding-bottom: 0;
    align-items: flex-start;
  `}

  p {
    font-size: 14px;
    font-family: var(--font-sans);
    display: none;

    ${media.xl`display: block;`}
  }

  img {
    display: none;

    ${media.xl`display: block;`}
  }
`;

const StyledFooterBrand = styled(Link)`
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 2rem;
  color: var(--color-heading);
`;

const StyledFooterRight = styled.div`
  display: flex;
  justify-content: space-around;

  ${media.xl`justify-content: initial;`}
`;

const StyledFooterColumn = styled.div`
  ${media.xl`margin-left: 3rem;`}

  p {
    font-size: 16px;
    font-family: var(--font-sans);
  }
`;

const StyledFooter2Grid = styled.div`
  display: grid;
  gap: 6px;
  padding-top: 0.75rem;
  width: 200px;
  grid-template-columns: 1fr;

  ${media.xl`
    grid-template-columns: 1fr 1fr;
  `}

  p {
    margin: 0;
  }
`;

const StyledFooter1Grid = styled.div`
  display: grid;
  gap: 6px;
  padding-top: 0.75rem;
  width: 100px;
  grid-template-columns: 1fr;

  a {
    font-size: 14px;
    font-family: var(--font-sans);
  }
`;

const StyledDesktopOnly = styled.div`
  display: block;
  padding-top: 2.5rem;
  text-align: center;

  ${media.xl`display: none;`}
`;

const Footer: React.FC = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooter>
        <StyledFooterLeft>
          <div>
            <StyledFooterBrand to="/">Richie in Tech</StyledFooterBrand>
            <p style={{ fontWeight: 700 }}>Thank you for visiting me!</p>
          </div>
          <img
            style={{}}
            src="https://img.shields.io/static/v1?label=Made by Richard&message=with ♥&color=red"
            alt="Made with love in Vietnam"
          />
        </StyledFooterLeft>
        <StyledFooterRight>
          <StyledFooterColumn>
            <p style={{ fontWeight: 700 }}>Tutorials</p>
            <StyledFooter2Grid>
              <p>Gatsby</p>
              <p>Typescript</p>
              <p>React</p>
              <p>Python</p>
            </StyledFooter2Grid>
          </StyledFooterColumn>
          <StyledFooterColumn>
            <p style={{ fontWeight: 700 }}>Link</p>
            <StyledFooter1Grid>
              <a href="https://richieintech.com/rss.xml">RSS</a>
              <a href="https://github.com/richardnguyen99">Github</a>
            </StyledFooter1Grid>
          </StyledFooterColumn>
        </StyledFooterRight>
        <StyledDesktopOnly>
          <img
            style={{}}
            src="https://img.shields.io/static/v1?label=Made by Richard&message=with ♥&color=red"
            alt="Made with love in Vietnam"
          />
        </StyledDesktopOnly>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;

import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import { SEO, Parallax, Layout, Row, Col } from "@components";
import { Arrow } from "@components/svg";
import { IndexQueryQuery } from "@generated/graphql";
import { container } from "@styles/mixins";

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }

    placeholderImage: file(relativePath: { eq: "avatar.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

interface HomeProps {
  data: IndexQueryQuery;
}

const StyledHeroWrapper = styled.section`
  position: relative;
  height: 50vh;
  ${container()};

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const StyledHeroContent = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
`;

const StyledHeroHeading = styled.h1`
  font-family: var(--font-sans);
  font-weight: 800;
  font-size: calc(70px + 18 * (100vw - 1024px) / 416);
  line-height: 5rem;
  letter-spacing: -5px;

  margin-top: 0;

  color: var(--color-text);
`;

const StyledHeroSubContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  p {
    flex: 0 0 50%;
    margin: 0;

    font-family: var(--font-sans);
  }
`;

const StyledHeroCount = styled.div`
  flex: 0 0 50%;
  font-weight: 600;
  font-family: var(--font-heading);

  span:nth-child(2) {
    width: 40px;
    height: 1px;
    display: inline-block;
    margin: 0 16px;
    vertical-align: middle;
    opacity: 0.3;
    background-color: var(--color-text);
  }
`;

const StyledHeroButton = styled.div`
  flex: 0 0 50%;
  margin: 64px 0 0 auto;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 1000;

  > div {
    display: inline-block;
    margin-right: 24px;
    height: 100%;
    vertical-align: top;
  }

  svg:first-of-type {
    top: 50%;
    left: 50%;
    transform: translate(20px, -50%);
  }
`;

const StyledContentWrapper = styled.section`
  height: 50vh;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const StyledImageContainer = styled.div`
  overflow: hidden;
  clip-path: circle(140px at 60% 50%);
`;

const StyledNumber = styled.div`
  position: absolute;
  left: 0;
  bottom: -150px;
  width: 100%;

  h1 {
    margin: 0;
    opacity: 0.2;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-fill-color: transparent;
    font-size: calc(280px + 40 * (100vw - 1024px) / 416);
    line-height: calc(200px + 40 * (100vw - 1024px) / 416);
    font-family: var(--font-heading);
  }

  div {
    ${container()};
  }
`;

const Home: React.FC<HomeProps> = ({ data: { site, placeholderImage } }) => {
  const SEOData = site?.siteMetadata || {};
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Layout>
        <SEO data={SEOData} />
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Row>
              <Col lg={5}>
                <StyledHeroHeading>This is Richard</StyledHeroHeading>
                <StyledHeroSubContent>
                  <StyledHeroCount>
                    <span>01</span>
                    <span />
                    <span>03</span>
                  </StyledHeroCount>
                  <p>
                    I write this website as my digital notebook to store what
                    I&apos;ve learned about programming.
                  </p>
                  <StyledHeroButton
                    onMouseOver={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    KNOW MORE
                    <Arrow onHovered={hovered} />
                  </StyledHeroButton>
                </StyledHeroSubContent>
              </Col>
              <Col lg={6} style={{ marginLeft: "auto" }}>
                <StyledImageContainer>
                  <Parallax>
                    <Img fluid={placeholderImage.childImageSharp.fluid} />
                  </Parallax>
                </StyledImageContainer>
              </Col>
            </Row>
            <StyledNumber>
              <div>
                <h1>01</h1>
              </div>
            </StyledNumber>
          </StyledHeroContent>
        </StyledHeroWrapper>
        <StyledContentWrapper />
      </Layout>
    </>
  );
};

export default Home;

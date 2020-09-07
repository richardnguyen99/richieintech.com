import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";

import { SEO, Parallax, Layout, Row, Col, Tags } from "@components";
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

    allMdx {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }

    latest: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            description
            categories
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1040, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;

interface HomeProps {
  data: IndexQueryQuery;
}

/** HERO SECTION STARTS */

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

/** HERO SECTION ENDS */
/** CONTENT SECTION STARTS */
const StyledContentWrapper = styled.section`
  ${container()}

  position: relative;
  z-index: 1000;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "newest categories" "newest popular";
  gap: 64px 96px;
`;

const StyledNewestPosts = styled.div`
  grid-area: "newest / newest / newest / newest";
`;

const StyledHeading = styled.h3`
  font-size: 32px;
  color: var(--color-heading);
  font-family: var(--font-heading);
  font-weight: 800;
  letter-spacing: -1px;
  text-transform: uppercase;

  margin-top: 0;
`;

const postAnimation = keyframes`
    0%   {border-left: 2px solid #ffffff;}
    25%  {border-left: 3px solid #ffe6e6;}
    50%  {border-left: 4px solid #ff8080;}
    100% {border-left: 5px solid #ff0000;}
`;

const StyledPost = styled.div`
  border-radius: 8px;
  border: 1px solid var(--color-border);

  padding: 2rem;
  margin-bottom: 1.5rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  h4 {
    font-size: 20px;
    font-weight: 800;
    font-family: var(--font-heading);
  }

  h6 {
    font-size: 17px;
    font-weight: 400;
    font-family: var(--font-sans);
    margin-bottom: 1rem;
  }

  &:hover {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    animation-name: ${postAnimation};
    animation-duration: 0.25s;
    border-left: 8px solid var(--color-heading);
  }
`;

const StyledPostContainer = styled.a`
  height: 100%;
`;

const StyledTags = styled.div`
  grid-area: "categories /  categories / categories / categories";
`;

const StyledPopularPosts = styled.div``;
/** CONTENT SECTION ENDS */

const Home: React.FC<HomeProps> = ({
  data: { site, placeholderImage, latest, allMdx },
}) => {
  const SEOData = site?.siteMetadata || {};
  const tags = new Set<string>();
  allMdx.edges.forEach(post => {
    post.node.frontmatter.tags.forEach(tag => {
      tags.add(tag);
    });
  });
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
        <StyledContentWrapper>
          <StyledNewestPosts>
            <StyledHeading>Latest Posts</StyledHeading>
            <div>
              {latest.edges.map(edge => (
                <StyledPost key={edge.node.frontmatter.title}>
                  <StyledPostContainer href={edge.node.fields.slug}>
                    <h4>{edge.node.frontmatter.title}</h4>
                    <h6>{edge.node.frontmatter.description}</h6>
                    <p>{edge.node.excerpt}</p>
                  </StyledPostContainer>
                </StyledPost>
              ))}
            </div>
          </StyledNewestPosts>
          <StyledTags>
            <StyledHeading>Tags</StyledHeading>
            <div>
              <Tags tags={Array.from(tags)} />
            </div>
          </StyledTags>
          <StyledPopularPosts />
        </StyledContentWrapper>
      </Layout>
    </>
  );
};

export default Home;

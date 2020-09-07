/**
 * Default blog page for Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { BlogQueryQuery } from "@generated/graphql";
import { Layout, Tags } from "@components";
import { container } from "@styles/mixins";

export const query = graphql`
  query BlogQuery {
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

interface PostProps {
  data: BlogQueryQuery;
}

const StyledBlankWrapper = styled.section`
  min-height: 30vh;
`;

const StyledNumber = styled.div`
  position: absolute;
  left: 800px;
  top: 100px;
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

const StyledContentWrapper = styled.section`
  ${container()}

  position: relative;
`;

const StyledContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    font-family: var(--font-heading);
    color: var(--color-heading);
  }
`;

const StyledContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
`;

const StyledPost = styled.div`
  position: relative;
  background: var(--color-bg-post);
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
    max-height: 20px;
    font-size: 16px;
    font-weight: 400;
    font-family: var(--font-sans);
    margin-bottom: 1rem;
  }

  p {
    height: 40px;
    font-size: 14px;
    font-family: var(--font-sans);

    margin-top: 2.5rem;
    margin-bottom: 1rem;
    mask-image: linear-gradient(180deg, #000 50%, transparent);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0px;
    background-color: var(--color-heading);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    transition: all 200ms ease;
    opacity: 0;
  }

  &:hover {
    &::before {
      width: 8px;
      opacity: 1;
    }
  }
`;

const StyledTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledPostContainer = styled.a`
  height: 100%;
`;

const Post: React.FC<PostProps> = ({ data: { latest } }) => {
  return (
    <Layout>
      <StyledBlankWrapper>
        <StyledNumber>
          <div>
            <h1>{latest.edges.length}</h1>
          </div>
        </StyledNumber>
      </StyledBlankWrapper>
      <StyledContentWrapper>
        <StyledContentHeader>
          <h1>Newest</h1>
          <h4>
            {latest.edges.length}
            &nbsp; articles
          </h4>
        </StyledContentHeader>
        <StyledContentGrid>
          {latest.edges.map(edge => (
            <StyledPost key={edge.node.frontmatter.title}>
              <StyledPostContainer href={edge.node.fields.slug}>
                <h4>{edge.node.frontmatter.title}</h4>
                <h6>{edge.node.frontmatter.description}</h6>
                <p>{edge.node.excerpt}</p>
                <StyledTagContainer>
                  <Tags tags={edge.node.frontmatter.tags} />
                </StyledTagContainer>
              </StyledPostContainer>
            </StyledPost>
          ))}
        </StyledContentGrid>
      </StyledContentWrapper>
    </Layout>
  );
};

export default Post;

/* eslint-disable import/no-extraneous-dependencies */
/**
 * Template for rendering MDX files to HTML
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";
import { MarkGithubIcon } from "@primer/octicons-react";
import Image from "gatsby-image";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout, SEO, Tags } from "@components";
import { container } from "@styles/mixins";
import { PostQuery, IndexQueryQuery } from "@generated/graphql";

interface PostTemplateProps {
  data: PostQuery;
}

export const postQuery = graphql`
  query Post($id: String) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      id
      timeToRead
      fields {
        slug
      }
      frontmatter {
        categories
        title
        description
        tags
        date(formatString: "YYYY-MM-DD")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1040, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    placeholderImage: file(relativePath: { eq: "avatar.JPG" }) {
      childImageSharp {
        fixed(width: 48, height: 48, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const StyledPostLayout = styled.div`
  ${container()}

  position: relative;
  z-index: 999;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "post profile" "post headings";
  gap: 16px 16px;

  padding-top: 128px;
`;

const StyledPostContainer = styled.div`
  grid-area: "post / post / post / post";
  min-width: 0;
`;

const StyledPost = styled.article`
  border-radius: 6px;
  background: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
`;

const StyledPostCover = styled.div`
  position: relative;
  width: 100%;
`;

const StyledPostHeader = styled.header`
  overflow-wrap: anywhere;
  word-break: break-word;

  padding: 2rem 4rem 0 4rem;

  h1 {
    font-size: 3rem;
    font-family: var(--font-heading);
    font-weight: 800;
    color: var(--color-heading);

    margin-top: 0;
    margin-bottom: 0;
  }

  h4 {
    font-size: 1rem;
    font-family: var(--font-sans);
    color: var(--color-text);
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    font-size: 16px;
    font-family: var(--font-sans);

    div {
      font-size: 14px;
      color: var(--color-subText);
    }

    > * {
      margin-right: 1rem;
    }
  }
`;

const StyledTagContainer = styled.div`
  display: flex;
  grid-area: "profile / profile / profile / profile";
`;

const StyledPostContent = styled.div`
  font-size: 16px;
  font-family: var(--font-sans);
  padding: 2rem 4rem;
`;

const StyledSideBar = styled.aside`
  display: block;
`;

const StyledSideBarWrapper = styled.div`
  position: sticky;
  top: calc(65px + 1rem);
`;

const StyledProfileContainer = styled.div`
  border-radius: 6px;
  background: var(--color-bg);
  color: var(--color-text);

  border: 1px solid var(--color-border);

  padding: 1rem;
  padding-top: 0;
  border-top: 2rem solid var(--color-text);
`;

const StyledImageWrapper = styled.div`
  display: inline-block;
  border-radius: 100%;
  height: 48px;
  width: 48px;
  position: relative;
  margin-right: 0.5rem;
`;

const StyledAuthorName = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: var(--font-sans);
`;

const StyledFollowButton = styled.a`
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 6px;
  outline: none;
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.5rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border: 1px solid var(--color-border);
  background: var(--color-text);
  color: var(--color-bg);
`;

const StyledMetadataContainer = styled.div`
  font-family: var(--font-sans);
`;

const StyledMetadataList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledMetadataItem = styled.li`
  padding: 0.5rem 0;
  h3 {
    text-transform: uppercase;
    font-family: inherit;
    font-size: 14px;
    margin: 0;
  }

  p {
    font-family: inherit;
    font-size: 14px;
    opacity: 0.7;
    margin: 0;
  }
`;

const PostTemplate: React.FC<PostTemplateProps> = ({
  data: { mdx, placeholderImage },
}) => {
  const SEOData: IndexQueryQuery["site"]["siteMetadata"] = {
    defaultDescription: mdx.frontmatter.description,
    defaultTitle: mdx.frontmatter.title,
    siteUrl: `https://richieintech.com${mdx.fields.slug}`,
    titleTemplate: ` %s `,
    twitterUsername: `@richardnguyenmh`,
  };

  return (
    <Layout>
      <SEO data={SEOData} />
      <StyledPostLayout>
        <MDXProvider components={{}}>
          <StyledPostContainer>
            <StyledPost>
              {mdx.frontmatter.thumbnail && (
                <StyledPostCover>
                  <Image
                    style={{ borderRadius: `6px` }}
                    fluid={mdx.frontmatter.thumbnail.childImageSharp.fluid}
                  />
                </StyledPostCover>
              )}
              <StyledPostHeader>
                <h1>{mdx.frontmatter.title}</h1>
                <h4>{mdx.frontmatter.description}</h4>
                <StyledTagContainer>
                  <Tags tags={mdx.frontmatter.tags} />
                </StyledTagContainer>
                <div>
                  <p>Richard Nguyen</p>
                  <div>
                    <time>{mdx.frontmatter.date}</time>
                    <span>
                      {mdx.timeToRead}
                      &nbsp; min to read
                    </span>
                  </div>
                </div>
              </StyledPostHeader>
              <StyledPostContent>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </StyledPostContent>
            </StyledPost>
          </StyledPostContainer>
        </MDXProvider>
        <StyledSideBar>
          <StyledSideBarWrapper>
            <StyledProfileContainer>
              <div style={{ display: "flex", marginTop: "-1rem" }}>
                <StyledImageWrapper>
                  <Image
                    fixed={placeholderImage.childImageSharp.fixed}
                    style={{
                      borderRadius: `100%`,
                      width: `100%`,
                      height: `100%`,
                      display: `inline-block`,
                      verticalAlign: `middle`,
                    }}
                  />
                </StyledImageWrapper>
                <StyledAuthorName>Richard Nguyen</StyledAuthorName>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontFamily: "var(--font-sans)",
                  margin: `0 0 0.5rem 0`,
                }}
              >
                A Javascript/Typescript/Python writer
              </p>
              <StyledFollowButton href="https://github.com/richardnguyen99">
                Follow me on&nbsp;
                <MarkGithubIcon />
              </StyledFollowButton>
              <StyledMetadataContainer>
                <StyledMetadataList>
                  <StyledMetadataItem>
                    <h3>Status</h3>
                    <p>Student</p>
                  </StyledMetadataItem>
                  <StyledMetadataItem>
                    <h3>Location</h3>
                    <p>Kent, Washington, US</p>
                  </StyledMetadataItem>
                  <StyledMetadataItem>
                    <h3>Status</h3>
                    <p>Student</p>
                  </StyledMetadataItem>
                </StyledMetadataList>
              </StyledMetadataContainer>
            </StyledProfileContainer>
          </StyledSideBarWrapper>
        </StyledSideBar>
      </StyledPostLayout>
    </Layout>
  );
};

export default PostTemplate;

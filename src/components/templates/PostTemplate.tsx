/* eslint-disable import/no-extraneous-dependencies */
/**
 * Template for rendering MDX files to HTML
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Image from "gatsby-image";
import { Link, graphql } from "gatsby";
import { MarkGithubIcon } from "@primer/octicons-react";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout, SEO, Tags } from "@components";
import { container } from "@styles/mixins";
import { useScrollDirection } from "@hooks";
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
      headings(depth: h1) {
        depth
        value
      }
      tableOfContents
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "post profile" "post headings";
  gap: 16px 16px;

  padding-top: 128px;
`;

const StyledPostContainer = styled.div`
  grid-area: post / post / post / post;
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
`;

const StyledPostContent = styled.div`
  font-size: 16px;
  font-family: var(--font-sans);
  padding: 2rem 4rem;

  h1 {
    a {
      position: absolute;
      top: -5px;
      left: -40px;
      fill: var(--color-text);
      opacity: 0;
    }

    &:hover {
      a {
        opacity: 1;
      }
    }
  }
`;

const StyledSideBar = styled.aside`
  display: block;
  grid-area: profile / profile / profile / profile;
  position: sticky;
  top: calc(65px + 1rem);
`;

const StyledSideBarWrapper = styled.div``;

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

const StyledContentTable = styled.aside`
  margin-top: 1rem;
  border-radius: 6px;
  background: var(--color-bg);
  color: var(--color-text);

  border: 1px solid var(--color-border);

  padding: 1rem;
`;

const StyledTableOfContent = styled.nav`
  padding: 1rem 0rem;
  position: relative;

  h1 {
    font-size: 24px;
    font-family: var(--font-sans);
    color: var(--color-text);
    margin-top: 0;
    padding: 0;
    letter-spacing: -1px;
  }
`;

const StyledTOCList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 2;
`;

const StyledTOCListItem = styled.li`
  font-family: var(--font-sans);
  transition: all 0.3s ease;
`;

const strikeOut = keyframes`
  0% {
    height: 100%;
    top: auto;
    bottom: 0;
  }
  100% {
    height: 0;
    top: auto;
    bottom: 0;
  }
`;

const strikeUpIn = keyframes`
  0% {
    top: auto;
    bottom: 0;
    height: 0;
  }
  100% {
    top: auto;
    bottom: 0;
    height: 100%;
  }
`;
const strikeDownIn = keyframes`
  0% {
    top: 0;
    bottom: auto;
    height: 0;
  }
  100% {
    top: 0;
    bottom: auto;
    height: 100%;
  }
`;

const StyledTOCListLink = styled(Link)`
  font-size: 16px;
  display: inline-block;
  position: relative;
  padding-left: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    width: 3px;
    background: var(--color-text);

    animation: ${strikeOut} 0.3s ease;
  }

  &.d-active {
    &::before {
      height: 100%;
      animation: ${strikeDownIn} 0.3s ease;
    }
  }
  &.u-active {
    &::before {
      height: 100%;
      animation: ${strikeUpIn} 0.3s ease;
    }
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

  const direction = useScrollDirection({ initialDirection: "down" });

  const bodyRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const id = entry.target.getAttribute("id");
      if (id) {
        if (entry.intersectionRatio > 0) {
          const element = document.querySelector(
            `nav li a[href="${mdx.fields.slug.concat("#", id)}"]`
          );

          if (element) {
            if (direction === "down") {
              if (!element.classList.contains("u-active")) {
                element.classList.add("d-active");
              }
            } else if (direction === "up") {
              if (!element.classList.contains("d-active")) {
                element.classList.add("u-active");
              }
            }
          }
        } else {
          const element = document.querySelector(
            `nav li a[href="${mdx.fields.slug.concat("#", id)}"]`
          );

          if (element) {
            if (element.classList.contains("d-active"))
              element.classList.remove("d-active");
            if (element.classList.contains("u-active"))
              element.classList.remove("u-active");
          }
        }
      }
    });

    if (bodyRef.current) {
      bodyRef.current.querySelectorAll("h1[id]").forEach(element => {
        observer.observe(element);
      });
    }
  }, [tocRef, direction, mdx.fields.slug]);

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
                    style={{
                      borderTopLeftRadius: `6px`,
                      borderTopRightRadius: `6px`,
                    }}
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
              <StyledPostContent id="body" ref={bodyRef}>
                <MDXRenderer headings={mdx.headings}>{mdx.body}</MDXRenderer>
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
            </StyledProfileContainer>
          </StyledSideBarWrapper>
          <StyledContentTable>
            <StyledTableOfContent ref={tocRef} id="toc">
              <h1>Table of Content</h1>
              <StyledTOCList>
                {typeof mdx.tableOfContents.items !== "undefined"
                  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    mdx.tableOfContents.items.map(item => (
                      <StyledTOCListItem key={item.value}>
                        <StyledTOCListLink to={item.url}>
                          {item.title}
                        </StyledTOCListLink>
                      </StyledTOCListItem>
                    ))
                  : null}
              </StyledTOCList>
            </StyledTableOfContent>
          </StyledContentTable>
        </StyledSideBar>
      </StyledPostLayout>
    </Layout>
  );
};

export default PostTemplate;

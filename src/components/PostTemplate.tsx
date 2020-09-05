/* eslint-disable import/no-extraneous-dependencies */
/**
 * Template for rendering MDX files to HTML
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout, SEO } from "@components";
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
  }
`;

const PostTemplate: React.FC<PostTemplateProps> = ({ data: { mdx } }) => {
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
      <MDXProvider components={{}}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default PostTemplate;

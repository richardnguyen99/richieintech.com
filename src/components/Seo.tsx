/**
 * SEO component that updates the header tag in HTML
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";
import { Helmet, HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: HelmetProps["meta"];
  title?: string;
}

const SEO: React.FC<SEOProps> = ({ description = "", lang = "en", meta = [], title = "title"}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ``}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
      ]}
    ></Helmet>
  );
};

export default SEO;

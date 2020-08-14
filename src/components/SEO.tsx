/**
 * SEO component for Gatsby application
 *
 * This component is based on the Gatsby official
 * SEO guide
 * @see https://www.gatsbyjs.org/docs/add-seo-component/
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { Helmet } from "react-helmet";

import { IndexQueryQuery } from "../generated/graphql";

interface SEOProps {
  // Figure out how to remove these disable lines
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  data: IndexQueryQuery["site"]["siteMetadata"];
}

const SEO: React.FC<SEOProps> = ({ data }) => {
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    twitterUsername,
    siteUrl,
  } = data;

  return (
    <Helmet title={defaultTitle} titleTemplate={titleTemplate}>
      <script type="application/json+ld">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Website",
          url: "https://www.richieintech.com",
          name: "Richie In Tech",
        })}
      </script>
      <meta name="description" content={defaultDescription} />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      {defaultTitle && <meta property="og:title" content={defaultTitle} />}

      {defaultDescription && (
        <meta property="og:description" content={defaultDescription} />
      )}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {defaultTitle && <meta name="twitter:title" content={defaultTitle} />}

      {defaultDescription && (
        <meta name="twitter:description" content={defaultDescription} />
      )}
    </Helmet>
  );
};

export default SEO;

import React from "react";
import { graphql } from "gatsby";

import { SEO, Layout } from "@components";
import { IndexQueryQuery } from "@generated/graphql";

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
  }
`;

interface HomeProps {
  data: IndexQueryQuery;
}

const Home: React.FC<HomeProps> = ({ data: { site } }) => {
  const SEOData = site?.siteMetadata || {};
  return (
    <Layout>
      <SEO data={SEOData} />
      <div>Hello, World!</div>
    </Layout>
  );
};

export default Home;

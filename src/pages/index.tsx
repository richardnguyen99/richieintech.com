import React from "react";
import styled from "styled-components";
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

const StyledHeroWrapper = styled.section`
  height: 50vh;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const StyledContentWrapper = styled.section`
  height: 50vh;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const Home: React.FC<HomeProps> = ({ data: { site } }) => {
  const SEOData = site?.siteMetadata || {};

  return (
    <>
      <Layout>
        <SEO data={SEOData} />
        <StyledHeroWrapper />
        <StyledContentWrapper />
      </Layout>
    </>
  );
};

export default Home;

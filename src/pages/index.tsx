/**
 * Home page of the Gatsby site
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Index: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello Gatsby!</h1>
  </Layout>
);

export default Index;

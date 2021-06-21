/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <header>{data.site.siteMetadata.title || "Title"}</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;

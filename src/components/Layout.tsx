/**
 * Layout component structures the Gatsby's pages.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";

import Header from "./Header";

interface PageProps {
  title?: string;
  description?: string;
}

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;

/**
 * Layout component structures the Gatsby's pages.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface PageProps {
  title?: string;
  description?: string;
}

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

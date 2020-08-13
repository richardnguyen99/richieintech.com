/**
 * Layout component structures the Gatsby's pages.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import "../styles/main.scss";

interface PageProps {
  title?: string;
  description?: string;
}

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;

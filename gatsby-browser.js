/**
 * Gatsby configuration for developing
 */

import React from "react";

import GlobalStyle from "./src/components/GlobalStyle";
import "./static/font.css";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};

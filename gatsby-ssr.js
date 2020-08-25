/**
 * Gatsby configuration for production
 */

import React from "react";

import ThemeProvider from "./src/context/ThemeContext";
import GlobalStyle from "./src/components/GlobalStyle";
import "./static/font.css";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};

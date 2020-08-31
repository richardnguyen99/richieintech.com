/**
 * Gatsby configuration for developing
 */

import React from "react";

import ThemeProvider from "./src/context/ThemeContext";
import GlobalStyle from "./src/components/GlobalStyle";
import Cursor from "./src/components/Cursor";
import "./static/font.css";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Cursor />
      {element}
    </ThemeProvider>
  );
};

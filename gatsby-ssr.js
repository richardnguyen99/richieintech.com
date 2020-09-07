/**
 * Gatsby configuration for production
 */

import React from "react";
import { LocationProvider } from "@reach/router";

import ThemeProvider from "./src/context/ThemeContext";
import GlobalStyle from "./src/components/GlobalStyle";
import Cursor from "./src/components/Cursor";
import "./static/font.css";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <LocationProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Cursor />
        {element}
      </ThemeProvider>
    </LocationProvider>
  );
};

/**
 * Gatsby configuration for developing
 */

import React from "react";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return <div>{element}</div>;
};

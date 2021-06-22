/**
 * Global header for the Gatsby site
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
`;

const Header: React.FC = () => {
  return <StyledHeader>Hello</StyledHeader>
};

export default Header;

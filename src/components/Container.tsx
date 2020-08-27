/**
 * A container component to create a standard
 * layout for application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1040px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-left: auto;
  margin-right: auto;

  z-index: 2;
`;

export default StyledContainer;

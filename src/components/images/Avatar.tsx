/**
 * Avatar component from Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import { AvatarQuery } from "@generated/graphql";

export const query = graphql`
  query Avatar {
    placeholderImage: file(relativePath: { eq: "avatar.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Image: React.FC = () => {
  const img = useStaticQuery<AvatarQuery>(query);

  return <Img fluid={img.placeholderImage.childImageSharp.fluid} />;
};

export default Image;

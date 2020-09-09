/* eslint-disable no-nested-ternary */
/**
 * Default blog page for Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { graphql, PageProps } from "gatsby";

import { BlogQueryQuery } from "@generated/graphql";
import { useLocalSearch } from "@hooks";
import { PostPageTemplate } from "@components/templates";

export const query = graphql`
  query BlogQuery {
    latest: allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            description
            categories
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1040, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;

const Post: React.FC<PageProps<BlogQueryQuery>> = props => {
  const { location, navigate, data } = props;

  const [localQuery, setQuery, results] = useLocalSearch(location.search);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    navigate(e.target.value ? `/post/?search=${e.target.value}` : ``);
    setQuery(e.target.value);
  };

  console.log(results);

  return (
    <PostPageTemplate
      localQuery={localQuery}
      onInputChangeValue={onChangeValue}
      data={data}
      results={results}
    />
  );
};

export default Post;

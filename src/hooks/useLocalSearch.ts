/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Custom for handling Searching feature in Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// eslint-disable-next-line import/no-extraneous-dependencies
import lunr from "lunr";
import { useLunr } from "react-lunr";
import * as queryString from "query-string";

import { SearchQuery } from "@generated/graphql";

const useLocalSearch = (
  searchString: string
): [
  string | string[],
  React.Dispatch<React.SetStateAction<string | string[]>>,
  lunr.Index.Result[] | string[]
] => {
  const { search } = queryString.parse(searchString);
  const [query, setQuery] = React.useState(search || "");
  const { localSearchPages } = useStaticQuery<SearchQuery>(graphql`
    query Search {
      localSearchPages {
        index
        store
      }
    }
  `);
  const result = useLunr<string>(
    // @ts-ignore
    query,
    localSearchPages.index,
    localSearchPages.store
  );

  console.log(result);

  return [query, setQuery, result];
};

export default useLocalSearch;

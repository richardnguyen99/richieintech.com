/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Testing suite for the Post page
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { StaticQuery } from "gatsby";
import renderer from "react-test-renderer";

import { BlogQueryQuery } from "@generated/graphql";
import PostPageTemplate from "@components/templates/PostPageTemplate";

beforeEach(() => {
  (StaticQuery as jest.Mock<StaticQuery>).mockImplementation(({ render }) =>
    render({
      latest: {
        edges: {
          node: {
            fields: {
              slug: "/",
            },
            frontmatter: {
              title: "Default Title",
              tags: ["tags"],
              description: "Default description",
              categories: ["blogs"],
              date: "2020-09-06",
              thumbnail: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 2,
                    src: `test_image.jpg`,
                    srcSet: `some srcSet`,
                    srcSetWebp: `some srcSetWebp`,
                    sizes: `(max-width: 600px) 100vw, 600px`,
                    base64: `string_of_base64`,
                  },
                },
              },
            },
            excerpt: undefined,
            timeToRead: undefined,
          },
        },
      },
    })
  );
});

describe("Post page", () => {
  it("matches snapshot", () => {
    const data: BlogQueryQuery = {
      latest: {
        edges: [
          {
            node: {
              fields: {
                slug: "/",
              },
              frontmatter: {
                title: "Default Title",
                tags: ["tags"],
                description: "Default description",
                categories: ["blogs"],
                date: "2020-09-06",
                thumbnail: {
                  childImageSharp: {
                    fluid: {
                      aspectRatio: 2,
                      src: `test_image.jpg`,
                      srcSet: `some srcSet`,
                      srcSetWebp: `some srcSetWebp`,
                      sizes: `(max-width: 600px) 100vw, 600px`,
                      base64: `string_of_base64`,
                    },
                  },
                },
              },
              excerpt: `Some to read`,
              timeToRead: 1,
            },
          },
        ],
      },
    };

    const localQuery = "";
    const results = [
      {
        description:
          "A walkthrough how to integrate Markdown React with Gatsby",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim…",
        id: "5d772e8d-8cc4-5fe0-b5c3-1e772423e0a8",
        slug: "/post/setup-mdx-with-gatsby/",
        tags: ["gatsby", "typescript", "styled-components"],
        title: "How to setup MDX with Gatsby",
      },
    ];

    const tree = renderer
      .create(
        <PostPageTemplate
          data={data}
          localQuery={localQuery}
          onInputChangeValue={() => {}}
          // @ts-ignore
          results={results}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

/**
 * Testing suite for the Post page
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { StaticQuery } from "gatsby";
import renderer from "react-test-renderer";

import { BlogQueryQuery } from "@generated/graphql";
import Post from "../post";

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

describe("Index page", () => {
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
    const tree = renderer.create(<Post data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

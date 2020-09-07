/**
 * Testing suite for Index (Home) page
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";
import { StaticQuery } from "gatsby";
import renderer from "react-test-renderer";

import { IndexQueryQuery } from "@generated/graphql";
import Index from "../index";

beforeEach(() => {
  (StaticQuery as jest.Mock<StaticQuery>).mockImplementation(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "Richie in tech",
          titleTemplate: "%s | Richie in tech",
          description:
            "Official blog of Richie about techs, programing and coding.",
          url: "https://www.richieintech.com",
          twitterUsername: "@richardnguyenmh",
        },
      },
      placeholderImage: {
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

      allMdx: {
        edges: {
          node: {
            frontmatter: {
              tags: ["blogs"],
            },
          },
        },
      },
    })
  );
});

describe("Index page", () => {
  it("matches snapshot", () => {
    const data: IndexQueryQuery = {
      site: {
        siteMetadata: {
          defaultTitle: "Richie in tech",
          titleTemplate: "%s | Richie in tech",
          defaultDescription:
            "Official blog of Richie about techs, programing and coding.",
          siteUrl: "https://www.richieintech.com",
          twitterUsername: "@richardnguyenmh",
        },
      },
      placeholderImage: {
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

      allMdx: {
        edges: [
          {
            node: {
              frontmatter: {
                tags: ["tags"],
              },
            },
          },
        ],
      },
    };
    const tree = renderer.create(<Index data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path");

module.exports = {
  /* Meta tags config */
  siteMetadata: {
    title: "Richie in tech",
    titleTemplate: "%s | Richie in tech",
    description: "Official blog of Richie about techs, programing and coding.",
    url: "https://www.richieintech.com",
    twitterUsername: "@richardnguyenmh",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              url
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.url + edge.node.fields.slug,
                  guid: site.siteMetadata.url + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `pages`,
        engine: `lunr`,
        query: `
          {
            allMdx {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                  description
                  categories
                  date
                }
                timeToRead
                excerpt
                rawBody
              }
            }
          }
        `,
        ref: `id`,
        index: [`title`, `body`, `tags`],
        store: [`slug`, `id`, `title`, `tags`, `description`, `excerpt`],
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            slug: `${node.fields.slug}`,
            title: node.frontmatter.title,
            tags: node.frontmatter.tags,
            description: node.frontmatter.description,
            excerpt: node.excerpt,
            body: node.rawMarkdownBody,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [
          require(`remark-capitalize`),
          require(`remark-emoji`),
          require(`remark-slug`),
        ],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 560,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCoderMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        names: `posts`,
        path: path.join(__dirname, `content`, `posts`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        names: `thumbnails`,
        path: path.join(__dirname, `content`, `thumbnails`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        names: `mdxImages`,
        path: path.join(__dirname, `content`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        names: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Richie In Tech",
        short_name: "richieintech",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "static/logo.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

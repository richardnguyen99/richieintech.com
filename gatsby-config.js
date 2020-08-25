/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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

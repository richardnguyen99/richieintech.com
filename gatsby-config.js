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
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
};

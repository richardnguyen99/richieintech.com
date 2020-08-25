/**
 * Implement Gatsby's Node APIs in this file
 *
 * @see https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@context": path.resolve(__dirname, "src", "context"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@styles": path.resolve(__dirname, "src", "styles"),
        "@generated": path.resolve(__dirname, "src", "generated"),
      },
    },
  });
};

const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: { filename: "[name].[contenthash].js" },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketting",
      filename: "removeEntry.js",
      exposes: { "./MarkettingApp": "./src/bootstrap" },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);

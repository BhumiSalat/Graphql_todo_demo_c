const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

const common = require("./webpack.common.js");

// Change folder for production builds
common.output.path = path.resolve(__dirname, "prod-dist");

// Extend common with current
module.exports = merge(common, {
  devtool: "source-map",
  entry: [path.join(__dirname, "src/index.ts")],
  externals: [nodeExternals({})],
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});

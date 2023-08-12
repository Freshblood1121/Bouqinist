// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
// const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    //
    publicPath: "/",
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
    client: {
      progress: true,
    },
    static: [
      {
        directory: path.join(__dirname, "dist"),
      },
      // {
      //   directory: path.join(__dirname, "/sw"),
      //   publicPath: "/sw",
      // },
      {
        directory: path.join(__dirname, "/src/img"),
        publicPath: "/img",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "./src/img/favicon.png",
    }),
    new MiniCssExtractPlugin(),
    new NodePolyfillPlugin(),
  ],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      { test: /\.md$/i, use: ["html-loader", "markdown-loader"] },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

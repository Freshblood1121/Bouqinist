// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: {
    index: "./src/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].js",
    publicPath: "/",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      maxSize: 200000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
    port: 8081,
    client: {
      progress: true,
    },
    static: [
      // {
      //   directory: path.join(__dirname, "dist"),
      // },
      // {
      //   directory: path.join(__dirname, "/sw"),
      //   publicPath: "/sw",
      // },
      {
        directory: path.join(__dirname, "/src/img"),
        publicPath: "/img",
      },
      {
        directory: path.join(__dirname, "../api/public/"),
        publicPath: "/public",
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
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    // new webpack.DefinePlugin({
    //   "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    // }),
  ],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/i,
        type: "asset",
      },
      { test: /\.md$/i, use: ["html-loader", "markdown-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
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

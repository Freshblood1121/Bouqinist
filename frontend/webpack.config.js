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
    advertisment: "./src/Components/AdvertismentPage/AdvertismentPage.jsx",
    catalog: "./src/Components/CategoryPage/CategoryPage.jsx",
    create_adv: "./src/Components/CreateAdvertisment/CreateAdvertisment.jsx",
    account: "./src/Components/AccountPage/AccountPage.jsx",
    sign_up: "./src/Components/SignupPage/SignupPage.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].js",
    //
    publicPath: "/",
    clean: true,
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  optimization: {
    runtimeChunk: "single",
    // moduleIds: "hashed",
    moduleIds: "deterministic",
    splitChunks: {
      // chunks: "all",
      // maxInitialRequests: Infinity,
      // minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
          name: "vendor", ///< name of bundle
          chunks: "all",
          //   test: /[\\/]node_modules[\\/]/,
          //   name(module) {
          //     // получает имя, то есть node_modules/packageName/not/this/part.js
          //     // или node_modules/packageName
          //     const packageName = module.context.match(
          //       /[\\/]node_modules[\\/](.*?)([\\/]|$)/
          //     )[1];

          //     // имена npm-пакетов можно, не опасаясь проблем, использовать
          //     // в URL, но некоторые серверы не любят символы наподобие @
          //     return `npm.${packageName.replace("@", "")}`;
          //   },
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
        test: /\.(eot|svg|ttf|woff|woff2|otf|png|jpg|gif)$/i,
        type: "asset",
      },
      { test: /\.md$/i, use: ["html-loader", "markdown-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
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

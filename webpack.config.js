const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let htmlPageNames = ["signup", "login", "forget"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    inject: true,
    // chunks: ["index"], // respective JS files
  });
});

module.exports = {
  entry: {
    index: "./src/js/index.js",
  },

  output: {
    // Output goes here
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
    // publicPath: "/build",
  },

  devServer: {
    contentBase: "./build",
  },

  // mode: "development", // Production || Development || none

  module: {
    rules: [
      {
        // Rules goes here
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "/",
      //         // publicPath: "/",
      //       },
      //     },
      //   ],
      //   exclude: path.resolve(__dirname, "src/index.html"),
      // },

      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/",
            },
          },
        ],
      },

      {
        test: /\b-bg\b/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "css/img",
              publicPath: "img/",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Pluging goes here
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/signup.html",
      filename: "signup.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/login.html",
      filename: "login.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/forget.html",
      filename: "forget.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/password.html",
      filename: "password.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/userdashboard.html",
      filename: "userdashboard.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/deposit.html",
      filename: "deposit.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/profile.html",
      filename: "profile.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/security.html",
      filename: "security.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/upgrade.html",
      filename: "upgrade.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/withdrawal.html",
      filename: "withdrawal.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/transaction.html",
      filename: "transaction.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/helpcenter.html",
      filename: "helpcenter.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/notfound.html",
      filename: "notfound.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/terms.html",
      filename: "terms.html",
    }),

    new HtmlWebpackPlugin({
      template: "src/licenses.html",
      filename: "licenses.html",
    }),


    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
  ].concat(multipleHtmlPlugins),
};

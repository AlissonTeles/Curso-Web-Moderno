const nodeEnv = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtract = require("mini-css-extract-plugin");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: nodeEnv ? "development" : "production",
  entry: { main: "./src/principal.js" },
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  devServer: {
    contentBase: "./public",
    port: 9000,
  },
  plugins: [
    new MiniCssExtract({
      filename: "style.css", // Nome do arquivo que vai ser criado
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCss({}),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        // Tudo que for css ele vai usar esses de baixo:
        //test: /\.css$/,
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtract.loader, // Cria um novo arquivo css
          //"style-loader", // Coloca o css direto no js (não precisa colocar o link para funcionar, so o script)
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|gif|jpeg)$/,
        use: ["file-loader"],
      },
    ],
  },
};

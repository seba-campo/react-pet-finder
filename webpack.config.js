const path = require("path");
const dev = process.env.NODE_ENV == "development";

module.exports = {
  watch: true,
  mode: "development",
  entry: "./App.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
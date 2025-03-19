const path = require("path");
const liveServer = require("live-server");
const dev = process.env.NODE_ENV == "development";
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


if (dev) {
  liveServer.start({
    // root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: true,
  mode: "development",
  entry: "./src/App.tsx",
  plugins: [
    new CaseSensitivePathsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: true
          }
        }]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts", ".css"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true, // Redirige todas las rutas a index.html
  }
};
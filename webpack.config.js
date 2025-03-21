const path = require("path");
const liveServer = require("live-server");

// Detectar entorno
const dev = process.env.NODE_ENV === "development";

if (dev) {
  liveServer.start({
    file: "index.html",
  });
}

module.exports = {
  mode: dev ? "development" : "production",
  entry: "./src/App.tsx",
  plugins: [],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts", ".css"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  ...(dev && {
    watch: true,
    devServer: {
      historyApiFallback: true,
    },
  }),
};

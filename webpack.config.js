const path = require("path");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "antd",
                libraryDirectory: "lib",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
};

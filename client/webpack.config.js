const path = require("path");
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
  entry: path.resolve(__dirname, "./main.js"),
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.m4a$/,
        loader: 'file-loader',
        // query: {
        //   name: 'static/media/[name].[hash:8].[ext]'
        // }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/",
              publicPath: "",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
          test: /\.vue$/,
          loader: 'vue-loader'
      }
    ],
  },
  plugins: [
      new VueLoaderPlugin()
  ]
};

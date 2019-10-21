// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  publicPath: ".",
  configureWebpack: {
    // plugins: [
    //   new webpack.HotModuleReplacementPlugin(),
    //   new HtmlWebpackPlugin({
    //     template: "./public/index.html"
    //   })
    // ],
    devServer: {
      contentBase: "./dist",
      hot: true,
      open: true
    }
  }
};

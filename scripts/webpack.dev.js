const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app/index.tsx',
  },
  devtool: 'source-map',
  target: 'web',
  devServer: {
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 3001,
  },
  output: {
    filename: '[name].[chunkhash:8].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
    new BundleAnalyzerPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body',
    }),
  ],

  optimization: {
    usedExports: true,
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },

  ...baseConfig,
};

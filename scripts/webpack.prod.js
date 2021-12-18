const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/component/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'ui',
    libraryExport: 'default',
    libraryTarget: 'umd',
    clean: true,
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
  ],

  ...baseConfig,
};

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                ['@babel/preset-env', { targets: { node: '8' } }],
                ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
              ],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [path.resolve(__dirname, '../node_modules')],
  },
};

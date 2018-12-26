const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

module.exports = {
  name: 'server',
  target: 'node', // not touch any built in modules like fs or path
  externals, // Exclude node_modules from bundling since this code is running on server
  entry: './src/server/render.js',
  mode: 'development',
  output: {
    filename: 'dev-server-bundle.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../build/server'),
    libraryTarget: 'commonjs2', // without this, you cannot require('your-library')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[name].[ext]',
              emitFile: false,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-with-front-matter-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.NormalModuleReplacementPlugin(
      /\/iconv-loader$/, 'node-noop',
    ),
  ],
};

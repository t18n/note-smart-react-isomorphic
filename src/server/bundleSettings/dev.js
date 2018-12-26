import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import configDevClient from 'config/webpack.dev-client';
import configDevServer from 'config/webpack.dev-server';

import {
  log, info,
} from 'src/Components/Logger';

/* eslint-disable global-require */
const bundleDev = (server, callback) => {
  const compiler = webpack([configDevClient, configDevServer]);

  const clientCompiler = compiler.compilers[0];

  // Allows for serving of the files emitted from webpack
  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    configDevClient.devServer,
  );

  // Enable Hot Module Replacement on both Server and Client
  const webpackHotMiddlware = require('webpack-hot-middleware')(
    clientCompiler,
    configDevClient.devServer,
  );

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
  server.use(webpackHotServerMiddleware(compiler));
  log(info('Middleware enabled'));
  callback();
};

export default bundleDev;

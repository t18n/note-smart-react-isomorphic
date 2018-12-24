import express from 'express';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import expressStaticGzip from 'express-static-gzip';

import {
  log, success, info,
} from 'src/Components/Logger';

import configDevClient from 'config/webpack.dev-client';
import configDevServer from 'config/webpack.dev-server';
import configProdClient from 'config/webpack.prod-client';
import configProdServer from 'config/webpack.prod-server';

// Set up servers
const server = express();
server.use(cookieParser());

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 3005;
let isBuilt = false;

server.listen(PORT, () => {
  isBuilt = true;
  log([
    'Server listening on ',
    `${success(`http://localhost:${PORT}`)} in `,
    `${success(process.env.NODE_ENV)} 🌎...`,
  ].join(''));
});

const done = () => !isBuilt && log(success('App is built'));

/* eslint-disable global-require */
// If Development environment
if (isDev) {
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
  done();

// If Production environment
} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const clientStats = stats.toJson().children[0];
    const render = require('build/prod-server-bundle.js').default;
    log(stats.toString({ colors: true }));

    server.use(expressStaticGzip('dist', { enableBrotli: true }));
    server.use(render({ clientStats }));
    done();
  });
}

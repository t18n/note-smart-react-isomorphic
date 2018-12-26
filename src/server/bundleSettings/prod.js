import webpack from 'webpack';
import expressStaticGzip from 'express-static-gzip';

import configProdClient from 'config/webpack.prod-client';
import configProdServer from 'config/webpack.prod-server';
import { log } from 'src/Components/Logger';

/* eslint-disable global-require */
const bundleProd = (server, callback) => {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const clientStats = stats.toJson().children[0];
    const render = require('build/server/prod-server-bundle.js').default;
    log(stats.toString({ colors: true }));

    server.use(expressStaticGzip('build/client', { enableBrotli: true }));
    server.use(render({ clientStats }));
    callback();
  });
};

export default bundleProd;

import express from 'express';
import cookieParser from 'cookie-parser';

import {
  log, success,
} from 'src/Components/Logger';

import bundleDev from './bundleSettings/dev';
import bundleProd from './bundleSettings/prod';

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


// If Development environment
if (isDev) bundleDev(server, done);

// If Production environment
else bundleProd(server, done);

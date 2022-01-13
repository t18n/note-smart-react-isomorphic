import express from 'express';
import 'src/utils/logger';
import cookieParser from 'cookie-parser';
import bundleDev from './bundleSettings/dev';
import bundleProd from './bundleSettings/prod';

// Set up servers
const server = express();
server.use(cookieParser());

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 3000;
let isBuilt = false;

server.listen(PORT, () => {
  isBuilt = true;
  logInfo(`Server listening on http://localhost:${PORT} ${process.env.NODE_ENV}`);
});

const done = () => !isBuilt && console.log('App is built');


// If Development environment
if (isDev) bundleDev(server, done);

// If Production environment
else bundleProd(server, done);

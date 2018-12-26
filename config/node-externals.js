/* eslint-disable no-shadow */
import fs from 'fs';
import path from 'path';

const getNodePath = nodePath => path.resolve(__dirname, nodePath);
const nodeModules = getNodePath('../node_modules');

// Select all externals bundles from node_modules to ignore from build
// https://jlongster.com/Backend-Apps-with-Webpack--Part-I
const externals = fs
  .readdirSync(nodeModules) // Synchronously select all files inside dir
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x)) // Exclude these
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';

export default externals;

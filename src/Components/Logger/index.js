import chalk from 'chalk';

/* eslint-disable prefer-destructuring */
export const log = console.log;
export const error = chalk.bold.red;
export const warning = chalk.keyword('orange');
export const success = chalk.bold.greenBright;
export const info = chalk.yellowBright;

import { createLogger, transports, format } from 'winston';
import 'winston-daily-rotate-file';

const logger = createLogger({
  transports: [
    // Write log to console for instance view
    new transports.Console({
      level: 'info',
      colorize: 'all',
      humanReadableUnhandledException: true,
      format: format.simple(),
    }),

    // Use winston-daily-rotate-file to save logs
    // Prevent logs from saving all into 1 file
    new (transports.DailyRotateFile)({
      level: 'error',
      filename: '../../logs/app/%DATE%-error.log',
      datePattern: 'YYYYMMDDHH',
      zippedArchive: false,
      timestamp: () => Date.now(),
      formatter: opts => `${opts.timestamp()}-${process.env.NODE_ENV}-message:${opts.message ? opts.message : ''}`,
      maxSize: '10m',
      maxFiles: '7d',
    }),

    new (transports.DailyRotateFile)({
      filename: '../../logs/app/%DATE%-app.log',
      datePattern: 'YYYY-MM-DD-HH.',
      zippedArchive: false,
      timestamp: () => Date.now(),
      formatter: opts => `${opts.timestamp()}-${process.env.NODE_ENV}-message:${opts.message ? opts.message : ''}`,
      maxSize: '10m',
      maxFiles: '7d',
    }),
  ],

  // Use exeptions to save errors
  exceptionHandlers: [
    new transports.File({
      filename: '../../logs/app/exceptions.log',
    }),
  ],

  // Handled exceptions will not cause process.exit
  exitOnError: false,
});

// Wrap Winston logger to functions
const additionalInfo = { timestamp: new Date().toISOString(), pid: process.pid };

// Make these logs method globally available
global.logInfo = message => logger.log('info', message, additionalInfo);
global.logWarn = message => logger.log('warn', message, additionalInfo);
global.logDebug = message => logger.log('debug', message, additionalInfo);
global.logError = message => logger.log('error', message, additionalInfo);

export default logger;

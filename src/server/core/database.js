import mongoose from 'mongoose';
import log4js from 'koa-log4';

import {
  mongodb,
  DB_USER,
  DB_PASSWORD
} from 'cfg';

const logger = log4js.getLogger('app');

export default () => {
  mongoose.connect(
    `${mongodb.uri}:${mongodb.port}/${mongodb.db}`, {
      ...mongodb.options,
      user: DB_USER,
      pass: DB_PASSWORD
    }
  );
  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => {
        logger.info('Database connection closed.');
      })
      .once('open', () => resolve(mongoose));
  });
};

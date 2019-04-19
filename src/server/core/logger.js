import log4js from 'koa-log4';

import { paths } from 'cfg';

export default () => log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    app: {
      type: 'dateFile',
      filename: `${paths.logs}/app.log`,
      pattern: '-yyyy-MM-dd'
    },
    errors: {
      type: 'dateFile',
      filename: `${paths.logs}/errors.log`,
      pattern: '-yyyy-MM-dd'
    }
  },
  categories: {
    default: {
      appenders: [
        'console',
        'app'
      ],
      level: 'all'
    },
    errors: {
      appenders: [
        'errors'
      ],
      level: 'error'
    }
  }
});

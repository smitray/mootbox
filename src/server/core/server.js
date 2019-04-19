import convert from 'koa-convert';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import helmet from 'koa-helmet';
import serve from 'koa-static';
import mount from 'koa-mount';
import log4js from 'koa-log4';

import {
  SERVER_SECRET,
  paths,
  // nuxtBuild,
  graphQl
} from 'cfg';
import { catchErr, statusMessage } from './error';

import graphControl from './graphQl';
import apiControl from './api';

// import nuxtConfig from './nuxt';

export default (app) => {
  app.keys = SERVER_SECRET.split(',');
  app.proxy = true;

  app.use(convert.compose(
    catchErr,
    cors(),
    statusMessage
  ));

  if (process.env.NODE_ENV === 'development') {
    app.use(convert(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' })));
    app.use(mount('/public', serve(paths.static)));
  }

  if (graphQl) {
    graphControl(app);
  } else {
    app.use(convert.compose(
      bodyParser({
        multipart: true,
        formLimit: '200mb'
      }),
      helmet(),
    ));
    apiControl(app);
  }

  // if (nuxtBuild) {
  //   nuxtConfig(app);
  // }
};

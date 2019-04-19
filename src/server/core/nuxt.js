import { Nuxt, Builder } from 'nuxt';
import config from 'nuxtCfg';

export default async (app) => {
  const nuxt = new Nuxt(config);

  if (process.env.NODE_ENV === 'development') {
    const builder = new Builder(nuxt);
    await builder.build();
  }
  app.use(async (ctx, next) => {
    await next();
    ctx.status = 200; // koa defaults to 404 when it sees that status is unset
    await new Promise((resolve, reject) => {
      nuxt.render(ctx.req, ctx.res, err => (err ? reject(err) : resolve()));
    });
  });
};

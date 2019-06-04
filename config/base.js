module.exports = {
  development: {
    port: 3000,
    mongodb: {
      uri: 'mongodb://localhost',
      db: 'mootbox',
      port: 27017,
      options: {
        promiseLibrary: global.Promise,
        useNewUrlParser: true,
        useCreateIndex: true
      }
    },
    nuxtBuild: true
  },
  production: {
    port: 3000,
    mongodb: {
      uri: 'mongodb://localhost',
      db: 'mootbox',
      port: 27017,
      options: {
        promiseLibrary: global.Promise,
        useNewUrlParser: true,
        useCreateIndex: true
      }
    },
    nuxtBuild: true
  }
};

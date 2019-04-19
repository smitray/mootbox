const path = require('path');

module.exports = {
  paths: {
    app: {
      client: path.resolve(__dirname, '../src/client'),
      server: path.resolve(__dirname, '../src/server')
    },
    dist: {
      server: path.resolve(__dirname, '../dist'),
      client: path.resolve(__dirname, '../dist/client')
    },
    static: path.resolve(__dirname, '../static'),
    logs: path.join(__dirname, '../logs')
  }
};

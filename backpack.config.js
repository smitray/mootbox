const path = require('path');

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './src/server/core/index.js';
    config.resolve.alias = {
      srv: path.join(__dirname, './src/server'),
      cfg: path.join(__dirname, './config')
    };
    return config;
  }
};

const shell = require('shelljs');
const config = require('../config');

if (config.nuxtBuild) {
  shell.exec('nuxt build');
}

shell.exec('babel src/server --out-dir dist/server');

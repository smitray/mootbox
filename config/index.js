const dotenv = require('dotenv');
const base = require('./base');
const paths = require('./paths');

const result = dotenv.config();
if (result.error) {
  throw new Error(result.error);
}

var envs = result.parsed;

module.exports = {
  ...envs,
  ...base[process.env.NODE_ENV],
  ...paths
};



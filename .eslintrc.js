const path = require('path');
const config = require('./config');

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    'node': true,
    'browser': true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              srv: path.join(__dirname, './src/server'),
              cfg: path.join(__dirname, './config'),
              nuxtCfg: path.join(__dirname, './nuxt.config.js'),
              '~': config.paths.app.client,
              '@': config.paths.app.client
            }
          }
        }
      }
    }
  },
  rules: {
    'comma-dangle': [
      'error', {
        'functions': 'ignore'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error', {
        'devDependencies': true,
        'optionalDependencies': true
      }
    ],
    'import/extensions': [
      'error',
      'always', {
        'js': 'never',
        'vue': 'never'
      }
    ],
    'no-param-reassign': [
      'error', {
        'props': false
      }
    ],
    'no-underscore-dangle': [
      'error', {
        'allow': [
          '_id'
        ]
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'nuxt/no-cjs-in-config': 'off'
  }
};

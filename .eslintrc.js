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
    'airbnb-base',
    // 'plugin:vue/recommended'
  ],
  plugins: [
    // 'import',
    // 'vue'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              srv: path.join(__dirname, './src/server'),
              cfg: path.join(__dirname, './config')
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
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};

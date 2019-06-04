const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');

class TailwindExtractor {
  static extract(content) {
    // eslint-disable-next-line no-useless-escape
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  srcDir: 'src/client',
  buildDir: 'build/client',
  rootDir: './',
  modern: 'server',
  head: {
    title: 'Mootbox 2.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/main.css'
  ],
  loading: { color: '#3B8070' },
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-partial-import': {},
        'postcss-crip': {},
        'postcss-mixins': {},
        'postcss-advanced-variables': {},
        'postcss-short': {},
        'postcss-nested': {},
        'postcss-ref': {},
        'postcss-property-lookup': {},
        'postcss-utilities': {},
        'rucksack-css': {},
        'postcss-extend': {},
        'css-mqpacker': {},
        'postcss-media-minmax': {},
        'postcss-merge-rules': {}
      },
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        },
        features: {
          'nesting-rules': false
        }
      }
    },
    extend(config, { isDev }) {
      config.node = {
        fs: 'empty'
      };
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './src/client/pages/**/*.vue'),
              path.join(__dirname, './src/client/layouts/**/*.vue'),
              path.join(__dirname, './src/client/components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['vue', 'js', 'html']
              }
            ],
            whitelist: ['html', 'body', 'nuxt-progress']
          })
        );
        config.plugins.push(
          new OptimizeCssnanoPlugin({
            cssnanoOptions: {
              preset: ['default', {
                discardComments: {
                  removeAll: true
                },
                zIndex: false
              }]
            }
          })
        );
      }
    }
  },
  modules: [
    '@nuxtjs/pwa'
    // '@nuxtjs/apollo'
  ],
  meta: {
    name: 'Mootbox',
    description: 'SSR based boilerplate',
    theme_color: '#000'
  },
  // workbox: {
  //   dev: false
  // },
  // apollo: {
  //   clientConfigs: {
  //     default: '@/graphql/config'
  //   }
  // },
  plugins: []
};

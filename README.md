# css-loader v4.0.0+ bug with vue-style-loader

[css-loader](https://github.com/webpack-contrib/css-loader) started to enable `esModule` by default in [v4.0.0](esModule), which breaks the way `vue-style-loader` handles the CSS file exported by `css-loader`.

Specifically, the `list` [here](https://github.com/vuejs/vue-style-loader/blob/master/lib/listToStyles.js#L5) is now an ES module instead of an array, where there `default` property must be read.

Adding an ESM interop should fix this.


### Reproduction steps
1. Install deps: `$ npm ci`
2. Build & start server: `$ npm start`
3. Notice there are no styles applied despite styles in [`/src/App.vue`](/src/App.vue)
4. Go to [`webpack.config.js`](/webpack.config.js) and uncomment `L36`
5. Rebuild and start server: `$ npm start`
6. Make sure your cache is disabled, but the styles should work

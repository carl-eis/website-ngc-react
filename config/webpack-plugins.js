Object.defineProperty(exports, '__esModule', {
  value: true,
});
const webpack = require('webpack');

const sharedPlugins = [
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',
  }),
];

exports.default = sharedPlugins;

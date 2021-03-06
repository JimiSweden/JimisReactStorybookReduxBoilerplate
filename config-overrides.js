/**
 Hot reloading keeping state
https://github.com/cdharris/react-app-rewire-hot-loader
 */

const rewireReactHotLoader = require('react-app-rewire-hot-loader')

/* config-overrides.js */
module.exports = function override (config, env) {
  config = rewireReactHotLoader(config, env)
  return config
}
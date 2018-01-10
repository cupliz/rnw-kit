const path = require('path')
module.exports = (config, env) => {
  config.resolve.alias['react-native/Libraries/Renderer/shims/ReactNativePropRegistry'] = 'react-native-web/dist/modules/ReactNativePropRegistry/index.js'
  config.module.rules.push({
    test: /.jsx?$/,
    include: [
      path.resolve(__dirname, "./node_modules/react-native-easy-grid"),
      path.resolve(__dirname, "./node_modules/react-native-vector-icons"),
    ],
    use: ['react-hot-loader/webpack', 'babel-loader']
  })
  return config
}
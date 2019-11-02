const { resolve } = require('path')

module.exports = function VueSidebarUi () {
  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vue-sidebar-ui.js'
  })
}

module.exports.meta = require(__dirname, './../package.json')

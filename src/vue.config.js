// vue.config.js
var path = require('path')
module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                import: path.resolve(__dirname, './src/assets/styles/mixins.styl')
            },
        }
    }
}
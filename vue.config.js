/* eslint-disable */
// module.exports = {
//   lintOnSave: false
const path = require('path');
// Require statement not part of import statement.(@typescript-eslint/no-var-requires)
//解决办法.eslintrc.js中的 rules 属性新增以下内容：'@typescript-eslint/no-var-requires': 0
//或者在vue.config.js文件第一行加上 /* eslint-disable */
module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')
        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(dir).end()
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
            // .use('svgo-loader').loader('svgo-loader')
        // .tap(options=>({...options,plugins:[{removeAttrs:{attrs:'fill'}}]})).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir)

    }
}
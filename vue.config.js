const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // outputDir: process.env.outputDir,
    publicPath: './',
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        // proxy: {
        //     '/api': {
        //         // http://192.168.10.85:8084
        //         target: 'http://47.93.236.219:8080',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/' //重写接口
        //         }
        //     }
        // }
    },
    chainWebpack: config => {
        config.resolve.alias.set('components', resolve('src/components'))
    },
    lintOnSave: false,
    assetsDir: 'static',
    productionSourceMap: process.env.NODE_ENV == 'production' ? false : true, //生产环境不需要map文件
    css: {
        sourceMap: process.env.NODE_ENV == 'production' ? false : true //开发,测试 需要cssmap查看样式来源
    }
}

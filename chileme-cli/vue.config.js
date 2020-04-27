module.exports ={
    chainWebpack: config => {
        config.module.rule('pug')
          .test(/\.pug$/)
          .use('pug-html-loader')
          .loader('pug-html-loader')
          .end()
    },

    devServer: {
        proxy: {
            '/api': {
              target: 'http://127.0.0.1:3000',
              ws: true,
              changeOrigin: true,
              pathRewrite:{
                  '^/api':''
              }
            },
            
        }
    },
    // devServer:{
    //     // 请求数据的服务器的地址
    //     proxy:'http://127.0.0.1:3000'
    // },

    productionSourceMap: false
}
const Koa = require('koa')
const App = new Koa()
const cfg = require('./config')  //引入配置文件
const mongoose = require('mongoose') //引入mongoose
const router = require('koa-router')() // 引入路由模块
const koaBody = require('koa-body') // 引入koa-body插件解析post请求

// 创建服务器链接
mongoose.connect(cfg.path)
mongoose.connection.on('error',()=>{
    console.log('服务器链接错误')
})
mongoose.connection.once('open',()=>{
    console.log('服务器已链接')
})

// 测试代码
App.use(async ctx => {
    ctx.body = 'Hello Worldddddd'
})
app.use(koaBody()) //配置koa-body
// App.use(router.routes()).use(router.allowedMethods())   /*启动路由*/

// 启动服务器
App.listen(cfg.port)
console.log(`server is running at http://localhost:${cfg.port}`)
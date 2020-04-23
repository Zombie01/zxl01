const router = require('koa-router')() // 引入路由模块
const User = require('../controller/user_controller') // 引入用户controller
// 写接口
// test get
router.get('/',async ctx => {
    ctx.body = 'hello'
})
router.get('/test',async ctx => {
    ctx.body = 'test'
})

// 用户接口
router.post('/api/user/register', User.register) //注册接口
router.post('/api/user/login', User.login) //登录接口


// 商品接口


// 订单接口



// 暴露接口模块
module.exports = router
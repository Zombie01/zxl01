import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios' // 引入axios
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.prototype.Axios = Axios  // 配置axios
Vue.use(ElementUI) //配置elementUI
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

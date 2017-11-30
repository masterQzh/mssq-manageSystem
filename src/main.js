// 导入包
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'




// 导入样式
// elementUi样式
// 2.0版本
import 'element-ui/lib/theme-chalk/index.css'
// 1.4版本
// import 'element-ui/lib/theme-default/index.css'


// 使用
Vue.use(ElementUI)


Vue.config.productionTip = false
/* eslint-disable no-new */
// 跟实例/挂载
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

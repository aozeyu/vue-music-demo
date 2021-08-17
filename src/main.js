import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/index.scss'
import store from './store/index'
import initAxios from './utils/axios'
import global from './utils/global'
Vue.use(initAxios)
Vue.use(global)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

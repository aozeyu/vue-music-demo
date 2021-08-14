import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/style/index.scss'
import {Loading} from 'element-ui'
import store from './store'
import initAxios from './utils/axios'
Vue.use(Loading)
Vue.use(initAxios)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

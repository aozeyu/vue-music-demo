import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production' // 开发环境下

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: debug ? [createLogger()] : []
})
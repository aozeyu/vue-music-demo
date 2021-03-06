import axios from 'axios'
import {Loading} from 'element-ui'

let loading
let loadingCount = 0
export let request // requset是一个axios实例
export default {
  install(Vue) {
     request = axios.create({
      baseURL:'/netease-api'
    })
    request.interceptors.request.use((config) => {
      loading ||(loading = Loading.service({
        target: '#page-content',
        text:'载入中',
        background: 'transparent'
      })
      )
      loadingCount++
      return config
    })
    request.interceptors.response.use(response => {
      loadingCount--
      if (loadingCount === 0) {
        loading.close()
        loading = null // 释放内存
      }
      if (response.status === 200) {
        return response.data
      }
    })
    Vue.prototype.$request = request // 注册到Vue全局上
  }
}
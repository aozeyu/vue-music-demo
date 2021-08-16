import {request} from '@/utils/axios.js'

//获取音乐url

export const getSongUrl = (id) => {
  request.get(`/song/url?id=${id}`)
}
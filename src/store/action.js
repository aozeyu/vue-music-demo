import {getSongUrl} from '@/api/song'

export default {
  //action中可以拿到context对象从这个对象结构出commit函数
  async getCurrentSong({commit},song){
    const {data} = await getSongUrl(song.id)
    const [resultSong] = data
    commit('setCurrentSong',{
      ...song,
      url: resultSong.url
    }) // 第二个参数是载菏
    commit('setPlayingState',true)
  }
}
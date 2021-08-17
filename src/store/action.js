import {getSongUrl} from '@/api/song'

export default {
  //action中可以拿到context对象从这个对象结构出commit函数
  async startSong({commit},song){
    // 整合歌曲信息 并且开始播放
    const {data} = await getSongUrl(song.id)
    const [resultSong] = data
    commit('setCurrentSong',{
      ...song,
      url: resultSong.url
    }) // 第二个参数是载菏
    commit('setPlayingState',true)
  }
}
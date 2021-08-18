import { getSongUrl } from "@/api/song";

export default {
  //action中可以拿到context对象从这个对象结构出commit函数
  async startSong({ commit }, song) {
    // 整合歌曲信息 并且开始播放
    const { data } = await getSongUrl(song.id);
    const [resultSong] = data;
    //存在url可以播放
    const canPlay = !!resultSong.url;
    if (canPlay) {
      commit("setCurrentSong", {
        ...song,
        url: resultSong.url
      });
      commit('setPlayingState',true)
    }else{
      alert('暂时无法播放')
    }
  },
};

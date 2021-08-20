export default {
  setCurrentSong(state,song) {
    state.currentSong = song
  },
  setPlaylistShow(state,show){
    state.isPlaylistShow = show
  },
  setPlayingState(state,playing){
    state.playing = playing // 播放
  } // 第二个参数是一个载菏对象
}
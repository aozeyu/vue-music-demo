export const currentIndex = (state) =>{
  const {currentSong,playlist} = state
  return playlist.findIndex(({id}) => id === currentSong.id)
} // currentIndex 的getter得到的是一个索引 当前索引


export const nextSong = (state,getters) => {
  const {playlist} = state
  const index = genSequenceNextIndex()
  return playlist[index]
  function genSequenceNextIndex() {
    let nextIndex = getters.currentIndex +1
    if (nextIndex > playlist.length -1) {
      nextIndex = 0
    }
    return nextIndex
  }
}

export const prevSong = (state,getters) =>{
  const {playlist} = state
  const index = genSequencePrevIndex()
  return playlist[index]

  function genSequencePrevIndex() {
    let prevIndex = getters.currentIndex -1
    if (prevIndex < 0) {
      prevIndex = playlist.length -1
    }
    return prevIndex
  }
}


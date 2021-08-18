export function createSong(song) {
  const { id, name, img, artists, duration , ...rest } = song;
  return {
    id,
    name,
    img,
    artists,
    duration,
    artistsText: genArtistisText(artists),
    durationSecond: duration / 1000,
    //rest是一个数组
    //再次展开
    ...rest
  };
}

export function genArtistisText(artists) {
  return (artists || []).map(({ name }) => name).join("/");
}

export function createSong(song) {
  const { id, name, img, artists, duration } = song;
  return {
    id,
    name,
    img,
    artists,
    duration,
    artistsText: genArtistis(artists),
  };
}

export function genArtistis(artists) {
  return (artists || []).map(({ name }) => name).join("/");
}

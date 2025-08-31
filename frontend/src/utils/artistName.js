export const createArtistName = (song) => {
  let artist = song.artist
  artist = artist.split("||").join(",")
  artist = artist.split("|").join(",")
  artist = artist.split(",")
  artist = artist.map(element => element.trim().toLowerCase());
  return artist.join(", ")
}
import { useContext } from "react"
import {BackendURLContext} from "../../../main"

export default function SongItem({song, i}) {
  const { backend_url } = useContext(BackendURLContext)
  const createArtistName = () => {
    let artist = song.artist
    artist = artist.split("||").join(",")
    artist = artist.split("|").join(",")
    artist = artist.split(",")
    artist = artist.map(element => element.trim().toLowerCase());
    return artist.join(", ")
  }
  return (
    <div className="display-row full-w gap-3">
      <div className="song-number text-end">{i}</div>
      <div className="song-list-img">
        <img src={`${backend_url}${song.coverPhoto.url}`} alt={song.songName} />
      </div>
      <div className='song-list-desc'>
        <p className="song-name text-overflow">{song.songName.toLowerCase()}</p>
        <p className="song-artist text-overflow">{createArtistName()}</p>
      </div>
    </div>
  )
}

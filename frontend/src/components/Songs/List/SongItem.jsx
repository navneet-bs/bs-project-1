import { useContext } from "react"
import {BackendURLContext} from "../../../main"
import {createArtistName} from "../../../utils/artistName"

export default function SongItem({song, i, setCurrentSong, className, setSongNumber}) {
  const { backend_url } = useContext(BackendURLContext)
  
  return (
    <div className={`display-row full-w gap-3 ${className}`} style={{cursor: "pointer"}} onClick={()=>{setSongNumber(i - 1); setCurrentSong(song)}}>
      <div className="song-number text-end">{i}</div>
      <div className="song-list-img">
        <img src={`${backend_url}${song.coverPhoto.url}`} alt={song.songName} />
      </div>
      <div className='song-list-desc'>
        <p className="song-name text-overflow">{song.songName.toLowerCase()}</p>
        <p className="song-artist text-overflow">{createArtistName(song)}</p>
      </div>
    </div>
  )
}

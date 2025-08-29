import { useContext } from "react"
import {BackendURLContext} from "../../../main"

export default function SongItem({song}) {
  const { backend_url } = useContext(BackendURLContext)
  return (
    <div>
      <div className="song-list-bg">
        <img src={`${backend_url}${song.coverPhoto.url}`} alt={song.songName} />
      </div>
      <div className='song-list-fg'>
        <p>Song Name: {song.songName}</p>
        <p>Artist Name: {song.artist}</p>
      </div>
    </div>
  )
}

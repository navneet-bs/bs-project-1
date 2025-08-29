export default function SongItem({song}) {
  return (
    <div>
      <div className="song-list-bg">
        <img src={`http://localhost:1337${song.coverPhoto.url}`} alt={song.songName} />
      </div>
      <div className='song-list-fg'>
        <p>Song Name: {song.songName}</p>
        <p>Artist Name: {song.artist}</p>
      </div>
    </div>
  )
}

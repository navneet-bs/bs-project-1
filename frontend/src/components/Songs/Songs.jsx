import { useEffect, useState } from 'react'
import SongList from './List/SongList'
import Player from './Player/Player'

export default function Songs({searchedSong, setSearchedSong, currentSong, setCurrentSong}) {
  const [songList, setSongList] = useState([])
  const [songNumber, setSongNumber] = useState(0)

  useEffect(() => {
    if(songList.length === 0) return;
    const params = new URLSearchParams(window.location.search);
    const songId = params.get('songId');
    if (songId) {
      const thisSong = songList.find(song=>song.id == songId);
      setCurrentSong(thisSong);
      setSongNumber(thisSong.id)
    } else {
      setCurrentSong(songList[0])
      setSongNumber(songList[0].id)
    }
  }, [songList])
  return (
    <section className='songs full-hw center column'>
      <h2 className='gradient-text songs-sec-header tff mb-4'>Enjoy your vibe</h2>
      <div className="song-section-btm display-row full-w gap-4">
        <Player song={currentSong}/>
        <SongList songNumber={songNumber} setSongNumber={setSongNumber} songList={songList} setSongList={setSongList} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
      </div>
    </section>
  )
}

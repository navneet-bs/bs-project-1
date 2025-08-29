import React, { useState } from 'react'
import SongList from './List/SongList'
import Player from './Player/Player'

export default function Songs() {
  const [currentSong, setCurrentSong] = useState(null)
  return (
    <section className='songs full-hw center column'>
      <h2 className='gradient-text songs-sec-header tff mb-4'>Enjoy your vibe</h2>
      <div className="song-section-btm display-row full-w gap-4">
        <Player song={currentSong}/>
        <SongList song={currentSong} setCurrentSong={setCurrentSong}/>
      </div>
    </section>
  )
}

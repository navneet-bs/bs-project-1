import React, { useContext, useEffect, useState } from 'react'
import { BackendURLContext } from '../../../main'
import "../../../styles/player.css"
import { createArtistName } from '../../../utils/artistName'

export default function Player({song}) {
  const {backend_url} = useContext(BackendURLContext)  
  const [currentSong, setCurrentSong] = useState({
   Category: null,
   artist: "Not Available",
   coverPhoto: {
    url: "/images/default_cover.png"
   },
   songName: "Not Available"
  })

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const duration = 180;


  const togglePlay = () => setIsPlaying(!isPlaying);


  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
   
  useEffect(() => {
    console.log(song)
    if(song) setCurrentSong(song)
  },[song])

  return (
    <div className='full-h player center'>
      <div className="player-cont center column">
      <div className='player-cover'>
        <img className='player-cover-bg full-hw' src={(song ? backend_url : "") +currentSong.coverPhoto.url} alt="cover" />
        <div className='player-cover-fg full-hw column justify-content-end'>
          <p className='player-cover-name text-overflow full-w sff'>{currentSong.songName.toLowerCase()}</p>
          <p className='player-cover-artist'>{createArtistName(currentSong)}</p>
        </div>
      </div>
      <div className='player-controls full-w mt-3'>
        <div className="player-progress full-w">
          <input type="range" className="pp-bar full-w" style={{"--progress": `${(progress / duration) * 100}%`}} min="0" max={duration} value={progress} onChange={(e) => setProgress(parseInt(e.target.value))}/>
          <div className="pp-duration display-row mt-1 justify-content-between full-w">
            <div className="ppd-done">{formatTime(progress)}</div>
            <div className="ppd-total">{formatTime(duration)}</div>
          </div>
        </div>
        <div className="player-button center full-w">
          <button onClick={togglePlay} className='center theme-btn'><img src={`/icon/${isPlaying?"pause":"play"}.svg`} alt="" /></button>
        </div>
      </div>
      </div>
    </div>
  )
}

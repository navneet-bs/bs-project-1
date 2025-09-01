import React, { useEffect, useState } from 'react'
import SongItem from './SongItem'

export default function SongList({songNumber, setSongNumber, songList, setSongList, currentSong, setCurrentSong}) {
  const fetchSongData = async () => {
    fetch("http://localhost:1337/api/songs?populate=*")
    .then(res => {
      return res.json()
    })
    .then(res => {
      setSongList(res.data)
      setCurrentSong(res.data[0])
    })
  }

  useEffect(() => {
    fetchSongData()
  }, [])

  return (
    <div className='song-list-ctnr full-h'>
      <h3 className='sff center justify-content-start'>Song List</h3>
      <div className='song-list d-flex column gap-4 pb-4'>
      {
        songList ? 
        songList.map((song, i) => <SongItem key={song.id} setSongNumber={setSongNumber} className={song.id == songNumber ? "song-active":""} setCurrentSong={setCurrentSong} song={song} i={i+1}/>)
        : "No Songs"
      }
      </div>
    </div>
  )
}

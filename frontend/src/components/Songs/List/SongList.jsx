import React, { useEffect, useState } from 'react'
import SongItem from './SongItem'

export default function SongList() {
  const [songList, setSongList] = useState(null)

  const fetchSongData = async () => {
    fetch("http://localhost:1337/api/songs?populate=*")
    .then(res => {
      return res.json()
    })
    .then(res => {
      setSongList(res.data)
    })
  }

  useEffect(() => {
    fetchSongData()
  }, [])

  return (
    <div>
      <div>Song List</div>
      {
        songList ? 
        songList.map(song => <SongItem key={song.id} song={song}/>)
        : "No Songs"
      }
    </div>
  )
}

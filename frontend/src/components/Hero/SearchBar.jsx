import React, { useContext, useState } from 'react'
import { BackendURLContext } from '../../main'
import { useNavigate } from 'react-router'

export default function SearchBar({setSearchedSong, searchedSong, setCurrentSong}) {
  const navigate = useNavigate()
  const {backend_url} = useContext(BackendURLContext)
  const [songSearch, setSongSearch] = useState("")
  const fetchSongs = async (val) => {
    if(val.length === 0) {
      setSongSearch("")
      setSearchedSong([])
      return
    }
    fetch(`http://localhost:1337/api/songs?filters[songName][$containsi]=${val}&populate=*`)
    .then(res => res.json())
    .then(res => {
      setSearchedSong(res.data)
    })
  }
  const getInputSong = (e) => {
    const val = e.target.value;
    console.log(val)
    setSongSearch(val)
    fetchSongs(val)
  }
  return (
    <form className='full-w search-form column'>
      <div className='search-bar display-row full-w'>
        <input type="text" className='fw-bold' id='search-term' name='search-term' value={songSearch} onChange={getInputSong}/>
        <button className='center' onClick={() => console.log("btn clicked")}><img src="/icon/search.svg" alt="search" /></button>
      </div>
      {
      searchedSong && searchedSong.length > 0 && 
      <div className="searched-songs-list">
        <ul>
        {
          searchedSong.map((song, i) => 
            <li key={song.id} className='full-w text-overflow' onClick={() => {setCurrentSong(song); navigate(`/songs?songId=${song.id}`)}}><div className='d-flex align-items-center full-hw'><img src={`${backend_url}${song.coverPhoto.url}`} alt={song.songName} className='me-2' />{song.songName}</div></li>
          )
        }
        </ul>
      </div>}
    </form>
  )
}

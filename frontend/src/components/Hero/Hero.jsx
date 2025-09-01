import React, { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { BackendURLContext } from '../../main'

export default function Hero({setSearchedSong, searchedSong, setCurrentSong}) {
  const [heroData, setHeroData] = useState(null)
  const {backend_url} = useContext(BackendURLContext)
  
  const fetchHeroData = async() => {
    fetch(`${backend_url}/api/hero?populate=*`)
    .then(res => res.json())
    .then(res => {
      setHeroData(res.data)
    })
  }

  useEffect(() => {
    fetchHeroData()
  }, [])

  return (
    <section className='hero full-hw'>
      <div className='hero-bg-video full-hw'>
        {
          heroData ? 
          <video autoPlay={true} muted={true} playsInline={true} loop={true} className='full-hw'>
            <source src={`${backend_url}${heroData.heroVideo.url}`} type='video/mp4'/>
          </video>
          : ""
        }
      </div>
      <div className='hero-fg-data center column p-5 full-hw'>
        <h1 className='hero-title m-0 p-0 fw-bold tff'>
          {
            heroData ? heroData.heroName : "Hero Name"
          }
        </h1>
        <p className='hero-desc text-center my-3 px-3'>
          {
            heroData ? heroData.heroDesc : "Hero Description"
          }
        </p>
        <div className="searchbar-ctnr-hero mt-3">
            <SearchBar setSearchedSong={setSearchedSong} searchedSong={searchedSong} setCurrentSong={setCurrentSong} />
        </div>
      </div>
    </section>
  )
}

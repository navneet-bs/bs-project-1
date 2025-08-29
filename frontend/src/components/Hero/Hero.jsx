import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'

export default function Hero() {
  const [heroData, setHeroData] = useState(null)
  
  const fetchHeroData = async() => {
    fetch("http://localhost:1337/api/hero?populate=*")
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
            <source src={`http://localhost:1337${heroData.heroVideo.url}`} type='video/mp4'/>
          </video>
          : ""
        }
      </div>
      <div className='hero-fg-data center column p-5 full-hw'>
        <h1>
          {
            heroData ? heroData.heroName : "Hero Name"
          }
        </h1>
        <p>
          {
            heroData ? heroData.heroDesc : "Hero Description"
          }
        </p>
        <div className="searchbar-ctnr-hero">
            <SearchBar />
        </div>
      </div>
    </section>
  )
}

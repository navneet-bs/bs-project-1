import React from 'react'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section className='hero center column p-5'>
        <h1>This is header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita provident vitae inventore ipsum illo cupiditate itaque optio! Quos architecto tenetur provident voluptas nemo modi odio a, quis laborum veritatis animi!</p>
        <div className="searchbar-ctnr-hero">
            <SearchBar />
        </div>
    </section>
  )
}

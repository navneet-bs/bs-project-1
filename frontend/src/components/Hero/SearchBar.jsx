import React from 'react'

export default function SearchBar() {
  return (
    <form className='search-bar display-row full-w'>
      <input type="text" className='fw-bold' id='search-term' name='search-term'/>
      <button className='center' onClick={() => console.log("btn clicked")}><img src="/icon/search.svg" alt="search" /></button>
    </form>
  )
}

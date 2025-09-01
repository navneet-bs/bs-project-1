import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './styles/index.css'
import './styles/home.css'
import './styles/navbar.css'
import './styles/footer.css'
import Songs from './components/Songs/Songs'
import { useState } from 'react'

function App() {
  const [searchedSong, setSearchedSong] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  return (
    <>
      <Header />
      <Hero setSearchedSong={setSearchedSong} searchedSong={searchedSong} setCurrentSong={setCurrentSong}/>
      <Songs searchedSong={searchedSong} setSearchedSong={setSearchedSong} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Footer />
    </>
  )
}

export default App

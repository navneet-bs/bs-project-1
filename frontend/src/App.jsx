import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './styles/index.css'
import './styles/home.css'
import './styles/navbar.css'
import './styles/footer.css'
import Songs from './components/Songs/Songs'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Protect from "./components/ProtectedRoute/protect";
import { useState } from "react";

function App() {
  const [searchedSong, setSearchedSong] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero setSearchedSong={setSearchedSong} searchedSong={searchedSong} setCurrentSong={setCurrentSong}/>} />
        <Route path="/home" element={<Hero setSearchedSong={setSearchedSong} searchedSong={searchedSong} setCurrentSong={setCurrentSong}/>} />
        <Route path="/songs" element={
          <Protect>
            <Songs currentSong={currentSong} setCurrentSong={setCurrentSong} />
          </Protect>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

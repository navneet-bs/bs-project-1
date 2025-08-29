import { useEffect, useState } from "react";
import RectRoundButton from "../Buttons/RectRoundButton";
import Navlink from "./Navlink";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [headerData, setHeaderData] = useState(null)
    const [navbarData, setNavbarData] = useState(null)
      
      const fetchHeaderData = async() => {
        fetch("http://localhost:1337/api/header?populate=*")
        .then(res => res.json())
        .then(res => {
          setHeaderData(res.data)
          console.log(res)
        })
      }

      const fetchNavbarData = async() => {
        fetch("http://localhost:1337/api/nav-links")
        .then(res => res.json())
        .then(res => {
          setNavbarData(res.data)
          console.log(res.data)
        })
      }
    
      useEffect(() => {
        fetchHeaderData()
        fetchNavbarData()
      }, [])
    
  return (
    <header className={`justify-content-between display-row full-w py-2 px-4 center nav-${isMenuOpen? "open" : "close"}`}>
        <div className="header-logo full-h">
            {
                headerData ?
                <img src={`http://localhost:1337${headerData.iconOnly.url}`} alt="" className="full-h"/>
                : "Logo"
            }
        </div>
        <div className="header-right-club display-row">
            <div className="header-nav full-h center d-flex">
                <ul className="display-row center full-h p-0 gap-3 m-0">
                    {
                        navbarData ?
                        navbarData.map(link => 
                            <li key={link.id}><Navlink href={`#${link.link.toLowerCase()}`} label={link.link}/></li>
                        )
                        : "No Navbar Links"
                    }
                </ul>
            </div>
            <div className="header-btn">
                <RectRoundButton action={null} href={null} label={"Login/Signup"}/>
            </div>
        </div>
        <button onClick={()=>setIsMenuOpen(prev => !prev)} className={`nav-handler-btn`}>{isMenuOpen? "Close" : "Open"}</button>
    </header>
  )
}

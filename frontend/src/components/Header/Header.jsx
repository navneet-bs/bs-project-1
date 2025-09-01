import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import RectRoundButton from "../Buttons/RectRoundButton";
import Navlink from "./Navlink";
import { AuthContext, BackendURLContext } from "../../main";

export default function Header() {
  const navigate=useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [headerData, setHeaderData] = useState(null)
    const [navbarData, setNavbarData] = useState(null)
    const {backend_url} = useContext(BackendURLContext);
    const {isLoggedIn, username, setUsername, setLoggedIn} = useContext(AuthContext);
      

      const handleLogout=()=>{
        try{
          localStorage.removeItem("token");
          localStorage.setItem("isLoggedIn",false);
          localStorage.removeItem("username");
          setUsername(null)
          setLoggedIn(false);
          navigate("/");
        }
        catch(e){
          console.log(e);
          alert("error Occured");
        }
      }
      const fetchHeaderData = async() => {
        fetch(`${backend_url}/api/header?populate=*`)
        .then(res => res.json())
        .then(res => {
          setHeaderData(res.data)
        })
      }

      const fetchNavbarData = async() => {
        fetch(`${backend_url}/api/nav-links`)
        .then(res => res.json())
        .then(res => {
          setNavbarData(res.data)
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
                <div className="display-row center full-h">
                  <img src={`${backend_url}${headerData.iconOnly.url}`} alt="" className="full-h"/>
                  <h1 className="logo-title center m-0 p-0 sff fw-bold">{headerData.site_name}</h1>
                </div>
                : "Logo"
            }
        </div>
        <div className="header-right-club display-row center gap-3">
            <div className="header-nav full-h center d-flex">
                <ul className="display-row center full-h p-0 gap-3 m-0">
                    {
                        navbarData ?
                        navbarData.map(link => 
                            <li key={link.id}><Navlink href={`/${link.link.toLowerCase()}`} label={link.link}/></li>
                        )
                        : "No Navbar Links"
                    }
                </ul>
            </div>
            <div className="header-btn">
          {isLoggedIn ? (
            <div className="d-flex gap-2 items-center">
              <RectRoundButton action={()=>handleLogout()} label={"Logout"}/>
              <p className="text-white">{username.toUpperCase()}</p>
            </div>
          ) : (
            <RectRoundButton action={null} href={"login"} label={"Login/Signup"}/>
          )}
        </div>
        </div>
        <button onClick={()=>setIsMenuOpen(prev => !prev)} className={`nav-handler-btn`}>{isMenuOpen? "Close" : "Open"}</button>
    </header>
  )
}

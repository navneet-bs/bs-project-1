import { useState } from "react";
import RectRoundButton from "../Buttons/RectRoundButton";
import Navlink from "./Navlink";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className={`justify-content-between display-row full-w py-2 px-4 center nav-${isMenuOpen? "open" : "close"}`}>
        <div className="header-logo full-h">
            <img src="logo.jpg" alt="" className="full-h"/>
        </div>
        <div className="header-right-club display-row">
            <div className="header-nav full-h center d-flex">
                <ul className="display-row center full-h p-0 gap-3 m-0">
                    <li><Navlink href={"#"} label={"Navlink"}/></li>
                    <li><Navlink href={"#"} label={"Navlink"}/></li>
                    <li><Navlink href={"#"} label={"Navlink"}/></li>
                    <li><Navlink href={"#"} label={"Navlink"}/></li>
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

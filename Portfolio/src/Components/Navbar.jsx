import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return(
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center px-6 py-4 z-50 
        transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}`} >
        
        <div className="flex items-center gap-0.5 cursor-pointer group">
          <img src={Logo} alt="logo" className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"/>
          
          <div className="text-4xl font-bold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">Ajaz</div>
        </div>

      </nav>

      {menuOpen && <OverlayMenu/>}
    </>
  );
}
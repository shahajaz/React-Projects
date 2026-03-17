import { useState } from "react";
import Logo from "../assets/logo.png";
import { TiThMenu } from "react-icons/ti";
import OverlayMenu from "./OverlayMenu";

export default function Navbar(){

  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return(
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 
        transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >

        {/* LOGO */}
        <div className="flex items-center gap-1 cursor-pointer group">

          <img
            src={Logo}
            alt="logo"
            className="w-16 h-16 object-contain transition-all duration-300 hover:scale-110"
          />

          <div className="text-4xl font-bold bg-gradient-to-r from-[#ff00af] to-[#ffcc00] bg-clip-text text-transparent">
            Ajaz
          </div>

        </div>
        
        <div className="block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2"> 
          <button onClick={() => setMenuOpen(true)} 
            className="text-white text-3xl focus:outline-none" aria-label="open Menu"> 
            
            <TiThMenu /> 
          </button> 
        </div>
        
        <div className="hidden lg:block">
          <a href="#contact" className="group px-[2px] py-[2px] rounded-full 
            bg-gradient-to-r from-[#ff00af] to-[#ffcc00] 
          hover:from-[#ffcc00] hover:to-[#ff00af] 
            inline-block transition-all duration-300">
              
              <span className="block px-3 py-2 rounded-full bg-black text-white font-semibold transition-all duration-300 
                group-hover:bg-gradient-to-r 
              group-hover:from-[#ff00af] 
              group-hover:to-[#ffcc00] 
              group-hover:text-white 
                group-hover:scale-105 
                group-hover:shadow-[0_0_20px_#ff00af]">

                Let’s Connect
              </span>
          </a>
        </div>

      </nav>

      {menuOpen && (
  <OverlayMenu 
    isOpen={menuOpen} 
    onClose={() => setMenuOpen(false)} 
  />
)}
      
    </>
  );
}
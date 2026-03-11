import React, { useState } from "react";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
    <div className="header-container">
        
        <div className="logo">
            <img src="/images/logo.png" alt="logo"/>
            </div>
            
            <div className={`Menu ${menuOpen ? "hide-menu" : ""}`}>
                <a href="#">Vehicles</a>
                <a href="#">Energy</a>
                <a href="#">Charging</a>
                <a href="#">Discover</a>
                <a href="#">Shop</a>
                <a href="#">Support</a>
            </div>
            
            <div className="header-right">
                <button className="account">Account</button>
                
                <i 
                    className="fa-solid fa-align-justify icon-btn"
                    onClick={() => setMenuOpen(true)}
                ></i>
                
            </div>

      {/* Sidebar */}
      <div className={`custom-Nav ${menuOpen ? "active" : ""}`}>

        <i 
          className="fa-solid fa-x close-icon icon-btn"
          onClick={() => setMenuOpen(false)}
        ></i>

        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Cyber Trucks</a>
        <a href="#">Solar Energy</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>
        <a href="#">Support</a>

        <button className="settingBtn">
          <i className="fa-solid fa-gear"></i>
        </button>

      </div>

    </div>
  );
};

export default Header;
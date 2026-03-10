// import React from 'react'

// const Header = () => {
//     return (
//     <div className='header-container'>
//         <div className="logo">
//             <img src="/images/logo.png" alt="Logo"/>
//         </div>

//         <div className="Menu">
//             <a href="#">Vehicles</a>
//             <a href="#">Energy</a>
//             <a href="#">Charging</a>
//             <a href="#">Discover</a>
//             <a href="#">Shop</a>
//             <a href="#">Support</a>
//         </div>

//         <div class="header-right">
//             <button class="account">Account</button>

//             <div className="custom-menu"><i class="fa-solid fa-align-justify"></i>
//                 <div className="custom-Nav">
//                     <i className="fa-solid fa-x"></i>
//                     <a href="#">Vehicles</a>
//                     <a href="#">Energy</a>
//                     <a href="#">Charging</a>
//                     <a href="#">Discover</a>
//                     <a href="#">Shop</a>
//                     <a href="#">Support</a>
//                 </div>
//             </div>
//         </div>

//     </div>
//     )
// }

// export default Header;

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
                    className="fa-solid fa-align-justify menu-icon"
                    onClick={() => setMenuOpen(true)}
                ></i>
                
            </div>

      {/* Sidebar */}
      <div className={`custom-Nav ${menuOpen ? "active" : ""}`}>

        <i 
          className="fa-solid fa-x close-icon"
          onClick={() => setMenuOpen(false)}
        ></i>

        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>
        <a href="#">Support</a>

      </div>

    </div>
  );
};

export default Header;
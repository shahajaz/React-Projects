import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
    <nav className="navbar">
        <div className="navbar-logo">Code <span>360</span></div>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>

        <div className="searchBox">
            <input type="text" placeholder="Search..."/>
            <i className="fas fa-search"></i>
        </div>

        <div className="toggleBtn">
            <i className="fas fa-moon"></i>
          {/*   <i className="fas fa-sun"></i> */}
        </div>
        
        {/* Login Button */}
        <div className="navbar-auth">
            <button className="login-btn">Login</button>
        </div>

        {/* Hamburger */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
        </div>
    </nav>
    );
};

export default Navbar;

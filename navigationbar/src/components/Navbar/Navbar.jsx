import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
    <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">TechGuy <span>360</span></div>

      {/* Menu */}
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>
        
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

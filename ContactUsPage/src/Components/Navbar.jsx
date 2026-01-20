const Navbar = () => {
    return (
    <nav>
        <div className="logo">
            <img src="/img/TechGuy.png" alt="Tech Guy 360"></img>
        </div>

        <ul>
            <li>
                <a href="#home">Home</a>
            </li>

            <li>
                <a href="#services">Services</a>
            </li>

            <li>
                <a href="#projects">Projects</a>
            </li>

            <li>
                <a href="#about">About</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>

        <div className="login-btn">
            <a href="#login">Login</a>
        </div>
    </nav>
    );
}

export default Navbar;

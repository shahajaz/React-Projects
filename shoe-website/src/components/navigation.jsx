const Navigation = () =>{

    return(
        <nav>
                <div className="logo">
                    <img src="/img/logo.png" alt="logo"/>
                </div>

                <ul>
                    <li href="#home">Home</li>
                    <li href="#Lifestyle">Lifestyle</li>
                    <li href="#about">About Us</li>
                    <li href="#contact">Contact Us</li>
                </ul>

                <button>Login</button>
            </nav>
    );

}
export default Navigation;
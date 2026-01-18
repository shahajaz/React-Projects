const Navigation = () =>{

    return(
        <nav>
            <div className="logo">
                <img src="/img/logo.png" alt="logo"/>
            </div>
            
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <button>Login</button>
        </nav>
    );

}
export default Navigation;
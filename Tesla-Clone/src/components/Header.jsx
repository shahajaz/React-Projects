import React from 'react'

const Header = () => {
    return (
    <div className='header-container'>
        <div className="logo">
            <img src="/images/logo.png" alt="Logo"/>
        </div>

        <div className="Menu">
            <a href="#">Vehicles</a>
            <a href="#">Energy</a>
            <a href="#">Charging</a>
            <a href="#">Discover</a>
            <a href="#">Shop</a>
            <a href="#">Support</a>
        </div>

        <div class="header-right">
            <button class="account">Account</button>

            <div className="custom-menu"><i class="fa-solid fa-align-justify"></i></div>
        </div>

    </div>
    )
}

export default Header;

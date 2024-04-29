import React from 'react';
import "./navbar.css";
import Logo from '../../assets/DineDishLogo.png';
import cart_logo from '../../assets/ShoppingCartLogo.svg'

const Navbar = () => {
    return (
        <div className="nav-main-container">
            <div className="red-bar"></div>
                <div className="nav-container">
                    <div className='nav-bar'>
                        <img className="nav-logo" src={Logo} alt="dine-dish-logo"/>
                        <ul className='nav-elements'>
                            <li><a href='/'>Product</a></li>
                            <li><a href='/'>Location</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Contact</a></li>
                        </ul>
                        <div className="btn">
                            <a href='/' className='nav-btn'>Login</a>
                            <a href='/' className='nav-btn'>Sign In</a>
                            <a href='/'>
                                <img src={cart_logo} alt='shopping-cart-logo' className='shopping-cart' />
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;

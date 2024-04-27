import DineDishLogo from '../assets/Dine-logo.png'
import "./Header.css"
import ShoppingCartLogo from "../assets/ShoppingCartLogo.svg"

export default function Header(){
    return(
        <div className="nav-container">
            <div className="red-bar"></div>
            <div className='nav-bar'>
                <img className="nav-logo" src={DineDishLogo} alt="dine-dish-logo"/>
                <ul className='nav-elements'>
                    <a href='/'><li>Product</li></a>
                    <a href='/'><li>Location</li></a>
                    <a href='/'><li>About</li></a>
                    <a href='/'><li>Contact</li></a>
                </ul>
                <a href='/' className='nav-btn'>Login</a>
                <a href='/' className='nav-btn'>Sign In</a>
                <a href='/'><img src={ShoppingCartLogo} alt='shopping-cart-logo' className='shopping-cart' /></a>
            </div>
        </div>
    )
}
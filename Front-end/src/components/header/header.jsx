import React from "react";
import './header.css';
import Header_image from '../../assets/below-nav-image 1.png';

export default function Header(){
    return(
        <div className="main-container">
            <div className="container">
                <img src={Header_image} alt="Header food" className="header-image" />
            </div>
            <div className="navigation-container">
                <h3 className="product-list">Our Products</h3>
                <button className="view-all">View all</button>
            </div>
        </div>
    )
}
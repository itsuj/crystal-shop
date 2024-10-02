import React from "react"
import "../styles/Navbar.css"
import logo from "../logo.jpg"
import cart from "../cart.jpg"
import image from "../image.png"
const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">
            <img src={logo} alt="Pop Rock Crystal Logo"/>
            <span>Pop Rock Crystal</span>
        </div>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/help">Help</a></li>
        </ul>
    </nav>
    <div className="cart-icon">
        <img src={cart} alt="cart"/>
        <img src={image} alt="asset"/>
    </div>
    </header>
  );
};

export default Navbar;
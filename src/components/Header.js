import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">Logo</div>
            <ul className="nav-bar">
                <li>Home</li>
                <li>Shop</li>
            </ul>
            <div className="shopping-cart">Cart (0)</div>
        </div>
    )
}

export default Header;
import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">Logo</div>
            <ul className="nav-bar">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
            <div className="shopping-cart">Cart (0)</div>
        </div>
    )
}

export default Header;
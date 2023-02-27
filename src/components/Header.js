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
            <Link to="/cart">
                <div className="shopping-cart">Cart (0)</div>
            </Link>
        </div>
    )
}

export default Header;
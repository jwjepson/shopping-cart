import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <div className="logo">Chef's Bakery</div>
            <ul className="nav-bar">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
            <Link to="/cart">
                <div className="cart-svg">
                    <div className="badge">
                        <div className="cart-counter">{props.cartCount}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Header;
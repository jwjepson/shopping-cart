import React from "react";
import Item from "./Item";
import "../styles/Shop.css";

const Shop = () => {
    return (
        <div className="main">
            <div className="menu">
                <h2>Welcome to the Shop!</h2>
                <div className="items">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </div>
    )
}

export default Shop;
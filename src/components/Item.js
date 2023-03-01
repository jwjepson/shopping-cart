import React from "react";
import "../styles/Item.css";
import Donut1 from "../images/donut1.png";

const Item = () => {
    return (
        <div className="item-container">
            <div className="image-container">
                <img className="item-image" src={Donut1} alt="Donut 1"></img>
            </div>
            <div className="item-info">
                <div className="item-title">Delicious Donut</div>
                <div className="item-price">$5.59</div>
            </div>
            <button className="add-to-cart-button" type="button">Add to Cart</button>
        </div>
    )
}

export default Item;
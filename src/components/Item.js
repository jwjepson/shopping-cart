import React from "react";
import "../styles/Item.css";

const Item = (props) => {
    return (
        <div className="item-container">
            <div className="image-container">
                <img className="item-image" src={props.img} alt={props.name}></img>
            </div>
            <div className="item-info">
                <div className="item-title">{props.name}</div>
                <div className="item-price">{props.price}</div>
            </div>
            <button className="add-to-cart-button" type="button">Add to Cart</button>
        </div>
    )
}

export default Item;
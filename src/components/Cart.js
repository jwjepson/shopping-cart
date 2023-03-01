import React from "react";
import "../styles/Cart.css";

const Cart = (props) => {
    return (
        <div className="main">
            <div className="cart">
                <h2>Shopping Cart</h2>
                <div className="cart-items">
                    <div className="cart-headers">
                        <div className="item-name">Item</div>
                        <div className="item-quantity">Quantity</div>
                        <div className="item-price">Price</div>
                    </div>
                    {props.cartItems.map((item) => (
                        <div className="cart-item">
                            <div className="item-name">
                                <img className="cart-item-image" alt={item.name} src={item.img}></img>
                                <div>{item.name}</div>
                            </div>
                            <div className="item-quantity">{item.quantity}</div>
                            <div className="item-price">{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart;
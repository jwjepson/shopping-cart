import React from "react";
import "../styles/Cart.css";

const Cart = (props) => {

    const totalPrice = props.cartItems.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.quantity);
    }, 0).toFixed(2);

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
                            <div className="item-quantity">
                                <button onClick={props.handleQuantity} className="quantity-decrement" name="decrement" data-id={item.id} type="button">-</button>
                                <div className="quantity">
                                    {item.quantity}
                                </div>
                                <button onClick={props.handleQuantity} className="quantity-increment" name="increment" data-id={item.id} type="button">+</button>
                                </div>
                            <div className="item-price">{"$" + (item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    ))}
                </div>
                <div className="checkout-container">
                    <div className="total">Total:</div>
                    <div className="total-price">${totalPrice}</div>
                    <button className="checkout-button" type="button">Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
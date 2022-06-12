import React from "react";
import './Cart.css'
const Cart = ({title, amount, price, id, removeItem}) => {

    return (
        <div className="cart-item-container">
            <p className="element"> {title} </p>
            <p className="element"> Amount selected : {amount} </p>
            <p className="element"> ${price} </p>
            <p className="element"> Subtotal: ${amount * price} </p>
            <button className="remove-button" onClick={()=> removeItem(id)}> Remove item</button>
        </div>
    )
}

export default Cart;
import React from 'react'
import './CartWidget.css'

const CartWidget = ({amount}) => {
    return (
        <div className='container'>
            <img className='cartWidget' src='../images/cart.svg' alt='cart-widget'/>
            <div> {amount} </div> 
        </div>
    )
}

export default CartWidget
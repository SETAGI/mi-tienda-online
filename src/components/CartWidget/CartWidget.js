import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import CartContext from '../Context/CartContext'

const CartWidget = () => {
    const { totalAmount } = useContext(CartContext);
    const amount = totalAmount();
    return (
        <Link to='/cart' className='container'>
            <img className='cartWidget' src='../images/cart.svg' alt='cart-widget'/>
            <div> {amount} </div> 
        </Link>
    )
}

export default CartWidget
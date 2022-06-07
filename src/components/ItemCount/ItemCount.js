import React, { useContext, useState } from 'react'
import './ItemCount.css'
import CartContext from '../Context/CartContext'

const ItemCount = ({ stock, initial =0, onAdd, id }) => {    
    const [amount, setAmount] = useState(initial)
    const decrementAmount = () => setAmount( prevValue => prevValue - 1 )
    const incrementAmount = () => setAmount( prevValue => prevValue + 1 )
    const { isInCart } = useContext(CartContext);
    
    return (
        <div className='itemCountContainer'>
            <div className='counterControls'>
                <button 
                    className='buttonControl' 
                    disabled={( amount === 0 || isInCart(id) ) ? true : false } 
                    onClick={ decrementAmount }
                > - 
                </button>
                <p> { amount } </p>
                <button 
                    className='buttonControl' 
                    disabled={( amount === stock || isInCart(id) ) ? true : false } 
                    onClick={ incrementAmount }
                > + 
                </button>
            </div>
            <button 
                className='addButton' 
                disabled={( stock === 0 || isInCart(id) ) ? true : false } 
                onClick={() => onAdd( amount )}
            > Agregar al carrito 
            </button>
        </div>
    )
}

export default ItemCount
import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [amount, setAmount] = useState(initial)
    const decrementAmount = () => setAmount( prevValue => prevValue - 1 )
    const incrementAmount = () => setAmount( prevValue => prevValue + 1 )
    
    return (
        <div className='itemCountContainer'>
            <div className='counterControls'>
                <button 
                    className='buttonControl' 
                    disabled={( amount === 0 ) ? true : false } 
                    onClick={ decrementAmount }
                > - 
                </button>
                <p> { amount } </p>
                <button 
                    className='buttonControl' 
                    disabled={( amount === stock ) ? true : false } 
                    onClick={ incrementAmount }
                > + 
                </button>
            </div>
            <button 
                className='addButton' 
                disabled={( stock === 0 ) ? true : false } 
                onClick={() => onAdd( amount )}
            > Agregar al carrito 
            </button>
        </div>
    )
}

export default ItemCount
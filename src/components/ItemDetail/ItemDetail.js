import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ title, price, pictureUrl, description }) => { 

    const [amount, setAmount] = useState(0);
    const onAdd = amount => setAmount(amount)
    
    return(
        pictureUrl ? 
        <>
            <div className='itemDetailContainer'>
                <img src={pictureUrl} alt='celular'/>
                <div>
                    <p className='title'> {title} </p>
                    <p className='title'> {description} </p>
                    <p className='price'> {price} </p>
                </div>
            </div>
            {
                (amount > 0) 
                    ? <Link to={'/cart'} className='footer'>Terminar compra</Link> 
                    : <ItemCount stock={ 10 } onAdd={onAdd} />  
            }           
        </>
        : <h1 className='loading'>Loading...</h1>
    ) 
}

export default ItemDetail
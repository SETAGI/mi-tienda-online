import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ item } ) => {
    const { title, price, pictureUrl } = item;
    
    return(
        <div className='itemDetailContainer'>
            <img src={pictureUrl} alt='celular'/>
            <div>
                <p className='title'> {title} </p>
                <p className='price'> ${price} </p>
            </div>
        </div>
    ) 
}

export default ItemDetail
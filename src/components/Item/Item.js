import React from 'react'
import './Item.css'

const Item = ({ id, title, price, pictureUrl }) => {
    return(
        <div className='card'>
            <p className='title'> {title} </p>
            <img src={pictureUrl} alt='celular'/>
            <p className='price'> ${price} </p>
        </div>
    )
}

export default Item
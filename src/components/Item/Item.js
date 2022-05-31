import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, pictureUrl }) => {
    return(
        <div className='card'>
            <p className='title'> {title} </p>
            <img src={pictureUrl} alt='celular'/>
            <p className='price'> ${price} </p>
            <Link to={`itemDetail/${id}`} className='link-item'> Ver detalle</Link>
        </div>
    )
}

export default Item
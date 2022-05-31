import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ title, price, pictureUrl, description }) => {    
    return(
        <div className='itemDetailContainer'>
            {
                pictureUrl && <img src={pictureUrl} alt='celular'/>
            }
            <div>
                <p className='title'> {title} </p>
                <p className='title'> {description} </p>
                <p className='price'> {price} </p>
            </div>
        </div>
    ) 
}

export default ItemDetail
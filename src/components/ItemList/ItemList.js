import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ items } ) => {
    return(
        <div className='itemListBox'>
            {
                items.map( item => <Item key={item.id} {...item} /> )
            }
        </div>
    )
}

export default ItemList
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getItems } from '../utils/asyncMockProducts';

const ItemListContainer = ({ greeting }) => {

    const [items, setItems]= useState([])

    useEffect(()=>{
        getItems().then(res => setItems(res))
    },[])

    return (
       <>
            <h1 className='greeting'> {greeting} </h1>
            <ItemList items={items}/>
       </> 
    )
}

export default ItemListContainer
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getItems, getItemByCategory } from '../../utils/asyncMockProducts';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting = 'Comida' }) => {
    const { categoryId } = useParams();
    const [items, setItems]= useState([])

    useEffect( () => {
        categoryId 
            ? getItemByCategory( categoryId ).then( res => setItems(res) ) 
            : getItems().then( res => setItems(res) )
    },[categoryId])

    return (
        items.length ? 
            <>
                <h1 className='greeting'> {greeting} </h1>
                <ItemList items={items}/>
            </> 
            : <h1 className='loading'>Loading...</h1>
    )
}

export default ItemListContainer
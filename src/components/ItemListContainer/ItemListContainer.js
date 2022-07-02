import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';

const ItemListContainer = ({ greeting = 'Comida' }) => {
    const { categoryId } = useParams();
    const [items, setItems]= useState([])

    useEffect( () => {
        (async () => {
            try{
                const products = await getProducts(categoryId)
                setItems(products);
            }catch (error) {
                console.log(error)
            }  
        })()
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
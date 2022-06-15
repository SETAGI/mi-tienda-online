import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({ greeting = 'Comida' }) => {
    const { categoryId } = useParams();
    const [items, setItems]= useState([])

    useEffect( () => {

        const colletctionSelected = categoryId 
            ? query(collection(db,'products'), where('category','==', categoryId)) 
            : collection(db, 'products');

        getDocs(colletctionSelected)
            .then( res => {
                const products = res.docs.map( doc => {
                   return {id: doc.id, ...doc.data()}
                });
                setItems(products);
            }).catch( error => {
                console.log(error)
            })

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
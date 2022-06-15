import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem]= useState({});

    useEffect( () => {
        getDoc(doc(db, 'products', itemId)).then( res => {
            setItem({id: res.id, ...res.data()})
        })
    },[itemId])

    return <ItemDetail {...item} /> 
}

export default ItemDetailContainer
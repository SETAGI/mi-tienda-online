import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItemById } from '../../utils/asyncMockProducts';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem]= useState({});

    useEffect( () => {
        getItemById(itemId).then(res => setItem(res))
    },[itemId])

    return <ItemDetail {...item} /> 
}

export default ItemDetailContainer
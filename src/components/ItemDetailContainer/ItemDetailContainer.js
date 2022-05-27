import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItem } from '../utils/asyncMockProducts';

const ItemDetailContainer = () => {

    const [item, setItem]= useState({});

    useEffect( () => {
        getItem().then(res => setItem(res))
    },[])

    return <ItemDetail item={item}/>
}

export default ItemDetailContainer
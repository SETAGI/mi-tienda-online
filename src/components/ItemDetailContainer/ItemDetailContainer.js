import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItemById } from '../../utils/asyncMockProducts';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({setSelectedAmount}) => {
    const { itemId } = useParams();
    const [item, setItem]= useState({});
    const onAdd = amount => setSelectedAmount( amount )

    useEffect( () => {
        getItemById(itemId).then(res => setItem(res))
    },[itemId])

    return(
        <>
            <ItemDetail {...item} />
            <ItemCount stock={ 10 } initial={ 1 } onAdd={onAdd} />  
        </>
    ) 
}

export default ItemDetailContainer
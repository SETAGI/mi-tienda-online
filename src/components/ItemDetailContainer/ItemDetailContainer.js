import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../services/firebase/firestore';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem]= useState({});

    useEffect( () => {
        (async() => { 
            try {
                const product = await getProductDetail( itemId );
                setItem( product )
            } catch (error) {
                console.log(error)
            }
        })()
    },[itemId])

    return <ItemDetail {...item} /> 
}

export default ItemDetailContainer
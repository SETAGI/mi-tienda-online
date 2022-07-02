import { 
    getDocs, 
    collection, 
    query, 
    where, 
    getDoc, 
    doc, 
    documentId } from 'firebase/firestore'
import { db, collectionsName } from './index'

export const getProducts = async ( categoryId ) => {
    try {
        const colletctionSelected = await categoryId 
            ? query(collection(db,'products'), where('category','==', categoryId)) 
            : collection(db, 'products');
        const response =  await getDocs(colletctionSelected);
        return response.docs.map( doc => {
            return {id: doc.id, ...doc.data()}
        });
    } catch (error) {
        return error
    }        
}

export const getProductDetail = async ( itemId ) => {
    try {
        const response = await getDoc(doc(db, 'products', itemId))
        return {id: response.id, ...response.data()}
    } catch (error) {
        return error
    }
}

export const getProductsById = async ( ids ) => {
    try {
        const collectionRef = collection(db, collectionsName.products)
        return await getDocs(query(collectionRef, where( documentId(), 'in', ids )))
    } catch (error) {
        return error
    }
}
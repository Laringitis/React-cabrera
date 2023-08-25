import { useState, useEffect } from 'react';
import { getProductos } from '../productos'
import Itemlist from './Itemlist'

import { useParams } from 'react-router-dom';


export default function ItemListContainer ({greeting}){
    
    const [productos, setProductos] = useState([])
    const {categoryId}= useParams()

    useEffect(() => {
        const asyncFunc = categotyId?getProductsByCategory : getProductos
        asyncFunc(categoryId)
            .then(Response=> {
                setProductos(Response)
            })
            .catch (error=> {
                console.error(error)
            })
    }, [categoryId])
    return (
        <>
        <h1>{greeting}</h1>
        <Itemlist productos={productos}/>
        </>
    )
}
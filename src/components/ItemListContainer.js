import { useState, useEffect } from 'react';
import { getProductos } from '../productos'
import ItemCount from './ItemCount'
import Itemlist from './Itemlist'


export default function ItemListContainer ({greeting}){
    
    const [productos, setproductos] = useState([])

    useEffect(() => {
        getProductos()
            .then(Response=> {
                setproductos(Response)
            })
            .catch (error=> {
                console.error(error)
            })
    }, [])
    return (
        <>
        <h1>{greeting}</h1>
        <Itemlist productos={productos}/>
        <ItemCount initial= {1} stock= {8} onAdd={(contador)=> console.log ('Cantidad agregada', contador)}/>
        </>
    )
}
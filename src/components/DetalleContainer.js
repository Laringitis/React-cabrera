import { useState , useEffect } from "react"
import {getProductById} from '../productos'
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

export default function DetalleContainer(){
    const [producto, setProducto]= useState(null)
    const {itemId}= useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then(response=> {
                setProducto(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[itemId])
    return(
        <>
        <ItemDetail {...producto}/>
        </>
    )
}
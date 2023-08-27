import { useState , useEffect } from "react"
import {getProductById} from '../productos'
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"

export default function Itemdetailcontainer(){
    const{producto, setProducto}= useState(null)
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
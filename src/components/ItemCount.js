import { useState } from 'react'

export default function ItemCount ({stock, initial, onAdd}){
        const [contador, setContador]= useState(initial)
        const sumar = () => {
            if (contador < stock){
                setContador(contador + 1)
            }
        }
        const restar = () => {
            if (contador > 1){
                setContador(contador - 1)
            }
        }

    return (
        <>
        <button onClick={sumar}>+</button>
        <h2>{contador}</h2>
        <button onClick={restar}>-</button>

        <button onClick={()=> onAdd(contador)} disabled={!stock}></button>
        </>
    )
}
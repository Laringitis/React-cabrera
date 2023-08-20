import { useState } from 'react'

export default function ItemCount ({stock, initial, onAdd}){
        const [contador, Setcontador]= useState= (initial)
        const sumar = () => {
            if (contador < stock){
                Setcontador(contador + 1)
            }
        }
        const restar = () => {
            if (contador > 0){
                Setcontador(contador - 1)
            }
        }

    return (
        <>
        <button onClick={sumar}>+</button>
        <h2>{contador}</h2>
        <button onClick={restar}>-</button>
        </>
    )
}
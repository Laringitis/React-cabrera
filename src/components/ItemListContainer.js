import ItemCount from "./ItemCount"
export default function ItemListContainer ({greeting}){
    return(
        <>
        <ItemCount initial={1} stock={8} onAdd={(contador)=> console.log ('Cantidad agregada', contador)}/>
        </>
    )
}
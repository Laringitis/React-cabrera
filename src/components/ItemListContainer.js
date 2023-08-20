import ItemCount from "./ItemCount"
export default function ItemListContainer ({greeting}){
    return(
        <>
        <h1 className="d-flex flex-column">{greeting}</h1>
        <ItemCount initial={0} stock={8} onAdd={(contador)=> console.log ('Cantidad agregada', contador)}/>
        </>
    )
}

import ItemCount from "./ItemCount"
export function ItemDetail (id, name, price, category, img, description, stock){
    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <h3>{price}$</h3>
            <h3>{description}</h3>
            <h3>stock:{stock}</h3>
            <h4>Categoria:{category}</h4>
            <div><link to={`/item/${id}`} />Ver detalle</div>
            <ItemCount initial={1} stock= {stock} onAdd={(contador)=> console.log ('Cantidad agregada', contador)}/>
        </div>
    )
}
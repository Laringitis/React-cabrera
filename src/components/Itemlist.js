import './ItemListContainer'
import Item from './Item'

export default function Itemlist ({productos}){
    return(
        <div>
            {productos.map (prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
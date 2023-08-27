import { Link } from "react-router-dom"

export default function Item ({id, name, price, category, img, description, stock}){
    return(
        <>
        <article>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <h3>{price}$</h3>
            <h3>{description}</h3>
            <h3>stock:{stock}</h3>
            <h4>Categoria:{category}</h4>
            <div><Link to={`/item/${id}`} />Ver detalle</div>
        </article>
        </>
    )
}


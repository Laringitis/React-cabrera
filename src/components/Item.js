export default function Item (id, name, price, img, description){
    return(
        <>
        <article>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <h3>{price}$</h3>
            <h3>{stock}</h3>
            <h3>{description}</h3>
            <button><link to={'/item/${id}'} />Ver detalle</button>
        </article>
        </>
    )
}


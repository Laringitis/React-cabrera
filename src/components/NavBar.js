
import CartWidget from "./CartWidget"

export default function NavBar (){
    return(
        <>
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Promociones</a></li>
            </ul>
            <CartWidget/>
        </>
    )
}

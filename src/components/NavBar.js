import CartWidget from "./CartWidget"
import logo from "../assents/pngwing1.png"
export default function NavBar (){
    return(
        <>
            <ul className=" order-3 d-flex justify-content-between">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Promociones</a></li>
            </ul>
            <h2 className="order-1">Mi marca</h2>
        <CartWidget/>
        <img className="navbar-brand order-2" src={logo} alt="" />
        </>
    )
}
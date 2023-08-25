import CartWidget from "./CartWidget"
import logo from "../assents/pngwing1.png"
export default function NavBar (){
    return(
        <>
            <h2 className="">Mi marca</h2>
            <link to='/'>
            <img className="" src={logo} alt="" />
            </link>
            <ul className="d-flex text-light">
                <navlink to={'/category/agua'}></navlink>
                <navlink to={'/category/fuego'}></navlink>
                <navlink to={'/category/planta'}></navlink>
                <li className="px-3"><a href="#">Productos</a></li>
                <li className="px-3"><a href="#">Sobre nosotros</a></li>
                <li className="px-3"><a href="#">Promociones</a></li>
            </ul>
        <CartWidget/>
        </>
    )
}

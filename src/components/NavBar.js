import CartWidget from "./CartWidget"
import { Nav } from "react-bootstrap"
import logo from "../assents/pngwing1.png"
import { NavLink, Link } from "react-router-dom"
export default function NavBar (){
    return(
        <>
            <Link to='/'>
                <img className="" src={logo} alt="" />
            </Link>
            <Nav>
                <NavLink to= {'./category/fuego'}></NavLink>
                <NavLink to= {'./category/agua'}></NavLink>
                <NavLink to= {'./category/planta'}></NavLink>
            </Nav>
        <CartWidget/>
        </>
    )
}

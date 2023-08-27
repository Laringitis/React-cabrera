import './index.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import DetalleContainer from './components/DetalleContainer'


function App() {
    return (
        <>
        <BrowserRouter>
        <nav className= 'd-flex justify-content-evenly px-4 py-3 bg-success text-light'>
            <NavBar/>
        </nav>
        
        <Routes>
            <Route path= '/' element={<ItemListContainer/>}/>
            <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='./item/:Item.id' element={<DetalleContainer/>}/>
            <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>

        <div className="d-flex justify-content-center">
            <ItemListContainer greeting={'Bienvenido'} />
            <DetalleContainer/>
        </div>


        </BrowserRouter>
        </>
    );
}

export default App;
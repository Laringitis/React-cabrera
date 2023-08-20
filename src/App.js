import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Container from './components/Container'


function App() {
    return (
        <>
        <nav className= 'd-flex justify-content-evenly px-4 py-3 bg-success text-light'>
            <NavBar/>
        </nav>
        <div className="d-flex justify-content-center">
            <ItemListContainer greeting={('Bienvenidos a mi pre-entrega 1')}/>
        </div>
        <Container/>
        </>
    );
}

export default App;
import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <nav className= 'd-flex justify-content-between'>
      <NavBar/>
      <ItemListContainer/>
      </nav>
  );
}

export default App;

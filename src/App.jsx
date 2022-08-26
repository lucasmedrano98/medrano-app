import './App.css';
import Navbar1 from './components/Navbar/Navbar';
import { useState } from 'react';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx'

function App() {
  const [carrito, setCarrito] = useState([])
  return (
    <div className="App">
      <Navbar1/>
      <ItemListContainer/>
      <div className="qty-display"><span>{carrito.length}</span></div>
      <button onClick={() => {
        setCarrito([...carrito, "Camiseta LA Lakers"]);
        }} variant="primary">Agregar al carrito</button>
    </div>
  );
}

export default App;

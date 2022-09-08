import "./App.css";
import Navbar1 from "./components/Navbar/Navbar";
import { useState } from "react";
import ItemListContainer from "./container/itemListContainer/itemListContainer.jsx";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
    <div className="App">
      <Navbar1 />
      {/* <ItemListContainer setCarrito={setCarrito} carrito={carrito} /> */}
      <ItemDetailContainer/>
      <div className="qty-display">
        <span>{carrito.length}</span>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar1 from "./components/Navbar/Navbar";
import { useState } from "react";
import ItemListContainer from "./container/itemListContainer/itemListContainer.jsx";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [carrito, setCarrito] = useState([]);
  return (
          <>
          <BrowserRouter>
          <Navbar1/>
          <Routes>
            <Route path="/" element={<ItemListContainer setCarrito={setCarrito} carrito={carrito}/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/producto/:idProduct" element={<ItemDetailContainer/>}/>
          </Routes>
          </BrowserRouter>
          </>
  );
}

export default App;

import "./App.css";
import Navbar1 from "./components/Navbar/Navbar";
import ItemListContainer from "./container/itemListContainer/itemListContainer.jsx";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CarritoProvider from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (          
          <BrowserRouter>
          <CarritoProvider>
          <Navbar1/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/producto/:idProduct" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          </CarritoProvider>
          </BrowserRouter>
  );
}

export default App;

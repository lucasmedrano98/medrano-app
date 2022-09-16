import React,{useState} from 'react';

const CarritoContext = React.createContext();

const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const clearCarrito = () => setCarrito([]);

    const isInCart = (id) => carrito.find(producto => producto.id === id) ? true : false;

    const removerProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id));

    const addProducto = (item, newQuantity) => {
     const newCart = carrito.filter (prod => prod.id !== item.id);
     newCart.push({...item, quantity: newQuantity})
     setCarrito(newCart);
     console.log(carrito);

    }

    return(
        <CarritoContext.Provider value={{
            clearCarrito,isInCart,removerProducto, addProducto
        }}>
            {children}
        </CarritoContext.Provider>
    )

}

export default {CarritoProvider,CarritoContext}
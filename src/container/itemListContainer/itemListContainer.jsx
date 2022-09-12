import { useEffect } from "react";
import { useState } from 'react';
import ItemContainer from '../itemContainer/ItemContainer'

const ItemListContainer = ({setCarrito, carrito}) => {
    const [productos, setProductos] = useState ([])
    
     const buscarProductos = async () => {
         const response = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=camisetasbasquet')
        const data = await response.json();
        setProductos(data.results); 
    }
        useEffect(() => {
            buscarProductos()
        },[])


        return (
            <ItemContainer productos={productos} setCarrito={setCarrito} carrito={carrito}/>
            
        )
    }


export default ItemListContainer
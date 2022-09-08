import { useEffect } from "react";
import { useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState ([])
    
     const buscarProductos = async () => {
         const response = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=camisetasbasquet')
        const data = await response.json();
        setProductos(data.results); 
    }
        useEffect(() => {
            buscarProductos()
        },[])
        
        // const producto = productos.find(obj => {
        //     return obj.id === "MLA914182494";
        //   });
          
        //   console.log(producto);

        return (<></>
        // <ItemDetail producto={producto}/>
        )
    }


export default ItemDetailContainer
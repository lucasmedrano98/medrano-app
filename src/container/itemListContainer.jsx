import { useEffect } from "react";
import { useState } from 'react';
import ItemContainer from './ItemContainer'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({setCarrito, carrito}) => {
    const [productos, setProductos] = useState ([])
    
    //  const buscarProductos = async () => {
    //      const response = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=camisetasbasquet')
    //     const data = await response.json();
    //     setProductos(data.results); 
    // }
        useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection (db, "items");
            getDocs(itemsCollection).then((snapshot) =>{
                setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            });
            // buscarProductos()
        },[])


        return (
            <ItemContainer productos={productos} setCarrito={setCarrito} carrito={carrito}/>
            
        )
    }


export default ItemListContainer
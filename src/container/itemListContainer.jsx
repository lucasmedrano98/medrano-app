import { useEffect } from "react";
import { useState } from 'react';
import ItemContainer from './ItemContainer'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = ({setCarrito, carrito}) => {
    const [productos, setProductos] = useState ([])
    const {idCategoria} = useParams();
    
    //  const buscarProductos = async () => {
    //      const response = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=camisetasbasquet')
    //     const data = await response.json();
    //     setProductos(data.results); 
    // }
    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "items"), where("categoryId", "==", `${idCategoria}`));
        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No results");
            }
            setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        });
        // buscarProductos()
    },[productos])


        // useEffect(() => {
        //     const db = getFirestore();
        //     const itemsCollection = collection (db, "items");
        //     getDocs(itemsCollection).then((snapshot) =>{
        //         setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        //     });
        //     // buscarProductos()
        // },[])


        return (
            <ItemContainer productos={productos} setCarrito={setCarrito} carrito={carrito}/>
            
        )
    }


export default ItemListContainer
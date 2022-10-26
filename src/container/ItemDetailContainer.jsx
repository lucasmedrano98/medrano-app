import { useEffect } from "react";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail'
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ([])
    const {idProduct} = useParams();
    
    //  const buscarProducto = async () => {
    //      const response = await fetch (`https://api.mercadolibre.com/items/${idProduct}`)
    //     const data = await response.json();
    //     setProducto(data); 
    // }
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = doc(db, "items", `${idProduct}`);
        getDoc(itemsCollection).then((snapshot) =>{
            if (snapshot.exists()){
                setProducto({id:snapshot.id,...snapshot.data()});
            }
        });
    },[]);
        return (<>
        <ItemDetail producto={producto}/>
        </>
        )
    }


export default ItemDetailContainer


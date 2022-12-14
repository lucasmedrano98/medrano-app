import { useEffect } from "react";
import { useState } from 'react';
import ItemContainer from './ItemContainer'
import { collection, getDocs, getFirestore} from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setProductos(docs)
        });
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
            <ItemContainer productos={productos}/>
            
        )
    }


export default ItemListContainer
import { useCarritoContext } from "../context/CarritoContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const {addProducto} = useCarritoContext();

    const onAdd = (quantity) => {
        addProducto(producto, quantity);
    }

    return (
        <div>
            <h1>{producto.title}</h1>
            <h2>${producto.price}</h2>
            <img src={producto.imageId} alt="Imagen de Item"/>
            <p>{producto.description}</p>
            <ItemCount onAdd={onAdd}/>
        </div>
    )

}

export default ItemDetail
    
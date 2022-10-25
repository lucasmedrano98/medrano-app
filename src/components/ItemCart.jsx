import { useCarritoContext } from "../context/CarritoContext"
import Button from "react-bootstrap/Button";

const ItemCart = ({producto}) => {
    const {removerProducto} = useCarritoContext()
    return (
        <div>
            <img src={producto.imageId} style={{width:"150px"}} alt="Item"/>
            <h3>Titulo: {producto.title}</h3>
            <h3>Precio: ${producto.price}</h3>
            <h3>Cantidad: {producto.quantity}</h3> 
            <h3>Subtotal: ${producto.price * producto.quantity} </h3>    
            <Button onClick={()=>removerProducto(producto.id)}>Remover producto</Button>    
               
        </div>
    )
}

export default ItemCart
import Item from '../components/Item'

const ItemContainer = ({productos, setCarrito, carrito}) => {
  return (
    <div>
      {productos.map((producto) => <Item setCarrito={setCarrito} key={producto.id} producto={producto} carrito={carrito}/>)}
    </div>
   
  )
}

export default ItemContainer;
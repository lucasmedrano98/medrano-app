const ItemCart = ({producto}) => {
    return (
        <div>
            <h3>{producto.title}</h3>
            <h3>${producto.price}</h3>
            <h3>{producto.quantity}</h3>         
               
        </div>
    )
}

export default ItemCart
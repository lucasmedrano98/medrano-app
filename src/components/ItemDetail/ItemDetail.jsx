const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1>{producto.title}</h1>
            <h2>{producto.price}</h2>
            <img src={producto.thumbnail} alt="Imagen de Item"/>
        </div>
    )

}

export default ItemDetail
    
const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1>{producto.title}</h1>
            <h2>${producto.price}</h2>
            <img src={producto.thumbnail} alt="Imagen de Item"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates reprehenderit consequatur consectetur ut! Unde laboriosam corrupti aspernatur neque laudantium culpa vero hic veniam quaerat voluptate alias eius tenetur, enim quidem.</p>
        </div>
    )

}

export default ItemDetail
    
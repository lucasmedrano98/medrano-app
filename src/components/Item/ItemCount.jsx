import React, {useState} from "react";

const ItemCount = ({onAdd}) => {
const [count, setCount] = useState(1);

const decrease = () =>   {
    setCount(-1);
}

const increase = () =>   {
    setCount(+1);
};

return (
    <div>
        <button disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
);
}
export default ItemCount

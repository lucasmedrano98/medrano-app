import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({onAdd}) => {
const [count, setCount] = useState(1);

const decrease = () =>   {
    setCount(count - 1);
}

const increase = () =>   {
    setCount(count + 1);
};

return (
    <div>
        <Button disabled={count <= 1} onClick={decrease}>-</Button>
        <span>{count}</span>
        <Button onClick={increase}>+</Button>
        <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
);
}
export default ItemCount

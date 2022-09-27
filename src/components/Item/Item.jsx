import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCarritoContext } from "../../context/CarritoContext";


const Item = ({producto}) => {
  const {addProducto} = useCarritoContext();

  const onAdd = (quantity) => {
      addProducto(producto, quantity);
  }
  return (
    <Card style={{ width: "18rem", margin: "2rem", display: "inline-block" }}>
      <Card.Img variant="top" src={producto.thumbnail} />
      <Card.Body>
        <Card.Title>{producto.title}.</Card.Title>
        <Card.Text></Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>${producto.price}</ListGroup.Item>
          <ListGroup.Item>Talles S/M/L</ListGroup.Item>
        </ListGroup>
        <ItemCount onAdd={onAdd}/>
        <Link to={`/producto/${producto.id}`}>Ver detalles</Link>
      </Card.Body>
    </Card>
  );
};

export default Item;

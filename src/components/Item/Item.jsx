import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Item = ({ producto, setCarrito, carrito }) => {
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
        <Button
          onClick={() => {
            setCarrito([...carrito, producto.title]);
          }}
          variant="primary"
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemContainer = () => {
  return (
    <Card style={{ width: '18rem', margin: '2rem' }}>
      <Card.Img variant="top" src="/assets/imagenes/laljersey.png" />
      <Card.Body>
        <Card.Title>Camiseta de los Angeles Lakers</Card.Title>
        <Card.Text>
        </Card.Text>
        <ListGroup variant="flush">
        <ListGroup.Item>Precio $100</ListGroup.Item>
        <ListGroup.Item>Talles S/M/L</ListGroup.Item>
      </ListGroup>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemContainer;
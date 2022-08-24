import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Basket <img src="/assets/imagenes/basketlogo.png" alt="Logo" width={50}/> Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Calzado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indumentaria</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
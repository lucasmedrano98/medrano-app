import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './basketlogo.png'

const Navbar1 = () => {
  return (
    <>
          <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="Logo" width={50}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Calzado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indumentaria</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
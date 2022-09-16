import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <NavLink to={'/'}><Navbar.Brand>Basket <img src="/assets/imagenes/basketlogo.png" alt="Logo" width={50}/> Store</Navbar.Brand></NavLink>
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink to={'/categoria/calzado'}>Calzado</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to={'/categoria/Indumentaria'}>Indumentaria</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
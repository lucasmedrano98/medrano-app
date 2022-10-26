import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <NavLink to={'/'}><Navbar.Brand>Basket <img src="/assets/imagenes/basketlogo.png" alt="Logo" width={50}/> Store</Navbar.Brand></NavLink>
          <Nav className="me-auto">
          <NavLink to={'/categoria/calzados'}>Calzados</NavLink>
          <NavLink to={'/categoria/camisetas'}>Camisetas</NavLink>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
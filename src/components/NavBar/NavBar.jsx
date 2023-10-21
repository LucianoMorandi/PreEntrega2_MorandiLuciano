import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import Counter from '../Counter/Counter';
import { FaShoppingCart } from "react-icons/fa";
import './NavBar.css'
const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar bg-warning">
      <Container>
        <NavLink to="/"><img className='logo' src="https://res.cloudinary.com/dxksxp1nx/image/upload/v1697677456/zemqmeuwugeausu5eoot.png" alt="logo" /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <NavLink to="/">Inicio</NavLink>
              <NavLink to='/category/dog'>Perros</NavLink>
              <NavLink to='/category/cat'>Gatos</NavLink>
              <NavLink to="/cart"><FaShoppingCart/></NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
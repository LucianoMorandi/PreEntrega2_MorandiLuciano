import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/">Hogwarst's Student</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavDropdown title="Houses" id="basic-nav-dropdown">
              <NavLink to='/category/Gryffindor'>Gryffindor</NavLink>
              <NavLink to='/category/Slytherin'>Slytherin</NavLink>
              <NavLink to='/category/Hufflepuff'>Hufflepuff</NavLink>
              <NavLink to='/category/Ravenclaw'>Ravenclaw</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
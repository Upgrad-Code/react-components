import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavBarJson from './NavBar.json';
import NavBarRecurcive from './NavBarRecurcive';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NavBarJson &&
              NavBarJson.map((el) => {
                return <NavBarRecurcive data={el} />;
              })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

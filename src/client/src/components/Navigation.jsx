import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({ navbarStyle, navbarExpanded, setNavbarExpanded }) {

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
    console.log(navbarExpanded);
  };

  return (
    <Navbar expand="sm" id="navbar" style={navbarStyle} expanded={navbarExpanded} className={navbarExpanded ? 'navbar-dark open-navbar' : 'navbar-dark'}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-between">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#bio">Bio</Nav.Link>
            <Nav.Link href="#teaching">Teaching</Nav.Link>
            <Nav.Link href="#samples">Sample Videos</Nav.Link>
            <Nav.Link href="#book">Book Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
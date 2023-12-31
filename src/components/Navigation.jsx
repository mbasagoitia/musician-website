import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  // When you hover over the navbar, add slight black overlay to entire page
  // Text gets some kind of effect on hover
  
  return (
    <Navbar expand="sm" id="navbar" className="">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
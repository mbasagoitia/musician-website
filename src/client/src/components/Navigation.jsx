import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({ navbarStyle, navbarExpanded, setNavbarExpanded }) {

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const navLinks = [
    { location: "home", text: "Home"},
    { location: "bio", text: "Bio"},
    { location: "teaching", text: "Teaching"},
    { location: "samples", text: "Sample Videos"},
    { location: "book", text: "Book Me"}
  ]

  return (
    <Navbar expand="sm" id="navbar" style={navbarStyle} expanded={navbarExpanded} className={navbarExpanded ? 'navbar-dark open-navbar' : 'navbar-dark'}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-between">
            {navLinks.map((link, idx) => <Nav.Link key={idx} href={`#${link.location}`} onClick={() => setNavbarExpanded(false)}>{link.text}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
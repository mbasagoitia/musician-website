import Nav from 'react-bootstrap/Nav';

function Footer () {
    return (
        <div className="footer d-flex">
            <Nav className="footer-links">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#bio">Bio</Nav.Link>
                <Nav.Link href="#teaching">Teaching</Nav.Link>
                <Nav.Link href="#samples">Sample Videos</Nav.Link>
                <Nav.Link href="#book">Book Me</Nav.Link>
            </Nav>
            <div className="footer-copyright">
                Copyright © 2024 Belén Hernández, Violin
            </div>
        </div>
    )
}

export default Footer;
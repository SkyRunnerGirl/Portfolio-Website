import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigationbar() {
  return (
    <>
      <Navbar id="navbar" variant="dark">
        <Container id="nav-brand-container">
          <Navbar.Brand id="navbar-brand" href="#hero">
            Rebecca McGirr</Navbar.Brand>
        </Container>
            <Nav className="m-auto gap-5">
              <Nav.Link className="navlink" href="#about">About</Nav.Link>
              <Nav.Link className="navlink" href="#skills">Skills</Nav.Link>
              <Nav.Link className="navlink" href="#projects">Projects</Nav.Link>
              <Nav.Link className="navlink" href="#contact">Contact</Nav.Link>
            </Nav>
      </Navbar>
    </>
  );
}

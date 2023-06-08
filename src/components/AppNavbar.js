import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="mr-auto">
        NESTLE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">DASHBOARD</Nav.Link>
          <Nav.Link href="#courses">LOGOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

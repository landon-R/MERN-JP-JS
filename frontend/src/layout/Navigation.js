import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Hospital</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/lista" className="nav-link">
            Citas
          </Link>
          <Link to="/nueva" className="nav-link">
            Registrar Cita
          </Link>
          <NavDropdown title="Dog show" id="basic-nav-dropdown">
            <Link to="/formdog"  className="dropdown-item" >Crear dog</Link>
            <Link to="/listadogs" className="dropdown-item">Lista dogs</Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/formdog">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#pricing">Logaut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

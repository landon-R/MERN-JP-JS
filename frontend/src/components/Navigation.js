import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
      </Nav>
      <Nav>
        <Nav.Link href="#pricing">Logaut</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;

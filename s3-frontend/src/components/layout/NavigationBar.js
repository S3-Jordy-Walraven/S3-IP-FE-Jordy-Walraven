import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="general-dark-bg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="sign-up">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#AcSettings">
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

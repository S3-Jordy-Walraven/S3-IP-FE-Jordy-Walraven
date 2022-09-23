import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../userContext";

const NavigationBar = (props) => {
  return (
    <div>
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
          <Nav.Item className="text-light nav-link" as={Link} to="effect/upload">Upload</Nav.Item>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <userContext.Consumer>
                {({ user }) => {
                  return user == null ? (
                    <Nav.Item className="text-light">U bent uitgelogd</Nav.Item>
                  ) : (
                    <p className="text-light">
                      U bent ingelogd als {user.given_name}
                    </p>
                  );
                }}
              </userContext.Consumer>
              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <userContext.Consumer>
                  {({ user }) => {
                    return user == null ? (
                      <NavDropdown.Item as={Link} to="sign-up">
                        Login
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item>
                        <button
                          className="border-0"
                          onClick={props.value.userLogout}
                        >
                          Logout
                        </button>
                      </NavDropdown.Item>
                    );
                  }}
                </userContext.Consumer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

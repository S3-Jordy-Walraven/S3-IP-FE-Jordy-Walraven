import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../context/userContext";
import Avatar from '@mui/material/Avatar';


const NavigationBar = (props) => {
  const User = React.useContext(userContext);

  function logout() {
    User.userLogout();
  }

  return (
    <div >
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#212D3A", paddingTop: "0.5%", paddingBottom: "0.5%" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <userContext.Consumer>
              {({ user }) => {
                return user == null ? (
                  <Link className="btn btn-primary" style={{ background: "#688CC6", border: "0px" }} to="sign-up" >Login</Link>
                ) : (
                  <Nav style={{ color: "white" }}>
                    {user == null ? (
                      <></>
                    ) : (
                      <>
                        <Nav.Item
                          className="text-light nav-link"
                          as={Link}
                          to="effect/upload"
                          style={{marginRight:"5%"}}
                        >
                          Upload
                        </Nav.Item>
                        {user != null && <Avatar alt={user.name} src={user.picture} sx={{ height: "50%", width: "15%", marginTop: "auto", marginBottom: "auto" }} />}
                      </>
                    )}
                    <NavDropdown bg="#212D3A" title={user.name} id="navbarScrollingDropdown" >
                      <NavDropdown.Item as={Link} to="my-effects">My Effects</NavDropdown.Item>
                      <NavDropdown.Item><p onClick={logout}>Logout</p></NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                );
              }}
            </userContext.Consumer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default NavigationBar;

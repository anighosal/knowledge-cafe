import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Bar = () => {
  const handleLogOut = () => {
    logout;
  };
  return (
    <Container>
      <Navbar
        className="mx-auto"
        fixed="top"
        bg="dark"
        style={{ zIndex: 100 }}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="text-white fw-bold">
            TechMagnetHire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-2">
              <Nav.Link className="text-white" href="#Home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#About us">
                About Us
              </Nav.Link>
              <Nav.Link className="text-white" href="#Job Listings">
                Job Listings
              </Nav.Link>
              <Nav.Link className="text-white" href="#Contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="gap-2">
              <Button variant="outline-light" onClick={handleLogOut}>
                Log out
              </Button>
              <Link to="/login">
                <Button variant="outline-light">Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Bar;

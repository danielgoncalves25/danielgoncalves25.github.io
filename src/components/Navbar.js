import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import resume from "../assets/CS_resume(fall2020).pdf";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand id="name" href="/">
        Daniel Goncalves
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href={resume} target="_blank" eventKey={2}>
            Resume
          </Nav.Link>
          <Nav.Link eventKey={3} href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link eventKey={4} href="/about">
            About Me
          </Nav.Link>
          <Nav.Link eventKey={5} href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <p> hello qworelr=</p>
  );
};

export default NavBar;

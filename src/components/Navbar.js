import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import res from "../assets/resume.pdf";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand id="name" href="#home">
        <h3>Daniel Goncalves</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link id="grey" href="#home">
            <p>Home</p>
          </Nav.Link>
          <Nav.Link id="grey" href={res} target="_blank" eventKey={2}>
            <p>Resume</p>
          </Nav.Link>
          <Nav.Link eventKey={3} id="grey" href="#projects">
            <p>Projects</p>
          </Nav.Link>
          <Nav.Link id="grey" eventKey={4} href="#about">
            <p>About</p>
          </Nav.Link>
          <Nav.Link eventKey={5} id="grey" href="#contact">
            <p>Contact</p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <p> hello qworelr=</p>
  );
};

export default NavBar;

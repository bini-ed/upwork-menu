import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/header.css";

function AppHeader() {
  return (
    <div className="header">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" color="white">
            <Nav.Link href="#home" className="nav__link">
              <p> Menu</p>
            </Nav.Link>
            <Nav.Link href="#link" className="nav__link">
              <p> Seacrh</p>
            </Nav.Link>
            <Nav.Link href="#link" className="nav__link">
              <p> Branches</p>
            </Nav.Link>
            <Nav.Link href="#link" className="nav__link">
              <p> Order Status</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default AppHeader;

import React from "react";
import "./NavBar.css";
import Login from "../Login/Login";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";

function NavBar(props) {
  let { setIsShowLogin } = props;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><h1>BackNine</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Sign-Up</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Buy" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clubs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Balls</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tech</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Apparel</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sell" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Clubs</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Balls</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">Tech</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.5">Apparel</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
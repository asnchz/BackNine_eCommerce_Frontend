import React from "react";
import "./NavBar.css";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom"


function NavBar(props) {
  // let { setIsShowLogin } = props;

  // let handleClick = () => {
  //   setIsShowLogin((loginInfo) => !loginInfo);
  // };


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to ="/home">
          <h1>BackNine</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to ="/login">
              <button>Login</button>
            </Link>
            <Link to ="/signup">
              <button type="button" data-toggle="Modal" data-target="Modal">Sign Up</button>
            </Link>
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
            <Nav.Link eventKey={2} href="/shoppingcart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user,logout} = useAuth();
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top">
  <Container>
  <Navbar.Brand href="#home">Janta-Garage</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={HashLink} to="/home#home" className="m-3">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services" className="m-3">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts" className="m-3">Experts</Nav.Link>
      {user.email ? <button type="button" onClick={logout} className="btn btn-outline-info m-3">Logout</button>
       : <Nav.Link as={Link} to="/login" className="m-3">Login</Nav.Link>}
      <Navbar.Text className="m-3">
        Signed in as: <a href="#login">{user.displayName }</a>
      </Navbar.Text>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export default Header;

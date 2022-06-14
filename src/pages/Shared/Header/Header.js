import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">G.Car.M</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="m-3">Home</Nav.Link>
            <Nav.Link href="#services"className="m-3">Services</Nav.Link>
            <Nav.Link href="#experts"className="m-3">Experts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

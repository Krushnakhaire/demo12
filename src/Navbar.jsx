
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './navbar.css'; 

const NavbarComponent = () => {
  return (
    <>
    
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container fluid className="navbar-container">
    
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> 
              <Nav.Link href="/" className="px-3">Home</Nav.Link>
              <Nav.Link href="/company" className="px-3">Company</Nav.Link>
              <Nav.Link href="/product" className="px-3">Product</Nav.Link>
              <Nav.Link href="/fertilizer-shop" className="px-3">Fertilizer Shop</Nav.Link>
              <Nav.Link href="/delivery-details" className="px-3">Delivery</Nav.Link>
              <Nav.Link href="/payment-receipt" className="px-3">Payment Receipt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

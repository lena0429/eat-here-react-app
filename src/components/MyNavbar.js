import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar(){
    return(
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/" className="nav-font">HOME</Nav.Link>
      <Nav.Link href="/restaurants" className="nav-font">RESTAURANTS</Nav.Link>
      <Nav.Link href="/restaurants/new" className="nav-font">ADD RESTAURANT</Nav.Link>
      <Nav.Link href="/reviews" className="nav-font">REVIEWS</Nav.Link>
      <Nav.Link href="/reviews/new" className="nav-font">NEW REVIEW</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default MyNavbar
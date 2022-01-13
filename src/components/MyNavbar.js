import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar(){
    return(
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">HOME</Nav.Link>
      <Nav.Link href="/restaurants">RESTAURANTS</Nav.Link>
      <Nav.Link href="/restaurants/new">ADD RESTAURANT</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default MyNavbar
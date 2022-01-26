import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar(){
    return(
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Link to="/" className="nav-link">HOME</Link>
      <Link to="/restaurants" className="nav-font">RESTAURANTS</Link>
      <Link to="/restaurants/new" className="nav-font">ADD RESTAURANT</Link>
      <Link to="/reviews" className="nav-font">REVIEWS</Link>
      <Link to="/reviews/new" className="nav-font">NEW REVIEW</Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default MyNavbar
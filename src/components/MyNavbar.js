import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar(){
    return(
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Link to="/home" className="nav-link">HOME</Link>
      <Link to="/restaurants" className="nav-link">RESTAURANTS</Link>
      <Link to="/restaurants/new" className="nav-link">ADD RESTAURANT</Link>
      <Link to="/reviews" className="nav-link">REVIEWS</Link>
      <Link to="/reviews/new" className="nav-link">NEW REVIEW</Link>
    </Nav>
    </Container>
  </Navbar>
    )
}

export default MyNavbar
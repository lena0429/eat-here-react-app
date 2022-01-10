import React from 'react';
import NewRestaurantForm from '../components/NewRestaurantForm';
import { Container } from 'react-bootstrap';

function RestaurantsContainer() {
  return(
      <Container className="restaurants-container">
          <h1>Restaurants Container</h1>
          <NewRestaurantForm />  
      </Container>
  )
}

export default RestaurantsContainer
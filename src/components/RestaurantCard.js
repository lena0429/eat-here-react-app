import React from 'react';
import { Button } from 'react-bootstrap';

function RestaurantCards(props){

    const restaurantsJSX = props.restaurants.map((restaurant, id) => 
    <div key={id} className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <h4>{restaurant.name}</h4>
      <p>{restaurant.country}</p>
    </div>
    )
    
    return(
        restaurantsJSX
    )
}

export default RestaurantCards
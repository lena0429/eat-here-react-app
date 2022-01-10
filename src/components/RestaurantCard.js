import React from 'react';
import { Button } from 'react-bootstrap';

function RestaurantCard(props){
    return(
           <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <p>{restaurant.name}, {restaurant.country}</p>
            </div>
    )
}

export default RestaurantCard
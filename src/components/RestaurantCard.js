import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RestaurantsContainer from '../containers/RestaurantsContainer';
import RestautrantFilter from './RestautrantFilter';

function RestaurantCard(props){

  const [ thumb, setThumb ] = useState("image")

  function handleEnter(e){
    setThumb( prevState => "gif")
  }

  function handleLeave(e){
    setThumb(prevState => "image")
  }
    
    return(
      <div  
      id={`restaurant-card-${props.id}`}
      className="restaurant-card">
        <img id={props.restaurant.id}
          src={props.restaurant[thumb]} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
          alt={props.restaurant.name} />
        <h4>{props.restaurant.name}</h4>
        <hr className="center-line" />
        <h5>{props.restaurant.country}</h5>
  </div>
    )
}

export default RestaurantCard
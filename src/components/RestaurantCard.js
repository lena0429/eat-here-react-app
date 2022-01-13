import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RestaurantCard(props){

  const [ thumb, setThumb ] = useState("image")

  function handleEnter(e){
      setThumb( prevState => "gif")
  }
     
  function handleLeave(e){
      setThumb(prevState => "image")
  }
    
    return(  
      <Link to={`/restaurants/${props.restaurant.id}`}>
      <div  
      id={`restaurant-card-${props.restaurant.id}`}
      className="restaurant-card">
        <img id={props.restaurant.id}
          src={props.restaurant[thumb]} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
          alt={props.restaurant.name} />
        <h4>{props.restaurant.name}</h4>
        <hr className="center-line" />
        <h5>{props.restaurant.country}</h5>
  </div>
  </Link>
    )
}

export default RestaurantCard
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
      <>
      <Link to={`/restaurants/${props.restaurant.id}`}>
      <div
      key={props.restaurant.id}  
      id={`restaurant-card-${props.restaurant.id}`}
      className="restaurant-card">
        <img id={props.restaurant.id}
          src={props.restaurant[thumb]} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
          alt={props.restaurant.name} />
          <br />
        <h5>{props.restaurant.name} - {props.restaurant.country}</h5>
        <hr className="center-line" />
        <h6 style={{color: "red"}}>{props.restaurant.likes} ❤️</h6>
  </div>
  </Link>
  </>
    )
}

export default RestaurantCard
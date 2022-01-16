import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MostReviewedCard(props) {
    const [ thumb, setThumb ] = useState("image")

  function handleEnter(e){
      setThumb("gif")
  }
     
  function handleLeave(e){
      setThumb("image")
  }
    
    return(
      <>
      <Link to={`/restaurants/${props.restaurant.id}`}>
      <div
      key={props.restaurant.id}  
      id={`restaurant-card-${props.restaurant.id}`}
      className="most-reviewed-card">
        <img id={props.restaurant.id}
          src={props.restaurant[thumb]} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
          alt={props.restaurant.name} />
          <br />
        <h5>{props.restaurant.name} - {props.restaurant.country}</h5>
        <h6 style={{fontSize: '15px'}}>{props.restaurant.reviews.length} Reviews</h6>
  </div>
  </Link>
  </>
    )
}


export default MostReviewedCard
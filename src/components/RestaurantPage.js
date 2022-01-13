import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function RestaurantPage(props){

    return(
<Container className="restaurant-page">
  <Row>
    <Col sm={8}>
      <div className="restaurant-body">
      <h3>{props.restaurant.name}, {props.restaurant.country}</h3>
      <p><i>Updated at: {props.restaurant.updated_at}</i></p>
      <br />
      <img src={props.restaurant.image} alt={props.restaurant.name} /><br /><br />
      <p style={{textAlign: "left"}}>{props.restaurant.text}</p>
       </div> 
    </Col>
    <Col sm={1}><div className="vl"></div></Col>
    <Col sm={3}>most popular stuff</Col>
  </Row>
</Container>  
    )
}

export default RestaurantPage
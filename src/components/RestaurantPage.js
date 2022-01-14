import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

function RestaurantPage(props){

    return(
<Container className="restaurant-page">
  <Row>
    <Col sm={2}><Button variant="secondary" style={{float:"right", margin:"1rem"}} onClick={()=>props.goBack()}>Go Back</Button></Col>
    <Col sm={8}>
      <div className="restaurant-body">
        <br /><br />
      <h3>{props.restaurant.name}, {props.restaurant.country}</h3>
      <p><i>Updated at: {props.restaurant.updated_at}</i></p>
      <br />
      <img src={props.restaurant.image} alt={props.restaurant.name} /><br /><br />
      <p style={{textAlign: "left"}}>{props.restaurant.text}</p>
       </div> 
    </Col>
    <Col sm={2}>
      <div style={{float:"left", margin:"1rem"}}>
      <Button variant="light" onClick={(e) => props.increaseLikes(props.restaurant.id)}>❤️</Button>
      <p style={{color: "red"}}>{props.restaurant.likes} likes</p>
      </div>
    </Col>
  </Row>
</Container>  
    )
}

export default RestaurantPage
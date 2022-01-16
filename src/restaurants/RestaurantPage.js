import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestaurantPage(props){
  const updatedTime = props.restaurant.updatedAt.slice(0, 10)

  const displayReviews = props.restaurant.reviews.map(review => <div key={review.id}>
    <div className="comment-box">
    <img src="https://res.cloudinary.com/teepublic/image/private/s--UymRXkch--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1570281377/production/designs/6215195_0.jpg" alt="anonymous user icon" width="80px" />
    <h5>{review.nickname}  <span style={{fontSize: "12px"}}>Last Updated <i>{review.createdAt.slice(0, 10)}</i></span></h5>
    <p>{review.comment}</p>
      </div>
    </div>)

    return(
        <>    
        <Container className="restaurant-page">
          <Row>
            <Col sm={2}><Button variant="danger" style={{float:"right", margin:"1rem"}} onClick={()=>props.goBack()}>Go Back</Button></Col>
            <Col sm={8}>
              <div className="restaurant-body">
                <br /><br />
              <h3>{props.restaurant.name}, {props.restaurant.country}</h3>
              <p><i>Last Updated {updatedTime}</i></p>
              <br />
              <img src={props.restaurant.image} alt={props.restaurant.name} /><br /><br />
              <p style={{textAlign: "left"}}>{props.restaurant.description}</p>
              <img src={props.restaurant.gif} alt="a gif of this restaurant" /><br /><br />
              <p style={{textAlign: "left", fontWeight:"bold"}}>Address: {props.restaurant.address}</p>
               </div> 
            </Col>
            <Col sm={2}>
              <div style={{float:"left", margin:"1rem"}}>
              <Button variant="danger" onClick={(e) => props.increaseLikes(props.restaurant.id)}>🤍</Button>
              <p style={{color: "red"}}>{props.restaurant.likes} likes</p>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container className="review-section">
          <div style={{textAlign: "right"}}>
          <Link to="/reviews/new"><Button variant="danger">Add Review</Button></Link>
          </div>
          <h3 style={{fontWeight: "bold"}}>{props.restaurant.reviews.length} Reviews</h3>
          
          {props.restaurant.reviews.length === 0 ? null : displayReviews}

            <br /><br />
            
        </Container>
        </>    
    )
}

export default RestaurantPage
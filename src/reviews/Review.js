import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Review(props){
    return(
        <Container className="review-page">
            <Button variant="light" style={{float: "right"}}><Link to={`/restaurants/${props.review.restaurant.id}`} >{props.review.restaurant.name}</Link></Button>
            <h6>Title: {props.review.title}</h6>
            <p>Content: {props.review.content}</p>

        </Container>
    )

}

export default Review
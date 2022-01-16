import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function Review(props){
    return(
            <Container className="comment-box">
            <Link to={`/restaurants/${props.review.restaurant.id}`} ><Button variant="danger" style={{float: "right"}}>{props.review.restaurant.name}</Button></Link>
            <img src="https://res.cloudinary.com/teepublic/image/private/s--UymRXkch--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1570281377/production/designs/6215195_0.jpg" alt="anonymous user icon" width="80px" />
            <h5>{props.review.nickname}  <span style={{fontSize: "12px"}}>Last Updated <i>{props.review.createdAt.slice(0, 10)}</i></span></h5>
            <p>{props.review.comment}</p>
              </Container>
    )

}

export default Review
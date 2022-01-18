import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Review(props){
    return(
            <Container className="comment-box">
            <img src="https://res.cloudinary.com/teepublic/image/private/s--UymRXkch--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1570281377/production/designs/6215195_0.jpg" alt="anonymous user icon" width="80px" />
            <p><b style={{fontSize: "20px"}}>{props.review.nickname}</b> <small style={{fontSize: "12px"}}>reviewed</small> <b>{props.review.restaurant.name}</b></p>  
            <p style={{fontSize: "12px"}}>Last Updated <i>{props.review.createdAt}</i></p>
            <p>{props.review.comment}</p>
            <div style={{textAlign: "right"}}><Button variant="danger" onClick={(e) => props.handleDeleteReview(props.review.id)}>Delete</Button></div>
              </Container>
    )

}

export default Review
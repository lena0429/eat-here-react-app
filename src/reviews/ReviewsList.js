import React from 'react';
import { Container } from 'react-bootstrap';
import Review from './Review'; 

function ReviewsList({reviews}){
    const displayAllReviews = reviews.map((review) => <Review key={review.id} review={review} />)

    return(
        <Container id="reviews-list">
            <h3 style={{fontWeight:"bold", marginTop: "10px"}}>ALL REVIEWS</h3>
            {displayAllReviews}
        </Container>
    )

}

export default ReviewsList
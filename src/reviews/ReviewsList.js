import React from 'react';
import { Container } from 'react-bootstrap';
import Review from './Review'; 

function ReviewsList({reviews, handleDeleteReview}){

    // sort all reviews by descending order
    const sortAllReviews = reviews.sort((firstItem, secondItem) => secondItem.id - firstItem.id)
  
    const displayAllReviews = sortAllReviews.map((review) => <Review key={review.id} review={review} handleDeleteReview={handleDeleteReview}/>)

    return(
        <Container id="reviews-list">
            <h3 style={{fontWeight:"bold", marginTop: "10px"}}>ALL REVIEWS</h3>
            {displayAllReviews}
        </Container>
    )

}

export default ReviewsList
import React from 'react';
import Review from './Review';
import { Switch, Route } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';

function ReviewsContainer({reviews, restaurants}){

    const displayAllReviews = reviews.map((review) => <Review key={review.id} review={review} />)

    return(
        <div className="reviews-container">
        <Switch>  
            <Route exact path="/reviews/new">
                <ReviewForm restaurants={restaurants} />
            </Route>
            <ReviewsList />
        </Switch>           
        </div>
    )
}

export default ReviewsContainer
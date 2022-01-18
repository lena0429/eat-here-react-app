import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';

function ReviewsContainer({reviews, restaurants, handleDeleteReview }){

    return(
        <div className="reviews-container">
        <Switch>  
            <Route exact path="/reviews/new" render={(routeInfo) => {
                return <ReviewForm restaurants={restaurants} goBack={() => routeInfo.history.push("/reviews")}/> 
            }} />
            
            <ReviewsList reviews={reviews} handleDeleteReview={handleDeleteReview} />
        </Switch>           
        </div>
    )
}

export default ReviewsContainer


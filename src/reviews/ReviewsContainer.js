import React from 'react';
import Review from './Review';
import { Switch, Route } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';

function ReviewsContainer({reviews, restaurants }){

    return(
        <div className="reviews-container">
        <Switch>  
            <Route exact path="/reviews/new" render={(routeInfo) => {
                return <ReviewForm restaurants={restaurants} goBack={() => routeInfo.history.push("/reviews")}/> 
            }} />
            
            <ReviewsList reviews={reviews}/>
        </Switch>           
        </div>
    )
}

export default ReviewsContainer


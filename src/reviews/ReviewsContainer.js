import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthReviews } from '../actions/reviewActions';
import Review from './Review';
import { Switch, Route } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { fetchRestaurants } from '../actions/restaurantActions';

function ReviewsContainer(){
    const reviews = useSelector(state => state.reviews.reviews)
    const restaurants = useSelector(state => state.restaurants.restaurants)
    const loading = useSelector(state => state.reviews.loading)
    const dispatch = useDispatch()

    useEffect(() => {
       // componentDidMount
       console.log("mounting reviews")  
       dispatch(fecthReviews())

       // cleanup
       return () => console.log("unmounting reviews")
    }, [dispatch])

  // componentDidMount <= fetch all the data from database
  useEffect(() => {
    console.log("mounting restaurants")
     dispatch(fetchRestaurants())

    // cleanup function
    return () => {
        console.log("unmounting restaurants")
    } 
}, [dispatch])


    const displayAllReviews = reviews.map((review) => <Review key={review.id} review={review} />)

    return(
        <div className="reviews-container">
                  <ReviewForm restaurants={restaurants} />
        </div>
    )
}

export default ReviewsContainer
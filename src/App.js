import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantsContainer from './restaurants/RestaurantsContainer';
import ReviewsContainer from './reviews/ReviewsContainer';
import Homepage from './components/Homepage';
import MyNavbar from './components/MyNavbar';
import { Route } from 'react-router-dom';
import { fetchRestaurants, updateRestaurant } from './actions/restaurantActions';
import { fecthReviews, deleteReview } from './actions/reviewActions';
import Loading from './components/Loading';

function App() {
  const reviews = useSelector(state => state.reviews.reviews)
    const restaurants = useSelector(state => state.restaurants.restaurants)
    const restaurantsLoading = useSelector(state => state.restaurants.loading)
    const reviewsLoading = useSelector(state => state.reviews.loading)
    const dispatch = useDispatch()

    // componentDidMount <= fetch all the restaurants from database
    useEffect(() => {
      console.log("mounting restaurants")
       dispatch(fetchRestaurants())

      // cleanup function
      return () => {
          console.log("unmounting restaurants")
      } 
    }, [dispatch])

    // componentDidMount <= fetch all the reviews from the backend 
    useEffect(() => {
      console.log("mounting reviews")  
      dispatch(fecthReviews())

      // cleanup
      return () => console.log("unmounting reviews")
   }, [dispatch])


   // implementing increasing likes functionality and update the specific restaurant object
   function increaseLikes(id) {
    const baseUrl = "http://localhost:5000/restaurants"
    const restaurant = restaurants.find((r) => r.id === id)
    const configObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({likes: restaurant.likes + 1})
       }
        fetch(`${baseUrl}/${id}`, configObj)
        .then(resp => resp.json())
        .then(data => dispatch(updateRestaurant(data)))
}


function handleDeleteReview(id) {
  const baseUrl = "http://localhost:5000/reviews"
  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(id)
  }
  
  fetch(`${baseUrl}/${id}`, configObj)
    .then(resp => resp.json())
    .then(data => alert(data.message))

    dispatch(deleteReview(id))  
}

  return (
    <div className="App"> 
      <MyNavbar />
       <Route exact path="/">
            <Homepage restaurants={restaurants} reviews={reviews}/>
       </Route>  
         
         <Route path="/restaurants"> 
            { restaurantsLoading ? <Loading /> : <RestaurantsContainer restaurants={restaurants} increaseLikes={increaseLikes} reviews={reviews} /> }
         </Route>

         <Route path="/reviews"> 
            { reviewsLoading ? <Loading /> : <ReviewsContainer reviews={reviews} restaurants={restaurants} handleDeleteReview={handleDeleteReview}/> }
         </Route>
    </div>
  );
}

export default App;

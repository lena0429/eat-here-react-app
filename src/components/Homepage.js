import React from 'react';
import MostReviewedCard from '../restaurants/MostReviewedCard';
import MostLikedCard from '../restaurants/MostLikedCard';

function Homepage({restaurants}){

    const sortByMostReviewed = restaurants.sort((firstItem, secondItem) => secondItem.reviews.length - firstItem.reviews.length)

    const displayMostReviewed = sortByMostReviewed.slice(0, 3).map((restaurant) => <MostReviewedCard key={restaurant.id} restaurant={restaurant} /> )

    const sortByMostLiked = restaurants.sort((firstItem, secondItem) => secondItem.likes - firstItem.likes)

    const displayByMostLiked = sortByMostLiked.slice(0, 3).map((restaurant) => <MostLikedCard key={restaurant.id} restaurant={restaurant} /> )

    return(
        <div id="homepage-jumbotron" className="container-fluid text-dark p-5">
          <div className="container">
             <h1 className="display-6 fw-bold">WELCOME TO EAT HERE</h1>
                 <hr />
             <p>🍽️ Explore the most unusual restautrants around the world 🍽️</p>
          </div>
          <div className="homepage-card-section">
              <h5><b>Most Reviewed Restaurants</b></h5>
               {displayMostReviewed}
          </div>
          <br />
          <hr />
          <div className="homepage-card-section-2">
              <h5><b>Most Liked Restaurants</b></h5>
               {displayByMostLiked}
          </div>
         <br />
        </div>
    )

}

export default Homepage
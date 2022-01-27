import React, { useState, useEffect } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestautrantFilter from './RestautrantFilter';
import { Container } from 'react-bootstrap';
import RestaurantCard from './RestaurantCard';
import RestaurantPage from './RestaurantPage';
import { Switch, Route } from 'react-router-dom';

function RestaurantsContainer({restaurants, increaseLikes, handleDeleteReview}) {
    // set local state for filter function
    const initState = ""
    const [search, setSearch ] = useState(initState)

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    // componentDidUpdate
    useEffect(() => {
        console.log("restaurants updated")
    }, [restaurants])

    function displayRestaurantCards(){
        const displayAllCards = restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
        const result = restaurants.filter((restaurant) => restaurant.country.toLowerCase().includes(search.toLowerCase()))
        if (search.length === 0) {
            return displayAllCards
        } else if (search.length > 0 && result.length > 0) {
            return result.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
        } else if(search.length > 0 && result.length === 0) {
            return <p style={{color: "red"}}><b>No Result Found</b></p>
        } 
    }

  return(
      <Container className="restaurants-container">
          <Switch>
              <Route exact path="/restaurants/new" render={(routeInfo) => {
                  return <NewRestaurantForm goBack={() => routeInfo.history.push("/restaurants")} />
              }} />

          <Route exact path="/restaurants" render={() => {
              return (
                <>
                <RestautrantFilter search={search} handleSearch={(handleSearch)} handleClearClick={() => setSearch("")} />  
                {displayRestaurantCards()}
                </>
              )
          }} />    
    
              <Route path="/restaurants/:id" render={(routeInfo) => {
                      // console.log(routeInfo)
                      const paramsId = parseInt(routeInfo.match.params.id) 
                      const singleRestaurant = restaurants.find((restaurant) => restaurant.id === paramsId)
                      return <RestaurantPage restaurant={singleRestaurant} goBack={() => routeInfo.history.push("/restaurants")} increaseLikes={increaseLikes} handleDeleteReview={handleDeleteReview}/>
                  }}>
  
              </Route> 
          </Switch>
      </Container>
  )
}

export default RestaurantsContainer
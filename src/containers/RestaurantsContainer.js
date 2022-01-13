import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewRestaurantForm from '../components/NewRestaurantForm';
import Loading from '../components/Loading';
import RestautrantFilter from '../components/RestautrantFilter';
import { fetchRestaurants  } from '../actions/restaurantActions';
import { Container } from 'react-bootstrap';
import RestaurantCard from '../components/RestaurantCard';
import RestaurantPage from '../components/RestaurantPage';
import { Switch, Route } from 'react-router-dom';
// import { updateRestaurant  } from '../actions/restaurantActions';

function RestaurantsContainer() {
    const restaurants = useSelector(state => state.restaurants)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    // set local state for filter function
    const initState = ""
    const [search, setSearch ] = useState(initState)


    useEffect(() => {
        console.log("mounting restaurants")
         dispatch(fetchRestaurants())

        // cleanup function
        return () => {
            console.log("unmounting restaurants")
        } 
    }, [dispatch])

    function handleSearch(e) {
        setSearch(e.target.value)
    }

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
                { loading ? <Loading /> : displayRestaurantCards() }
                </>
              )
          }} />    
    
              <Route path="/restaurants/:id" render={(routeInfo) => {
                      // console.log(routeInfo)
                      const paramsId = parseInt(routeInfo.match.params.id) 
                      const singleRestaurant = restaurants.find((restaurant) => restaurant.id === paramsId)
                      return <RestaurantPage restaurant={singleRestaurant} goBack={() => routeInfo.history.push("/restaurants")} />
                  }}>
  
              </Route> 
          </Switch>
      </Container>
  )
}

export default RestaurantsContainer
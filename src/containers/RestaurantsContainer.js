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
import { updateRestaurant  } from '../actions/restaurantActions';

function RestaurantsContainer() {
    const restaurants = useSelector(state => state.restaurants.restaurants)
    const loading = useSelector(state => state.restaurants.loading)
    const dispatch = useDispatch()

    const baseUrl = "http://localhost:5000/restaurants"

    // set local state for filter function
    const initState = ""
    const [search, setSearch ] = useState(initState)


    // componentDidMount <= fetch all the data from database
     useEffect(() => {
         console.log("mounting restaurants")
          dispatch(fetchRestaurants())
 
         // cleanup function
         return () => {
             console.log("unmounting restaurants")
         } 
     }, [dispatch])

    // componentDidUpdate + componentDidMount => check if the state.restaurants updated
     useEffect(() => {
         console.log("restaurants updated")
     }, [restaurants])

    
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


    function increaseLikes(id) {
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
                      return <RestaurantPage restaurant={singleRestaurant} goBack={() => routeInfo.history.push("/restaurants")} increaseLikes={increaseLikes}/>
                  }}>
  
              </Route> 
          </Switch>
      </Container>
  )
}

export default RestaurantsContainer
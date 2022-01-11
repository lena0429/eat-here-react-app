import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewRestaurantForm from '../components/NewRestaurantForm';
import Loading from '../components/Loading';
import RestautrantFilter from '../components/RestautrantFilter';
import { fetchRestaurants  } from '../actions/restaurantActions';
import { Container } from 'react-bootstrap';
import RestaurantCard from '../components/RestaurantCard';



function RestaurantsContainer() {
    const restaurants = useSelector(state => state.restaurants)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const initState = ""
    // set local state for filter function
    const [search, setSearch ] = useState(initState)

    function handleSearch(e) {
        setSearch(e.target.value)
    }


    function makeResultCards(){
        const result = restaurants.filter((restaurant) => restaurant.country.toLowerCase() === search.toLowerCase())
        return result.map((restaurant, id) => <RestaurantCard key={id} restaurant={restaurant} />)
    }

    useEffect(() => {
        console.log("mounting ")
         dispatch(fetchRestaurants())

        // cleanup function
        return () => {
            console.log(" unmounting restaurants")
        } 
    }, [dispatch])

    function makeRestaurantCards(){
        return restaurants.map((restaurant, id) => <RestaurantCard key={id} restaurant={restaurant} />)
    }

  return(
      <Container className="restaurants-container">
          <RestautrantFilter search={search} handleSearch={(handleSearch)} makeResultCards={makeResultCards} handleClearClick={() => setSearch("")} />  
          { loading ? <Loading /> : makeRestaurantCards() }
      </Container>
  )
}

export default RestaurantsContainer
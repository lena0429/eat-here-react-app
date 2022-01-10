import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewRestaurantForm from '../components/NewRestaurantForm';
import Loading from '../components/Loading';
import RestautrantFilter from '../components/RestautrantFilter';
import { fetchRestaurants  } from '../actions/restaurantActions';
import { Container } from 'react-bootstrap';
import RestaurantCard from '../components/RestaurantCard';
import { propTypes } from 'react-bootstrap/esm/Image';


function RestaurantsContainer() {
    const restaurants = useSelector(state => state.restaurants)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()


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
          <RestautrantFilter />  
          { loading ? <Loading /> : makeRestaurantCards() }
      </Container>
  )
}

export default RestaurantsContainer
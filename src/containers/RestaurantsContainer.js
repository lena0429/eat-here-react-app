import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewRestaurantForm from '../components/NewRestaurantForm';
import Loading from '../components/Loading';
import { fetchRestaurants  } from '../actions/restaurantActions';
import { Container } from 'react-bootstrap';
import RestaurantCards from '../components/RestaurantCard';


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

  return(
      <Container className="restaurants-container">
          <NewRestaurantForm />  
          { loading ? <Loading /> : <RestaurantCards restaurants={restaurants} />}
      </Container>
  )
}

export default RestaurantsContainer
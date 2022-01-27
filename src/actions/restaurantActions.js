const baseUrl = "https://mysterious-lake-96985.herokuapp.com/restaurants"

export const addRestaurant = (restaurantObj) => {
    return {
        type: "ADD_RESTAURANT",
        payload: restaurantObj
    }
}

export const fetchRestaurants = () => {
     return (dispatch) => {
         dispatch({type: "LOADING"})

         fetch(baseUrl)
           .then(resp => resp.json())
           .then(data => {
               dispatch({
                   type: "FETCH_RESTAURANTS",
                   payload: data
               })
           })
     }     
}

export const createRestaurant = (restaurant) => {
    return (dispatch) => {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({restaurant})
    }
        fetch(baseUrl, configObj)
          .then(resp => resp.json())
          .then(restaurant => dispatch(addRestaurant(restaurant)))
    }
}

export const updateRestaurant = (newObject) => {
    return {
        type: "UPDATE_RESTAURANT",
        payload: newObject
    }
}


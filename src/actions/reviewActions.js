const baseUrl = "https://mysterious-lake-96985.herokuapp.com/reviews"

export const addReview = (reviewObj) => {
    return {
        type: "ADD_REVIEW",
        payload: reviewObj
    }
}

export const fecthReviews = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})

        fetch(baseUrl)
          .then(resp => resp.json())
          .then(data => {
              dispatch({
                  type: "FETCH_REVIEWS",
                  payload: data
              })
          })
    }
} 


export const createReview = (review) => {
    return (dispatch) => {
    
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({review})
        }

        fetch(baseUrl, configObj)
          .then(resp => resp.json())
          .then(data => dispatch(addReview(data)))
    }
}

export const deleteReview = (id) => {
    return {
        type: "DELETE_REVIEW",
        payload: id
    }
}
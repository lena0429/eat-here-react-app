const baseUrl = "http://localhost:5000/reviews"

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


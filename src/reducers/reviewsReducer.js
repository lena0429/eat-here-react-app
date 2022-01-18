const initialState = {
    reviews: [],
    loading: false
}

const reviewsReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING": 
        return {
            ...state,
            loading: true
        }

        case "ADD_REVIEW":
            return {
                ...state,
                reviews: [...state.reviews, action.payload]
            }

        case "FETCH_REVIEWS":
            return {
                ...state,
                reviews: [...state.reviews, ...action.payload],
                loading: false
            }

        case "DELETE_REVIEW":
            const reviews = state.reviews.filter((review) => review.id !== action.payload)
            return {
                ...state,
                reviews: [...reviews]
            }    
            
        default:
            return state    
    }
}

export default reviewsReducer
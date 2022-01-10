const initState = {
    restaurants: [], 
    loading: false 
}

const restaurantsReducer = (state = initState, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                loading: true
            }

        case "ADD_RESTAURANT":
            return {
                ...state,
                restaurants: [...state.restaurants, action.payload]
            }
            
        case "FETCH_RESTAURANTS":
            return {
                ...state,
                restaurants: [...state.restaurants, ...action.payload],
                loading: false
            }
            
        default:
            return state    
    } 
}

export default restaurantsReducer

// whatever the state returns is going to be the state
// the default action returns the initial state

// how do we pass the actions to the reducer?
// we need `dispatch` function that take in an action and allows us to access the reducer

// The FLow is:
// we build our action
// we dispacth the action to the reducer
// the reducer returns the state 
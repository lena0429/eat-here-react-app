import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import reviewsReducer from  './reviewsReducer';

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
})

export default rootReducer
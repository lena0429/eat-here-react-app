import { createStore, applyMiddleware, compose } from 'redux';
import restaurantsReducer from '../reducers/restaurantsReducer';
import thunk from 'redux-thunk';

const store = createStore(restaurantsReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
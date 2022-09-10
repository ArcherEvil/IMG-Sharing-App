import { configureStore, applyMiddleware, compose, combineReducers, } from '@reduxjs/toolkit';
import { LoginInfoReducer, ProfileDropDownReducer } from '../Reducers';
import thunk from 'redux-thunk'; 

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const reducer = combineReducers({login : LoginInfoReducer, dropdown : ProfileDropDownReducer})


const store = configureStore(
	{ reducer },
	composeEnhancers(),
	applyMiddleware(thunk)
);

export default store;

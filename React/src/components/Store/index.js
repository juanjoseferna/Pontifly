import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './Reducers';

const middlewares = [ thunk ];
const composeEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
);

const store = createStore(allReducers,composeEnhancers);

export default store;
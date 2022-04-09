import { applyMiddleware, compose, createStore } from 'redux';
/* import thunkMiddleware from 'redux-thunk'; */
/* import { composeWithDevTools } from 'redux-devtools-extension' */

// import apiMiddleware from 'libraries/middlewares/api';
import rootReducer from '../context';


/* const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]

let composedEnhancers;
if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) { */
  // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
/*   composedEnhancers = composeWithDevTools(...enhancers)
} else {
  composedEnhancers =  compose(...enhancers);
} */

// const composedEnhancers = compose(...enhancers)


export const store = createStore(rootReducer, /* composedEnhancers */)
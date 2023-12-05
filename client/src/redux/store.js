import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;







// import { createStore, applyMiddleware , compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

// const store = createStore(
//     reducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware)) // esta línea es para poder hacer peticiones a un server
// );
// export default store;
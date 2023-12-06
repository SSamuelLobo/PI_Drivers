import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

// Utiliza la extensión de Redux DevTools si está disponible, de lo contrario, usa compose estándar
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;











// import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducer';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducer,
//   composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;

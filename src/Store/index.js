import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../Reducers/index.js';

import middleware, { sagaMiddleware } from './middleware';

const reducer = persistReducer(
  {
    key: 'visit-pb@1.0', // key is required
    storage, // storage is now required
    // whitelist: ['app', 'user'],
  },
  combineReducers({ ...rootReducer })
);

// window.localStorage.removeItem('persist:visit-pw a');

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );


  if (module.hot) {
    module.hot.accept('../Reducers', () => {
      store.replaceReducer(require('../Reducers/index').default);
    });
  }

  return {
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();

global.store = store;

export { store, persistor };

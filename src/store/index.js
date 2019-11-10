import { createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';

const reducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : compose;

const configStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, composeEnhancers);

  return {
    persistor: persistStore(store),
    store,
  };
};

export const { store, persistor } = configStore();

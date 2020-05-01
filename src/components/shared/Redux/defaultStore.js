import { applyMiddleware, createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import index from './index';
import thunk from 'redux-thunk';

const defaultState = {};

const persistConfig = { //configuration of local storage of redux store
    key: 'root',
    storage,
    blacklist: ['profile']
  };

  const persistedReducer = persistReducer(persistConfig, index);

  export const defaultStore = createStore( //config for AsyncStorage of redux store
    persistedReducer,
    defaultState,
    applyMiddleware(thunk)
  );
  
  export const persistor = persistStore(defaultStore); //persistStore for local sTORAGE
  
  
  
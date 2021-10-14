import { configureStore } from '@reduxjs/toolkit';
import { animeApi } from '../services/animeApi';
import listReducer from './listSlice'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [animeApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, listReducer);

export default configureStore({
    reducer: {
      [animeApi.reducerPath]: animeApi.reducer,
      reducer: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})
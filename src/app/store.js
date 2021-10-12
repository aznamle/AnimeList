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
    storage,
  };

const reducers = combineReducers({
    [animeApi.reducerPath]: animeApi.reducer,
    wList: listReducer,
  });

  const persistedReducer = persistReducer(persistConfig, reducers);


// export default configureStore({
//     reducer: {
//         [animeApi.reducerPath]: animeApi.reducer,
//         wList: listReducer,
//     }
// })

export default configureStore({
    reducer: {
        reducers: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
import { configureStore } from '@reduxjs/toolkit';
import { animeApi } from '../services/animeApi';
import listReducer from './listSlice'

export default configureStore({
    reducer: {
        [animeApi.reducerPath]: animeApi.reducer,
        wList: listReducer,
    }
})
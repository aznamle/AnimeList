import { configureStore } from '@reduxjs/toolkit';
import { animeApi } from '../services/animeApi';
import { listSlice } from './listSlice';

export default configureStore({
    reducer: {
        [animeApi.reducerPath]: animeApi.reducer,
        watchList: listSlice,
    }
})
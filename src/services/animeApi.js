import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.jikan.moe/v3'

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v3' }),
    endpoints: (builder) => ({
        getTopAnime: builder.query({
            query: () => `/top/anime`
        }),
        getAnime: builder.query({
            query: (mal_id) => `/anime/${mal_id}`
        }),
        getSeasonalAnime: builder.query({
            query: ({ year, season }) => `/season/${year}/${season}`
            
        }),
        getSearchAnime: builder.query({
            query: (searchValue) => `/search/anime?q=${searchValue}`
        })
    })
})

export const { 
    useGetTopAnimeQuery, 
    useGetAnimeQuery, 
    useGetSeasonalAnimeQuery,
    useGetSearchAnimeQuery
} = animeApi;
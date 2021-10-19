import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v3' }),
    endpoints: (builder) => ({
        getTopAnime: builder.query({
            query: () => `/top/anime`
        }),
        getTopAiring: builder.query({
            query: () => '/top/anime/1/airing'
        }),
        getAnime: builder.query({
            query: (mal_id) => `/anime/${mal_id}`
        }),
        getSeasonalAnime: builder.query({
            query: ({ year, season }) => `/season/${year}/${season}`
            
        }),
        getSearchAnime: builder.query({
            query: ({searchValue, genre}) => `/search/anime?q=${searchValue}&page=1&genre=${genre}`
        })
    })
})

export const { 
    useGetTopAnimeQuery,
    useGetTopAiringQuery,
    useGetAnimeQuery,
    useGetSeasonalAnimeQuery,
    useGetSearchAnimeQuery
} = animeApi;
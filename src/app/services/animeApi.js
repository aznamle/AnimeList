import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),
    endpoints: (builder) => ({
        getTopAnime: builder.query({
            query: () => `/top/anime`
        }),
        getTop: builder.query({
            query: (type) => `/top/anime?filter=${type}&limit=6`
        }),
        getAnime: builder.query({
            query: (mal_id) => `/anime/${mal_id}`
        }),
        getSeasonalAnime: builder.query({
            query: ({ year, season }) => `/season/${year}/${season}`
        }),
        getSearchAnime: builder.query({
            query: ({searchValue, genre}) => `/search/anime?q=${searchValue}&page=1&genre=${genre}&limit=18`
        })
    })
})

export const { 
    useGetTopAnimeQuery,
    useGetTopQuery,
    useGetAnimeQuery,
    useGetSeasonalAnimeQuery,
    useGetSearchAnimeQuery
} = animeApi;
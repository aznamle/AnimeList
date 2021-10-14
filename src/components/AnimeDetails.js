import React from 'react'
import { useParams } from 'react-router'
import { useGetAnimeQuery } from '../services/animeApi'

const AnimeDetails = () => {
    const { mal_id } = useParams()
    const { data, isFetching } = useGetAnimeQuery(mal_id)

    const AnimeDetails = data

    console.log(AnimeDetails)
    if(isFetching) return 'Loading...'

    return (
        <div>
            
        </div>
    )
}

export default AnimeDetails

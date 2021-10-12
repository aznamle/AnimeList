import React from 'react'

import { useGetTopAnimeQuery } from '../services/animeApi'

const TopAnime = () => {

    const { data, isFetching } = useGetTopAnimeQuery()
    const top = data?.data

    console.log(top)

    return (
        <div>
            test
        </div>
    )
}

export default TopAnime

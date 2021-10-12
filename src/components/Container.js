import React, { useState } from 'react'

import { useGetTopAnimeQuery } from '../services/animeApi'
import List from './List'

const TopAnime = () => {

    const { data, isFetching } = useGetTopAnimeQuery()
    const top = data?.anime

    if(isFetching) return 'loading...'
    
    return (
        <div>
            <List list={top} />
        </div>
    )
}

export default TopAnime

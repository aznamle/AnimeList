import React, { useState, useEffect } from 'react'

import { useGetTopAnimeQuery } from '../services/animeApi'
import List from './List'

const TopAnime = () => {

    const { data, isFetching } = useGetTopAnimeQuery()
    const top = data

    if(isFetching) return 'loading...'
    return (
        <div className=''>
            <List list={top?.top} />
        </div>
    )
}

export default TopAnime

import React from 'react'

import { useGetTopAnimeQuery } from '../app/services/animeApi'
import List from './List'

const TopAnime = () => {

    const { data, isFetching } = useGetTopAnimeQuery()
    const top = data

    if(isFetching) return 'Hahi (￣ﾛ￣ )'
    return (
        <div className='py-24'>
            <List list={top?.top} />
        </div>
    )
}

export default TopAnime

import React from 'react'
import { useGetTopQuery } from '../../app/services/animeApi'
import AnimeCards from '../AnimeCards'
import CardLoader from '../CardLoader'


const TopAiring = ({ type, title }) => {
    const { data, isFetching } = useGetTopQuery(type)
    const top = data?.data

    if(isFetching) return <div className='pt-4'>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className='grid grids:cols-2 md:grid-cols-6 gap-2 justify-center'>{
            [1,2,3,4,5,6].map((n) => <CardLoader key={n} />)}
        </div>
    </div>

    return (
        <div className='py-2'>
            <label className="block text-gray-600 text-lg font-semibold py-1 tracking-wide">
                {title}
            </label>
            <AnimeCards animeQuery={top} />
        </div>
        
    )
}

export default TopAiring

import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Section from './Section'

const AnimeCards = ({ animeQuery, isFetching }) => {

    if(isFetching) return <Loader />
    return (
        <div className='grid grids:cols-2 md:grid-cols-5 gap-2 justify-center'>
        {animeQuery && animeQuery?.map((show) => (
            <Section key={show.mal_id}>
                <div className='py-2 space-y-2 w-5/6'>
                    <Link to={`/anime/${show.mal_id}`}>
                    <div className=''>
                        <img src={show.image_url} alt={show.title} className='object-cover h-72 w-full rounded-md shadow-lg' />
                    </div>
                    </Link>
                    <h1 className='font-semibold text-gray-500'>{show.title}</h1>
                </div>
            </Section>
        ))}
    </div>
    )
}

export default AnimeCards

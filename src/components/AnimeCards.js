import React from 'react'
import { Link } from 'react-router-dom'
import CardLoader from './CardLoader'
import Loader from './Loader'
import Section from './Section'

const AnimeCards = ({ animeQuery, isFetching, isLoading }) => {

    if(isFetching) return <div className='grid grids:cols-2 md:grid-cols-6 gap-2 justify-center'>{
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(
            (n) => <CardLoader key={n} />
            )
        } 
    </div>

    return (
        <div className='grid grids:cols-2 md:grid-cols-6 gap-2 justify-center'>
        {animeQuery?.map((show) => (
            <Section key={show.mal_id}>
                <div className='py-4 space-y-2 w-5/6'>
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

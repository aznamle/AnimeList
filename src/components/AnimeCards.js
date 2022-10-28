import React from 'react'
import { Link } from 'react-router-dom'
import CardLoader from './CardLoader'
import Section from './Section'

const AnimeCards = ({ animeQuery, isFetching }) => {

    if(isFetching) return <div className='grid grids:cols-2 md:grid-cols-6 gap-2 justify-center'>{
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(
            (n) => <CardLoader key={n} />
            )
        } 
    </div>
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-0 hover:text-blue-500'>
        {animeQuery && animeQuery?.map((show, i) => (
            <Section key={show.mal_id}>
                <div className='py-4 w-40 md:w-48'>
                    <Link to={`/anime/${show.mal_id}`} className='space-y-2'>
                    <div className=''>
                        <img src={show.images?.webp.large_image_url} className='object-cover h-72 md:h-72 w-full rounded-md shadow-xl' />
                    </div>
                    <h1 className='font-semibold text-gray-500 truncate transition transform duration-300 hover:text-blue-500'>{show.title}</h1>
                    </Link>
                </div>
            </Section>
        ))}
    </div>
    )
}

export default AnimeCards

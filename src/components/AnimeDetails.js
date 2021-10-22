import React from 'react'
import { useParams } from 'react-router'
import { useGetAnimeQuery } from '../app/services/animeApi'
import Loader from './Loader'

const AnimeDetails = () => {
    const { mal_id } = useParams()
    const { data, isFetching } = useGetAnimeQuery(mal_id)

    const animeDetails = data

    if(isFetching) return <Loader />
    
    return (
        <div className=''>
            <div className='bg-gray-800 mx-auto top-0 overflow-hidden'>
                <img className='object-cover h-48 md:h-96 w-full filter blur-md' src={animeDetails.image_url} />
            </div>
            <div className='bg-gray-50'>
                <div className='mx-auto max-w-screen-2xl px-8 md:px-20 py-6 pb-16 md:flex space-y-2'>
                    <div className='shadow-xl w-1/2 md:w-72 md:-mt-32 z-30'>
                        <img className='object-cover w-full rounded-md' src={animeDetails.image_url} />
                    </div>
                    <div className='md:ml-8 space-y-2 w-full md:w-3/5 md:mt-6'>
                        <h1 className='text-2xl text-gray-500'>
                            {animeDetails.title}
                        </h1>
                        <p className='text-sm font-medium text-gray-400 tracking-wide leading-normal whitespace-pre-line'>
                            {animeDetails.synopsis}
                        </p>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default AnimeDetails
